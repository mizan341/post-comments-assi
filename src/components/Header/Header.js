import React from 'react';
import './Header.css';


const Header = () => {
    return (
       
        <div className="mainMenu">
            <ul>
                <li><a href="home" className="">Home</a></li>
                <li><a href="post" className="">Post</a></li>
                <li><a href="friends" className="">Friends</a></li>
                <li><a href="groups" className="">Groups</a></li>
            </ul>
        </div>
    );
};

export default Header;