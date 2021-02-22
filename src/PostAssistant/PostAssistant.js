import React from 'react';

const PostAssistant = (props) => {
    
    
    return (
        <div>
            <h1>{props.post.title}</h1>
            <p>{props.post.body}</p>
            <button >See all comments</button>
        </div>
    );
};

export default PostAssistant;