import {useContext} from "react";
import CommentsContext from "./CommentsContext";
import CommentItem from "./CommentItem";

const CommentsList = () => {
    const {comments} = useContext(CommentsContext);

    return <div style={{marginTop:'50px'}}>
        {
            comments.length > 0
                ? <div> {comments.map(comment => <CommentItem comment={comment}/>)}</div>
                : <div>No comments yet</div>
        }
    </div>
}

export default CommentsList