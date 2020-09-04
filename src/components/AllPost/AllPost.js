import React, { useState, useEffect } from 'react';
import {Button, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './AllPost.css'

const AllPost = (props) => {
    const {title, id, body}= props.post;
    
    return (
        <div className="allPost">
            <Box>
               
            </Box>
            <Box>
                <h4>{title}</h4>
                {/* <p>{body}</p> */}
                <Link to={`/userDetail/${id}`}><Button variant="contained" color="secondary">See Detail</Button></Link>
            </Box>
        </div>
    );
};

export default AllPost;