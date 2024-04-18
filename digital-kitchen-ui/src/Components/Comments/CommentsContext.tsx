import React, {createContext, useState} from "react";
import {Comment} from "../../Api/CommentsApi";

export type CommentContextType = {
    comments: Comment[],
    setComments: (comments:Comment[]) => void
}

const CommentContext = createContext<CommentContextType>(undefined!);

export const CommentProvider = ({children}: { children: JSX.Element }) => {
    const [comments, setComments] = useState<Comment[]>([]);

    return (
        <CommentContext.Provider value={{comments, setComments}}>{children}</CommentContext.Provider>
    );
}

export default CommentContext;