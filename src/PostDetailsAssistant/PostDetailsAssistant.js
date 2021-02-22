import React from 'react';
import Comments from '../Comments/Comments';

const PostDetailsAssistant = (props) => {
    // console.log(props.filteredPost)
    // console.log(props.id);

    return (
        <div>
            <h3>Post Title:{props.filteredPost.title}</h3>
            <p>Post Body: {props.filteredPost.body}</p>
            <h4>Comments</h4>
            <Comments id={props.id}></Comments>
        </div>
    );
};

export default PostDetailsAssistant;