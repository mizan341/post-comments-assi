import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import './Comments.css';

const Comments = (props) => {
    const element = <FontAwesomeIcon icon={faComment} />
    const {name, email, body} = props.comment;
   
    return (
        <div className="allPost postComment">
           <div className="imgAndName">
                <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQJ-on3YgNQTwERMcCqFIsXgHmbWBXBHV10SA&usqp=CAU"/>
            </div>
            <div>
                <h5>{name}</h5>
                <p>{email}</p>
            </div>
           </div>
            <p>{element} comments</p>
            <p>{body}</p>
        </div>
    );
};

export default Comments;