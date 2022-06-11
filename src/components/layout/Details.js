import React from 'react';
import { Link } from 'react-router-dom';
import wasim  from '../../images/wasim.png';

const Details = (props) => {
    return (
        <div className="details_div">
                <div className="img">
                    <img src={wasim} alt="profile"/>
                </div>
                <div className="details">
                    <h3>{props.name}</h3>
                    <h6>{props.dev}</h6>
                </div>
                <div className="cv">
                    <Link>{props.cv}</Link>
                </div>
        </div>
    );
}

export default Details;
