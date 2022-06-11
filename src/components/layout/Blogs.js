import React from 'react';
import SideMenu from './SideMenu'
import Details from './Details';

const Blogs = () => {
    return (
        <div className="home">
            <SideMenu />
            <Details name="Mohd Wasim" dev="Front-End Developer" cv="Download CV"/>
            <div className="common_box">
                Blogs
            </div>
        </div>
    );
}

export default Blogs;
