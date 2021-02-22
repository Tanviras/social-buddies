import React, { useEffect, useState } from 'react';
import Home2 from '../Home2/Home2';

const Home = (props) => {
// var proppedPosts=props.posts;
// console.log(proppedPosts);
//props shows undefined

const [posts,setPosts]=useState([]);

  useEffect(()=>{
    const url="https://jsonplaceholder.typicode.com/posts";
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
                setPosts(data);
                })
                })
    return (
        <section>
             {
               posts.map(post=><Home2 post={post}></Home2>)
             }
        </section>
           );
           };


export default Home;