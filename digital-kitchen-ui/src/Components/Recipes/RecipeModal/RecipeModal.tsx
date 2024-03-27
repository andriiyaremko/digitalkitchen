import React, {useContext, useState} from "react";
import {Button, Form, Input, message, Modal, Select} from "antd";
import RecipeApi, {Ingredient, Recipe} from "../../../Api/RecipeApi";
import RecipesContext from "../RecipesContext";
import CategoryContext from "../../Settings/SettingsPages/Category/CategoryContext";
import ProductsContext from "../../Settings/SettingsPages/Product/ProductContext";
import '../Recipe.css';
import {useUserStore} from "../../../Store/userStore";

const { TextArea } = Input;

const RecipeModal = ({
                           recipe,
                           open,
                           onDone
                       }:{
    recipe?:Recipe;
    open:boolean;
    onDone:() => void;
}) => {

    const {user} = useUserStore()

    const [form] = Form.useForm();

    const {setRecipes} = useContext(RecipesContext);
    const {categories} = useContext(CategoryContext);
    const {products} = useContext(ProductsContext)

    const [selectedIngredients, setSelectedIngredients] = useState<Ingredient[]>(recipe?.ingredients || []);

    const categoryOptions = categories.map(cat =>{
        return {label:cat.name, value: cat.id}
    })

    const productOptions = products.map(product =>{
        return{label: product.name, value:product.id}
    })

    const addNewIngredient = () => {
        let productId = form.getFieldValue('product');
        let value = form.getFieldValue('amount');
        form.resetFields(['product', 'amount'])
        setSelectedIngredients(
            [...selectedIngredients,
                {
                    id:'',
                    productId: productId,
                    value: value,
                    recipeId:recipe?.id || '',
                }
            ])
    }

    const save = (recipe: Recipe) => {
        let promise = !!recipe
            ? RecipeApi.update(recipe)
            : RecipeApi.create(recipe)
        return promise.then(() => {
            RecipeApi.getRecipes().then(data => {
                setRecipes(data);
            });
            message.success(`Recipe ${recipe.name} was successfully saved`);
        });
    };

    const handleSave = () => {
        form
            .validateFields()
            .then((newRecipe) => {
                const mergedValues: Recipe = {
                    ...newRecipe,
                    ingredients:selectedIngredients,
                    id: recipe?.id,
                };
                save(mergedValues)
                    .then(onDone)
                    .catch(() => {
                            message.error("An error occurred while saving the category.");
                    });
            })
            .catch(() => {});
    };

    return (
        <Modal
            open={open}
            title={recipe ? "Edit Recipe" : "New Recipe"}
            okText="Save"
            onCancel={onDone}
            onOk={handleSave}
            maskClosable={false}
            afterClose={() => {
                form.resetFields();
            }}
            destroyOnClose={true}
            footer={[
                <Button key="cancel" onClick={onDone}>
                    Cancel
                </Button>,
                <Button key="save" type="primary" onClick={handleSave}>
                    {recipe ? "Save" : "Create"}
                </Button>,
            ]}
        >
            <Form
                layout='vertical'
                form={form}
            >
                <Form.Item name="id" hidden={true} />
                <Form.Item name="author" initialValue={user?.id} hidden={true} />
                <Form.Item
                    name="name"
                    label="Recipe:"
                    initialValue={recipe?.name}
                    style={{marginTop:'20px'}}
                >
                    <Input placeholder="Recipe" style={{ width: "100%" }} />
                </Form.Item>

                <Form.Item
                    name="category"
                    label="Category:"
                    initialValue={recipe?.category}
                    style={{marginTop:'20px'}}
                >
                    <Select
                        showSearch
                        placeholder="Select a category"
                        optionFilterProp="children"
                        options={categoryOptions}
                        filterOption={(input, option) =>
                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                        }
                    />
                </Form.Item>
                <Form.Item
                    name='description'
                    label='Description:'
                    initialValue={recipe?.description}
                >
                    <TextArea rows={4} placeholder="Add the description"/>
                </Form.Item>
                <Form.Item
                    name='time'
                    label='Time of cooking:'
                    initialValue={recipe?.time}
                >
                    <Input placeholder="Enter cooking time"/>
                </Form.Item>
                <div>
                    <div>
                        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                            <span style={{fontSize:'16px',fontWeight:'600'}}>Ingredients of the recipe</span>
                            <Button type='primary' onClick={addNewIngredient}>
                                Add new ingredient
                            </Button>
                        </div>
                        <div className='recipe-modal-body'>
                            <Form.Item
                                name='product'
                                label={"Ingredient"}
                            >
                                <Select
                                    showSearch
                                    placeholder="Select an ingredient"
                                    optionFilterProp="children"
                                    options={productOptions}
                                    filterOption={(input, option) =>
                                        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                    }
                                />
                            </Form.Item>
                            <Form.Item
                                name='amount'
                                label={"Amount"}
                            >
                                <Input placeholder={"Amount"}/>
                            </Form.Item>
                        </div>
                    </div>
                </div>

            </Form>
            {selectedIngredients?.length > 0 ? selectedIngredients.map(ingr => {
                let product = products.find(pr => pr.id === ingr.productId)
                return <div
                    key={product?.id}
                >
                    {product?.name || "Unknown ingredient"} - {ingr.value} {product?.unit}
                </div>
            }): null}
        </Modal>
    );
}

export default RecipeModal;