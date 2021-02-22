import React from 'react';
import { useParams } from 'react-router-dom';
import PostDetailsAssistant from '../PostDetailsAssistant/PostDetailsAssistant';

const PostDetails = (props) => {
    const {id}=useParams();
    // console.log(props.posts);
    



    const postforid=props.posts.map(el=>el.id)
    // console.log(postforid);
    const matchedpost = postforid.find(el => el==id);
    // console.log(matchedpost); 
    const filteredPost=props.posts[matchedpost-1];
    // console.log(filteredPost);     




    
   


    return (
        <div>
            <h1>Post of id-{id}</h1>
           {
          <PostDetailsAssistant filteredPost={filteredPost} id={id}></PostDetailsAssistant>
           }
        </div>
    );
};

export default PostDetails;