import React from 'react';
import {Button, Box } from '@material-ui/core';
import { Link} from 'react-router-dom';
import './AllPost.css';

const AllPost = (props) => {
        const {title, id}= props.post;
        // const {url}= props.photo;
        // console.log(props.photo.url);
       return (
        <div className="allPost">
            <Box>
                
                 <img src='https://lh3.googleusercontent.com/proxy/AZQ0WIJZf9EANDcvRpOX8RGyi8NJ8_oBed653dSYkOnSvYawoFleOafCur47BchF6bJgMMajninRd4otClHQAzk1Wp3U3lxlMVRmaAFpIUotaZh-QWz_xxiMUuT7'/>
                <h4>{title}</h4>
                <Link to={`/userDetail/${id}`}><Button variant="contained" color="secondary">See Detail</Button></Link>
            </Box>
        </div>
    );
};

export default AllPost;