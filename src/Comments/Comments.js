import React, { useEffect, useState } from 'react';
import CommentsAssistant from '../CommentsAssistant/CommentsAssistant';

const Comments = (props) => {

    // console.log(props);

    const [comments,setComments]=useState([]);
     useEffect(()=>{
              const url=`https://jsonplaceholder.typicode.com/comments?postId=${props.id}`;
              fetch(url)
              .then(res=>res.json())
              .then(data=>{
                          setComments(data);
                          })
                          })

   
    return (
        <div>
            <h1>This is comment of post:{props.id}</h1>
            {
            comments.map(comment=><CommentsAssistant comment={comment}></CommentsAssistant>)
            }
            
        </div>
    );
};

export default Comments;