import {useUserStore} from "../../Store/userStore";
import {Avatar, Card, Layout} from "antd";
import Sider from "antd/es/layout/Sider";
import {Content} from "antd/es/layout/layout";
import React, {useContext} from "react";
import RecipeContext from "../Recipes/RecipesContext";
import {HeartFilled, HeartOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";

const PersonalInfo = () => {

    const {user} = useUserStore();
    const {recipes, favorites} = useContext(RecipeContext);
    const navigate = useNavigate();
    return (
        <Layout>
            <Sider style={{background:"#fff"}}>
                <Avatar size={200}>
                    {user?.firstname}
                </Avatar>
            </Sider>
            <Content style={{
                background: "#fff",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap:"30px"
            }}>
                <div style={{
                    fontSize: "40px"
                }}>
                    {user?.firstname} {user?.lastname}
                </div>
                <div style={{
                    fontSize: "40px"
                }}>
                    {user?.email}
                </div>
                {
                    favorites.map(fav => {
                        const recipe = recipes.find(rec => rec.id === fav.recipeId);
                        return <Card
                            key={recipe?.id}
                            style={{width: "30%", cursor: 'pointer'}}
                            onClick={() => navigate(`/recipes/${recipe?.id}`)}
                            title={
                                <>
                                    <img style={{width: '100%'}}
                                         src={recipe?.image || "https://www.allrecipes.com/thmb/bpSBhLU5kqX-NIUqMNouJ3RdmoM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/7546484_Bruschetta-Chicken-Pasta-Salad_Thedailygourmet_4x3-3f223c15733f4e9bba86e43803278cf7.jpg"}
                                         alt=""
                                    />
                                    {favorites.find(rec=> rec.recipeId === recipe?.id) ? <HeartFilled
                                        style={{
                                            position:'absolute',
                                            top:"10px",
                                            right:"10px",
                                            zIndex:"100",
                                            color:"red",
                                            fontSize: "40px",
                                            cursor: "pointer",
                                        }}
                                    /> : <HeartOutlined
                                        style={{
                                            position:'absolute',
                                            top:"10px",
                                            right:"10px",
                                            zIndex:"100",
                                            color:"red",
                                            fontSize: "40px",
                                            cursor: "pointer"
                                        }}
                                    />}
                                </>
                            }
                        >
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <div>
                                    {recipe?.name}
                                </div>
                                <div>
                                    {recipe?.time} minutes
                                </div>
                            </div>
                        </Card>
                    })
                }
            </Content>
        </Layout>
    )
}

export default PersonalInfo;