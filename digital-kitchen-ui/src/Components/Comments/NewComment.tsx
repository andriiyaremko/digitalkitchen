import input from "antd/es/input";
import {Button} from "antd";
import {useContext, useState} from "react";
import {useUserStore} from "../../Store/userStore";
import CommentsApi from "../../Api/CommentsApi";
import CommentsContext from "./CommentsContext";
import './Comment.css';
import {Rating} from "react-simple-star-rating";

const {TextArea}= input;

const NewComment = (
    {
        recipeId
    }:{
        recipeId:string;
    }) => {

    const {user} = useUserStore();
    const {comments, setComments} = useContext(CommentsContext);
    const [commentText, setCommentText] = useState<string>('')
    const [rating, setRating] = useState<number>(0);
    const addNewComment = () =>{
        const comment = {
            id:'',
            recipeId:recipeId,
            text:commentText,
            authorId:user?.id || '',
            rating:rating || 0,
        }
        if(user && commentText !== ''){
            CommentsApi.create(comment)
                .then((data) => {
                    setCommentText('');
                    setRating(0);
                    setComments([...comments, data])
                });
        }
    }

    return (
        <div className={'new-comment'}>
            <div className={'comment-header'}>
                <h2>Add new comment</h2>
                <Rating
                    initialValue={rating}
                    onClick={setRating}
                />
            </div>
            <TextArea
                rows={6}
                className={'new-comment-text'}
                placeholder={'Comment'}
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
            />
            <Button
                className={'new-comment-button'}
                onClick={addNewComment}
            >
                Add comment
            </Button>
        </div>
    )
}

export default NewComment;