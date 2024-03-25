import React, {useContext, useState} from "react";
import ProductsContext from "./ProductContext";
import {Button, message, Modal, Table} from "antd";
import {DeleteOutlined, ExclamationCircleOutlined, PlusOutlined} from "@ant-design/icons";
import {ColumnsType} from "antd/es/table";
import ProductApi, {Product} from "../../../../Api/ProductApi";
import ProductModal from "./ProductEditModal/ProductModal";
import CategoryContext from "../Category/CategoryContext";

const ProductManagement = () => {
    const {products, setProducts} = useContext(ProductsContext);
    const {categories} = useContext(CategoryContext)
    const [isModalOpen, setIsModalOpen] = useState(false);

    const deleteProduct = (product: Product) => {
        Modal.confirm({
            title: "Delete the product?",
            icon: <ExclamationCircleOutlined />,
            content: `“${product.name}“ will be deleted. You will not be able to recover it.`,
            okText: "Delete",
            okType: "danger",
            cancelText: "Cancel",
            async onOk() {
                try {
                    await ProductApi.delete(product.id);
                    message.success(`The product was successfully deleted.`)
                    ProductApi.getProducts().then(setProducts);
                } catch (error: any) {
                    if (error.response.data.message) {
                        message.error(
                            "Cannot delete the product. " + error.response.data.message
                        );
                    } else {
                        message.error("An error occurred while deleting the product.");
                    }
                }
            },
        });
    };

    const columns: ColumnsType<Product> = [
        {
            title: "Products",
            dataIndex: "name",
            key: "name",
            className:"title",
        },
        {
            title: "Category",
            dataIndex: "categoryId",
            key: "categoryId",
            render:(record: string) =>{
                const category = categories.find(cat => cat.id === record)?.name;
                return <div>{category}</div>
            }
        },
        {
            title: "Unit",
            dataIndex: "unit",
            key: "unit",
        },
        {
            title: (
                <>
                    <div style={{ display: "flex", justifyContent:"flex-end" }}>
                        <Button
                            onClick={() => {
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
            render: (_, product) => {
                return (
                    <div style={{ display: "flex", justifyContent:"flex-end" }}>
                        <Button
                            type="link"
                            onClick={()=>{
                                deleteProduct(product)
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
                dataSource={products} columns={columns}
                pagination={false}
            />
            <ProductModal
                open={isModalOpen}
                onDone={() => {
                    setIsModalOpen(false);
                }}
            />
        </div>
    );
}

export default ProductManagement;