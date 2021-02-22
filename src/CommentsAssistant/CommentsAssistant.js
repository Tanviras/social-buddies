import React from 'react';

const CommentsAssistant = (props) => {
    const {email,name,body}=props.comment;
    return (
        <div>
            <h3>{name}</h3>
            <h4>E-mail:{email}</h4>
            <h5>{body}</h5>
        </div>
    );
};

export default CommentsAssistant;