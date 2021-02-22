import React from 'react';
import PostAssistant from '../PostAssistant/PostAssistant';

const Post = (props) => {
    // console.log(props);
    
    return (
        <div>
                {
                props.posts.map(post=><PostAssistant post={post}></PostAssistant>)
                }
        </div>
    );
};

export default Post;