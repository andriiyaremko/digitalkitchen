import React, {useContext, useState} from "react";
import {ColumnsType} from "antd/es/table";
import CategoryApi, {Category} from "../../../../Api/CategoryApi";
import {Button, message, Modal, Table} from "antd";
import {DeleteOutlined, EditOutlined, ExclamationCircleOutlined, PlusOutlined} from "@ant-design/icons";
import CategoryContext from "./CategoryContext";
import CategoryModal from "./CategoryEditModal/CategoryModal";

const CategoryManagement = () => {

    const {categories, setCategories} = useContext(CategoryContext)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editedCategory, setEditedCategory] = useState<Category>();

    const deleteCategory = (category: Category) => {
        Modal.confirm({
            title: "Delete the category?",
            icon: <ExclamationCircleOutlined />,
            content: `“${category.name}“ will be deleted. You will not be able to recover it.`,
            okText: "Delete",
            okType: "danger",
            cancelText: "Cancel",
            async onOk() {
                try {
                    await CategoryApi.delete(category.id);
                    message.success(`The Category was successfully deleted.`)
                    CategoryApi.getCategories().then(setCategories);
                } catch (error: any) {
                    if (error.response.data.message) {
                        message.error(
                            "Cannot delete the category. " + error.response.data.message
                        );
                    } else {
                        message.error("An error occurred while deleting the category.");
                    }
                }
            },
        });
    };

    const columns: ColumnsType<Category> = [
        {
            title: "Category",
            dataIndex: "name",
            key: "name",
            className:"title",
        },
        {
            title: (
                <>
                    <div style={{ display: "flex", justifyContent:"flex-end" }}>
                        <Button
                            onClick={() => {
                                setEditedCategory(undefined);
                                setIsModalOpen(true)
                            }}
                            type="primary"
                        >
                            <PlusOutlined/> New
                        </Button>
                    </div>
                </>
            ),
            dataIndex: "actions",
            key: "new",
            render: (_, category) => {
                return (
                    <div style={{ display: "flex", justifyContent:"flex-end" }}>
                        <Button
                            type="link"
                            onClick={() => {}}
                        >
                            <EditOutlined/>
                        </Button>
                        <Button
                            type="link"
                            onClick={()=>{
                                deleteCategory(category)
                            }}
                        >
                            <DeleteOutlined/>
                        </Button>
                    </div>
                );
            },
        },
    ];

    return (
        <div>
            <Table
                rowKey={"id"}
                dataSource={categories} columns={columns}
                pagination={false}
            />
            <CategoryModal
                open={isModalOpen}
                onDone={() => {
                    setIsModalOpen(false);
                }}
                category={editedCategory}
            />
        </div>
    );
}

export default CategoryManagement;