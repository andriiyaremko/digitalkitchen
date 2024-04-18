import React from "react";
import {Card} from "antd";
import Meta from "antd/es/card/Meta";
import {useNavigate} from "react-router-dom";

const Category = ({id, name, description}:{id:string, name:string, description:string}) => {

    const navigate = useNavigate();

    return (
        <Card
            onClick={() => navigate(`/recipes?category=${id}`)}
            hoverable
            style={{ width: '19%'}}
        >
            <Meta title={name} description={description} />
        </Card>

    );
}

export default Category;