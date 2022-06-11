import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import DescriptionIcon from '@material-ui/icons/Description';
import BrushIcon from '@material-ui/icons/Brush';
import CommentIcon from '@material-ui/icons/Comment';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import {NavLink} from 'react-router-dom';

const SideMenu = () => {
    return (
        <div className="sideMenu_parent_div">
            <div className="logo">
                <p>W</p>
            </div>
            <div className="navigation">
                <nav>
                    <ul>
                        
                        <li><NavLink exact  to="/" ><PersonIcon/>About</NavLink></li>
                        <li><NavLink exact  to="/resume" ><DescriptionIcon/>Resume</NavLink></li>
                        <li><NavLink exact  to="/works" ><BrushIcon/>Works</NavLink></li>
                        <li><NavLink exact  to="/blog" ><CommentIcon/>Blog</NavLink></li>
                        <li><NavLink exact  to="/contact" ><AlternateEmailIcon/>Contact</NavLink></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default SideMenu;
