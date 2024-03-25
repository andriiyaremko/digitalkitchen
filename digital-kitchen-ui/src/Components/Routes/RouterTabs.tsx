import React from "react";
import {Tabs} from "antd";
import './Routes.css'
import {useLocation, useNavigate} from "react-router-dom";

const RouterTabs = () => {

    const navigate = useNavigate();
    const { pathname } = useLocation();
    return (
        <Tabs
            centered={true}
            activeKey={pathname.toLowerCase()}
            className={"routes"}
            onChange={(path) => {
                navigate(`../${path}`);
            }}
        >
            <Tabs.TabPane tab={'Home'} key={'/home'} />
            <Tabs.TabPane tab={"Recipes"} key={'/recipes'}/>
            <Tabs.TabPane tab={"Blog"} key={'/blog'}/>
            <Tabs.TabPane tab={"Contact"} key={'/contact'}/>
            <Tabs.TabPane tab={"About Us"} key={'/aboutus'}/>
            <Tabs.TabPane tab={"Settings"} key={'/settings'}/>
        </Tabs>
    );
}

export default RouterTabs;