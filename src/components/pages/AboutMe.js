import React from 'react';
import './pages.css';
import Profile from '../images/PictureProfile.jpg'

function AboutMe(){
    return (
        <div className="main-section container-fluid pt-4 fill">
            <div className="container-fluid w-75 description ">
            <h3 className="h3 fw-bold">About Me</h3>

            <img className="profile-pic rounded border border-primary" src={Profile} alt="Profile Pic"/>
            <p className="profile-text mt-4 mb-0">
                My Name is Mikhail Soookwah, I was born in Puerto Rico in July 2. 1989.
                I graduated for the Inter-american University of Puerto Rico with a Bachellors Degree win computer science. 
                I have an assortment of skill that ranges between web aplication development with react, styling with bootstrap and CSS, and much more. 
                My goal is to continue my pursuit of knowledge and row more in the tech industry.
            </p>      
            </div>

        </div>
    );
}

export default AboutMe;