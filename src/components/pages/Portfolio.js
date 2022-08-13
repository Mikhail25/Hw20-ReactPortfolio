import React from 'react';
// import './styles/reset.css';
import EmployeeTracker from '../images/EmployeeTracker.png';
import ReadmeGenerator from '../images/README-Generator.png';
import ProfileGenerator from '../images/TeamProfileGenerator.png';
import WorkDayScheduler from '../images/WorkDayScheduler.png';
import './pages.css';

function Portfolio(){
    return (
        <div className="main-section container-fluid pt-4 fill">
            <div className="container-fluid w-75 description ">
            <h3 className="h3 fw-bold">Portfolio</h3>

            <div className="row g-2">
                <div className="col-6 image-link">
                    <a href="https://github.com/Mikhail25/Hw12-EmployeeTracker" className="">
                        <img className="img-thumbnail" src={EmployeeTracker} alt="Employee Tracker" />
                        <h4 className="bg-info w-100 text-decoration-none">Employee Tracker</h4>
                    </a>

                </div>
                <div className="col-6 image-link">
                    <a href="https://github.com/Mikhail25/Hw9-Professional-README-Generator" className="">
                        <img className="img-thumbnail" src={ReadmeGenerator} alt="Employee Tracker" />
                        <h4 className="bg-info w-100 text-decoration-none">Readme Generator</h4>
                    </a>

                </div>
            </div>

            <div className="row g-2">
                <div className="col-6 image-link">
                    <a href="#tracker" className="">
                        <img className="img-thumbnail" src={ProfileGenerator} alt="Employee Tracker" />
                        <h4 className="bg-info w-100 text-decoration-none">Employee Tracker</h4>
                    </a>

                </div>
                <div className="col-6 image-link">
                    <a href="#tracker" className="">
                        <img className="img-thumbnail" src={EmployeeTracker} alt="Employee Tracker" />
                        <h4 className="bg-info w-100 text-decoration-none">Employee Tracker</h4>
                    </a>

                </div>
            </div>
            </div>

        </div>
    );
}

export default Portfolio;