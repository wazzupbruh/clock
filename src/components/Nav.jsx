import React from 'react'
import './Nav.css'
const Nav = () => {
    return(
        <div class='navBlock'>
            <img src='https://cdn1.dotesports.com/wp-content/uploads/2019/07/29105508/Anomaly-banned.jpg' alt='just anomaly'></img>
            <div className = 'nav'>
            <div>Profile</div>
            <div>Messages</div>
            <div>News</div>
            <div>Music</div>
            <div>Settings</div>
            </div>
        </div>
    );
}

export default Nav;