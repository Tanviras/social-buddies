import React, { useEffect, useState } from 'react';

const Comments = (props) => {

    console.log(props);
    // const [comments,setComments]=useState([]);
    //  useEffect(()=>{
    //           const url=`https://jsonplaceholder.typicode.com/comments?postId=${id}`;
    //           fetch(url)
    //           .then(res=>res.json())
    //           .then(data=>{
    //                       setComments(data);
    //                       })
    //                       })


   
    return (
        <div>
            <h1>This is comment of post:{props.id}</h1>
        </div>
    );
};

export default Comments;