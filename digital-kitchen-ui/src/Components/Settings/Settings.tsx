import React, {useState} from "react";
import {Layout, Menu, MenuProps} from "antd";
import Sider from "antd/es/layout/Sider";
import {Content} from "antd/es/layout/layout";
import CategoryManagement from "./SettingsPages/Category/CategoryManagement";
import ProductManagement from "./SettingsPages/Product/ProductManagement";

export type MenuItem = {
    key: string,
    label: string,
    children?: MenuItem[],
}

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const Settings = () => {

    const menuItems: MenuProps['items'] = [
        getItem("Category","Category"),
        getItem("Ingredients", "Ingredients"),
    ]

    const [selectedMenuItem, setSelectedMenuItem] = useState<any>(menuItems[0]);

    const handleMenuChange: MenuProps['onClick'] = (menuItem) =>{
        setSelectedMenuItem(getItem(menuItem.key, menuItem.key));
    }

    return (
        <Layout>
            <Sider style={{backgroundColor:"white"}}>
                <Menu
                    className='settings-menu'
                    mode="inline"
                    items={menuItems}
                    selectedKeys={[selectedMenuItem.key]}
                    onClick={handleMenuChange}
                    style={{border:'none'}}
                />
            </Sider>
            <Content style={{backgroundColor:"white"}}>
                {selectedMenuItem.key === "Category" && <CategoryManagement/>}
                {selectedMenuItem.key === "Ingredients" && <ProductManagement/>}
            </Content>
        </Layout>
    );
}

export default Settings;