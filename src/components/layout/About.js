import React from 'react';

const About = (props) => {
    return (
        <div className="common_box">
            <div className="about_div">
                <h2>{props.head}</h2>
                <div className="about_details">
                    <div className="intro">
                        <h3>👋 I’m {props.name}.</h3>
                        <p>
                            {props.dev} 💻 from  New Delhi. I have rich experience in web site design and building, also I am good at logo design and blog writing. I love to talk with you about our unique.
                        </p>
                    </div>
                    <div className="info">
                        <div className="age">
                            <h5>Age</h5>
                            <p>{props.age}</p>
                        </div>
                        <div className="residence">
                            <h5>Residence</h5>
                            <p>{props.residence} 🇮🇳</p>
                        </div>
                        <div className="freelance">
                            <h5>Freelance</h5>
                            <p>{props.freelance}</p>
                        </div>
                        <div className="address">
                            <h5>Address</h5>
                            <p>{props.add}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
