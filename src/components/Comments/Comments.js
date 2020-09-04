import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Comments = (props) => {
    const {name, email, body} = props.comment;
   
    return (
        <div className="allPost">
            <h5>{name}</h5>
            <p>{email}</p>
            <p>{body}</p>
        </div>
    );
};

export default Comments;