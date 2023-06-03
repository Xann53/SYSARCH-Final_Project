import { React } from 'react';
import '../styleSheet/style.css';
import Job1 from '../images/nurse.jpg';
import Job2 from '../images/safety officer.jpg';

function Img() {
    const jImg = sessionStorage.getItem("jobImg");

    if (jImg == "Job1") {
        return (
            <img src={Job1} alt="Job Image 1" className="imgJob1" />
        );
    }
    if (jImg == "Job2") {
        return (
            <img src={Job2} alt="Job Image 2" className="imgJob1" />
        );
    }
}

function BtnSet1() {
    const jBtn1 = sessionStorage.getItem("set1");
    
    if (jBtn1 == "true") {
        return (
            <div className="btnCtnrBody5">
                <button className="btnLanding" onClick={() => {
                    sessionStorage.setItem("apply", "true");
                    sessionStorage.setItem("set2", "true");
                    sessionStorage.setItem("set1", "false");
                    document.location.reload(true);
                }}>apply</button>
                <button className="btnLanding" onClick={() => {
                    sessionStorage.setItem("homeNav", "option2");
                    sessionStorage.setItem("apply", "false");
                    document.location.reload(true);
                }}>cancel</button>
            </div>
        );
    }
}

function BtnSet2() {
    const jBtn2 = sessionStorage.getItem("set2");
    
    if (jBtn2 == "true") {
        return (
            <div className="btnCtnrBody5">
                <button className="btnLanding" onClick={() => {
                    sessionStorage.setItem("apply", "false");
                    sessionStorage.setItem("set1", "false");
                    sessionStorage.setItem("set2", "false");
                    sessionStorage.setItem("homeNav", "option3");
                    document.location.reload(true);
                }}>apply</button>
                <button className="btnLanding" onClick={() => {
                    sessionStorage.setItem("apply", "false");
                    sessionStorage.setItem("set1", "true");
                    sessionStorage.setItem("set2", "false");
                    document.location.reload(true);
                }}>cancel</button>
            </div>
        );
    }
}

function ApplyJob() {
    const jApply = sessionStorage.getItem("apply");

    if (jApply == "true") {
        return (
            <div className="resumeDrop">
                <h1 className="resumeText">DROP YOUR RESUME HERE</h1>
                <input type="file" className="resumeTake" />
            </div>
        );
    }
}

function Body5() {
    const jTitle = sessionStorage.getItem("jobTitle");
    const jDesc = sessionStorage.getItem("jobDesc");
    const jSkills = sessionStorage.getItem("jobSkills");

    return (
        <div className="content">
            <div className="formBody2">
                <div className="formJobInfo">
                    <h1 className="jobTitle">{jTitle}</h1>
                    { Img() }
                    <h3 className="details">LOCATION / COMPANY</h3>
                    <p>115 Kamuning Road, Quezon City, Metro Manila</p>
                    <h3 className="details">SHIFT SCHEDULE</h3>
                    <p>9:00am - 4:00pm (Monday - Friday)</p>
                    <h3 className="details">SALARY RANGE</h3>
                    <p>Php 25,000 - Php 30,000</p>
                    <h3 className="details">JOB DESCRIPTION</h3>
                    <p>&emsp;&emsp;&emsp; { jDesc }</p>
                    <h3 className="details">SKILL REQUIRED</h3>
                    <p>{ jSkills }</p>
                </div>
                { BtnSet1() }
                { ApplyJob() }
                { BtnSet2() }
            </div>
        </div>
    );
}

export default Body5;