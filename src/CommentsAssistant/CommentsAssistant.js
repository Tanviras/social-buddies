import React from 'react';
import './CommentsAssistant.css';

const CommentsAssistant = (props) => {
    const {email,name,body}=props.comment;

    // const [users,setUsers]=useState([]);
    // useEffect(()=>{
    // const url=`https://randomuser.me/api/?results=8`;
    //           fetch(url)
    //           .then(res=>res.json())
    //           .then(data=>{
    //                       setUsers(data);
    //                       })
    //                       })

    return (
        <div className="comment">
            {/* image to be added */}
            
            <h2>{name}</h2>
            <h4>{email}</h4>
            <h5>{body}</h5>
        </div>
    );
};

export default CommentsAssistant;