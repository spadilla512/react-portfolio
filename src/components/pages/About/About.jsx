import React from 'react';
import profileImage from '../../../images/IMG_1320.jpg';
import './About.css';

export default function About() {
    return (
        <>
            <div className="image-container">
                <img
                    className="color-img"
                    src={profileImage} alt="About me" />
        
            </div>
            <div>
                <h1 id="about-me">About Me</h1>
                <p id="p-about">
                    Hello! My name is Sarah! I am currently a student completing the WashU coding bootcamp. I have had the opportunity to change my career from going to pharmacy school, while I earned a bachelor's degree in health sciences, to learning how to be a web developer. 
                    This field has always intrigued me since it is constantly changing and I would get to create something that people can use on a day to day basis. I am eager to learn what this 
                    field has to offer! 
                </p>
            </div>
        </>
    )
}