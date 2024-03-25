import React, {useContext} from "react";
import CategoryApi, {Category} from "../../../../../Api/CategoryApi";
import {Button, Form, Input, message, Modal} from "antd";
import CategoryContext from "../CategoryContext";

const CategoryModal = ({
    category,
    open,
    onDone
}:{
    category?:Category;
    open:boolean;
    onDone:() => void;
}) => {

    const [form] = Form.useForm();

    const {setCategories} = useContext(CategoryContext);

    const save = (category: Category) => {
        let promise = !!category
            ? CategoryApi.update(category)
            : CategoryApi.create(category)
        return promise.then(() => {
            CategoryApi.getCategories().then(data => {
                setCategories(data);
            });
            message.success(`Category ${category.name} was successfully saved`);
        });
    };

    const handleSave = () => {
        form
            .validateFields()
            .then((newCategory) => {
                const mergedValues: Category = {
                    ...newCategory,
                    id: category?.id,
                };
                save(mergedValues)
                    .then(onDone)
                    .catch((error) => {
                        if (error.response && error.response.status === 409) {
                            message.error(
                                "Cannot save the category. " + error.response.data.message
                            );
                        } else {
                            message.error("An error occurred while saving the category.");
                        }
                    });
            })
            .catch(() => {});
    };

    return (
        <Modal
            open={open}
            title={category ? "Edit Category" : "New Category"}
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
                    {category ? "Save" : "Create"}
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
                    label="Category:"
                    initialValue={category?.name}
                    style={{marginTop:'20px'}}
                >
                    <Input placeholder="Category" style={{ width: "100%" }} />
                </Form.Item>
            </Form>
        </Modal>
    );
}

export default CategoryModal;