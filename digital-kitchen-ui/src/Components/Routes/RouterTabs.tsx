import React from "react";
import {Tabs} from "antd";
import './Routes.css'
import {useLocation, useNavigate} from "react-router-dom";
import {useUserStore} from "../../Store/userStore";

const RouterTabs = () => {

    const navigate = useNavigate();
    const { pathname } = useLocation();
    const {user} = useUserStore()

    return (
        <Tabs
            centered={true}
            activeKey={pathname.split('/')[1].toLowerCase()}
            className={"routes"}
            onChange={(path) => {
                navigate(`../${path}`);
            }}
        >
            <Tabs.TabPane tab={'Home'} key={'home'} />
            <Tabs.TabPane tab={"Recipes"} key={'recipes'}/>
            <Tabs.TabPane tab={"Personal cabinet"} key={"personal_cabinet"} />
            {user?.role === "ADMIN" && <Tabs.TabPane tab={"Settings"} key={'settings'}/>}
        </Tabs>
    );
}

export default RouterTabs;