import React from 'react'
import SideMenu from './SideMenu'
import About from './About';
import Details from './Details';
// import { Link } from "react-router-dom";

 function Home() {
    return (
        <div className="home">
            <SideMenu />
            <Details name="Mohd Wasim" dev="Front-End Developer" cv="Download CV"/>
            <About name="Mohd Wasim" dev="Front-End Developer" head="About Me" age="24" residence="India" freelance="Available" add="Badarpur, New Delhi"/>
        </div>
    )
}
export default Home;