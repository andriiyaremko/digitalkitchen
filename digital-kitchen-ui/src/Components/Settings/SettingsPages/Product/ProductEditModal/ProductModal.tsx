import React, {useContext} from "react";
import {Button, Form, Input, InputNumber, message, Modal, Select} from "antd";
import ProductsContext from "../ProductContext";
import ProductApi, {Product} from "../../../../../Api/ProductApi";
import CategoryContext from "../../Category/CategoryContext";

const ProductModal = ({
                           open,
                           onDone
                       }:{
    open:boolean;
    onDone:() => void;
}) => {

    const [form] = Form.useForm();

    const {setProducts} = useContext(ProductsContext);
    const {categories} = useContext(CategoryContext)

    const categoryOptions = categories.map(cat =>{
        return {label:cat.name, value: cat.id}
    })
    const save = (product: Product) => {
        return ProductApi.create(product)
            .then(() => {
                ProductApi.getProducts().then(data => {
                    setProducts(data);
            });
            message.success(`Product ${product.name} was successfully saved`);
        });
    };

    const handleSave = () => {
        form
            .validateFields()
            .then((newIngredient) => {
                save(newIngredient)
                    .then(onDone)
                    .catch((error) => {
                        if (error.response && error.response.status === 409) {
                            message.error(
                                "Cannot save the product. " + error.response.data.message
                            );
                        } else {
                            message.error("An error occurred while saving the product.");
                        }
                    });
            })
            .catch(() => {});
    };

    return (
        <Modal
            open={open}
            title={"New Product"}
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
                    Create
                </Button>,
            ]}
        >
            <Form
                layout='vertical'
                form={form}
            >
                <Form.Item name="id" hidden={true} />
                <Form.Item
                    name="name"
                    label="Product:"
                    style={{marginTop:'20px'}}
                >
                    <Input placeholder="Select a product" style={{ width: "100%" }} />
                </Form.Item>

                <Form.Item
                    name="categoryId"
                    label="Category:"
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
                    name="unit"
                    label="Unit:"
                    style={{marginTop:'20px'}}
                >
                    <Select
                        showSearch
                        placeholder="Select a unit"
                        options={[{
                            label:'Gram',
                            value:'gram',
                        },{
                            label:"Cups",
                            value:'cups'
                        }]}
                    />
                </Form.Item>

                <Form.Item
                    name="calories"
                    label="Calories:"
                    style={{marginTop:'20px'}}
                >
                    <InputNumber
                        style={{width:'100%'}}
                        placeholder="Enter a calories value"
                    />
                </Form.Item>
            </Form>
        </Modal>
    );
}

export default ProductModal;