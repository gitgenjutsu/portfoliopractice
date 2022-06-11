import React from 'react';
import SideMenu from './SideMenu'
import Details from './Details';
import {Form} from "react-bootstrap";

const Contact = () => {
    return (
        <div className="home">
            <SideMenu />
            <Details name="Mohd Wasim" dev="Front-End Developer" cv="Download CV"/>
            <div className="common_box">
                <div className="contact_div">
                    <h2>Contact Me</h2>
                    <div className="contact_info">
                        <div className="phn">
                            <h5>Phone</h5>
                            <p>+91-9716689303</p>
                        </div>
                        <div className="email">
                            <h5>Email</h5>
                            <p>wasimraja@live.com</p>
                        </div>
                    </div>
                    <div className="contact_form">
                        <Form>
                            
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
