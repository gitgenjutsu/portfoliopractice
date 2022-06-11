import React from 'react';
import SideMenu from './SideMenu'
import Details from './Details';

const Resume = () => {
    return (
        <div className="home">
            <SideMenu />
            <Details name="Mohd Wasim" dev="Front-End Developer" cv="Download CV"/>
            <div className="common_box">
                <div className="resume_div">
                        <h2>Resume</h2>
                        <div className="wrapper">
                             <div className="experience">
                            <h3>Experience</h3>
                            <div className="exp_div">
                                <div className="job_1">
                                    <div className="title">
                                        <h3>Web Designer</h3>
                                        <p>Feb 2021</p>
                                    </div>
                                    <div className="description">
                                        <h3>
                                            <span>Company:</span> Sharp Vision
                                        </h3>
                                        <h4>
                                            <span>Job role:</span> Collaborate with creative and development teams on the execution of ideas.
                                        </h4>
                                    </div>
                                </div>
                                <div className="job_2">
                                    <div className="title">
                                        <h3>Backend Executive</h3>
                                        <p>2018-19</p>
                                    </div>
                                    <div className="description">
                                        <h3>
                                            <span>Company:</span> Genius Consultants
                                        </h3>
                                        <h4>
                                            <span>Job role:</span> Match and update the data from the store image and fill in the form.
                                        </h4>
                                    </div>
                                </div>
                                <div className="job_3">
                                    <div className="title">
                                        <h3>Projects Experience</h3>
                                        <p>2020-21</p>
                                    </div>
                                    <div className="description">
                                        <h3>
                                            <span>Institute:</span> Admec
                                        </h3>
                                        <h4>
                                            <span>Learnt:</span> Completed lots of projects while learning the front-end development.
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="skills">
                            <h3>Skills</h3>
                            <div className="title">
                                 <h3>Design</h3>
                            </div>
                            <div className="design">
                                <div className="web">
                                    <h4>Web Design</h4>
                                </div>
                                <div className="xd">
                                    <h4>Adobe XD</h4>
                                </div>
                                <div className="photoshop">
                                    <h4>Photoshop</h4>
                                </div>
                                <div className="logo_design">
                                    <h4>Logo Design</h4>
                                </div>

                            </div>
                        </div>
                       </div>
                </div>
            </div>
        </div>
    );
}

export default Resume;
