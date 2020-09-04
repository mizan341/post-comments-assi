import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';
import { Container } from '@material-ui/core';

const PostDetail = () => {
    const {userId} = useParams();
    const [detail, setDetail]=useState({})
    useEffect(()=>{
        const url =`https://jsonplaceholder.typicode.com/posts/${userId}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setDetail(data));
    }, []);
    const [comment, setComment] = useState([])
    console.log(comment)
   
    
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${userId}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setComment(data)
            // console.log(data)
        })
    }, [])
    
    return (
        <Container maxWidth="sm">
        <div className="postPage">
            
           <div>
               <h4>{detail.title}</h4>
                <p>{detail.body}</p> 
           </div>
                <p>comments</p>
                {
                    comment.map(comment=> <Comments comment = {comment}></Comments>)
                }
           </div>
           </Container>
    );
};

export default PostDetail;