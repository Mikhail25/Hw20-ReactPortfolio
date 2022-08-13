import React from 'react';
// import './styles/reset.css';


function Contact(){
    return (
        <div className="main-section container-fluid pt-4 fill">
            <div className="container-fluid w-75 description ">
                <h3 className="h3 fw-bold">Contact</h3>
                <div class="mb-3 mt-5">
                    <label for="nameform" class="form-label">Name:</label>
                    <input type="email" class="form-control" id="emailForm" placeholder="name@example.com"/>
                </div>
                <div class="mb-3">
                    <label for="emailform" class="form-label">Email address:</label>
                    <input type="email" class="form-control" id="emailForm" placeholder="name@example.com"/>
                </div>
                    <div class="mb-3">
                        <label for="messageForm" class="form-label">Message: </label>
                        <textarea class="form-control" id="messageform" rows="3"></textarea>
                    </div>
                    <div className="mb-3">
                        <button class="btn btn-primary" disabled>Submit</button>
                    </div>

                </div>

        </div>
    );
}

export default Contact;