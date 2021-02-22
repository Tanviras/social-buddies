import React from 'react';
import { Link } from 'react-router-dom';

const Home2 = (props) => {
    // console.log(props);


    return (
        <div>
            <h1>{props.post.title}</h1>
            <Link to={"/post/"+ props.post.id}> <button>See the full post</button> </Link>
        </div>
    );
};

export default Home2;