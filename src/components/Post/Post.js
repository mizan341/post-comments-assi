import React, { useState, useEffect } from 'react';
import './Post.css';
import AllPost from '../AllPost/AllPost';
import { Container, Box } from '@material-ui/core';

const Post = () => {
    const [post, setPost]=useState([]);
    useEffect(()=>{
        const url =`https://jsonplaceholder.typicode.com/posts`;
        fetch(url)
        .then(res => res.json())
        .then(data=>{
            setPost(data);
        })
    },[]);
    
    

    return (
        <div  className="postPage">
            <Container maxWidth="sm" className="containerClass">
             {
                    post.map(post=><AllPost post ={post} key = {post.id}></AllPost>)
                }
             </Container>
        </div>
    );
};

export default Post;