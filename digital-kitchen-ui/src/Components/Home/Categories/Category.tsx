import React from "react";
import {Card} from "antd";
import Meta from "antd/es/card/Meta";

const Category = ({name, description}:{name:string, description:string}) => {
    return (
        <Card
            hoverable
            style={{ width: '19%'}}
        >
            <Meta title={name} description={description} />
        </Card>
    );
}

export default Category;