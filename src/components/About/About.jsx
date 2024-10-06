import React from 'react';
import './About.css'

const About = ({image, title, body}) => {
    return (
        <div className='about'>
            <img src={image} alt="1"/>
              <h5>{title}</h5>
              <p>{body}</p>

        </div>
    );
};

export default About;