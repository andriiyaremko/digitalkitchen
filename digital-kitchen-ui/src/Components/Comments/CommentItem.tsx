import {Avatar} from "antd";
import {Rating} from "react-simple-star-rating";
import './Comment.css';
import {UserOutlined} from "@ant-design/icons";
import {useContext} from "react";
import UsersContext from "../Users/UsersContext";
import {Comment} from "../../Api/CommentsApi";

const CommentItem = (
    {
        comment
    }:{
        comment:Comment;
    }) => {

    const {users} = useContext(UsersContext);
    const user = users.find(user=> user.id === comment.authorId);

    return (
        <div className={'comment'} id={comment.id}>
            <div className={'comment-header'}>
                <div className={'comment-user-info'}>
                    <Avatar size={40} icon={<UserOutlined />} />
                    <div>{
                        user?.firstname + " " + user?.lastname
                    }</div>
                </div>
                <Rating
                    readonly={true}
                    initialValue={comment.rating}
                />
            </div>
            <div className={'comment-text'}>
                {comment.text}
            </div>
        </div>)
}
// @ts-ignore
export default CommentItem;