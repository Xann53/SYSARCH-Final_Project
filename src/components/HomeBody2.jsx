import { React } from 'react';
import '../styleSheet/style.css';
import Job1 from '../images/nurse.jpg';
import Job2 from '../images/safety officer.jpg';

function Body2() {
    const title1 = "Company Nurse";
    const desc1 = "A company nurse, also known as occupational health and safety officer, or occupational health nurse, is a qualified nurse who is employed by a company. They provide general first aid to employees when required, assess employee health risks, and promote employee health. A company nurse serves as the primary medical resource for the company, coordinating care between various healthcare facilities and individuals. Perform health assessments and develop individualized treatment plans. Provide vaccinations and medications. Refer individuals to specialists as appropriate.";
    const skill1 = "[Bachelor’s degree] [1+ years’ experience as a licensed Registered Nurse] [Knowledge of OSHA regulations] [Knowledge of emergency procedures, first aid, CPR and emergency equipment] [Knowledge of Microsoft Office (Word, Excel, Outlook)] [Ability to work independently]";
    const title2 = "Safety Officer";
    const desc2 = "Safety Officers are responsible for planning, implementing and overseeing company's employee safety at work. Their main duty is to ensure that the company is in complience and adheres to Occupational Health and Safety (OHS) guidelines. Tacks include: evaluating and improving safety measures; advising on all matters related to workplace health and safety; investigating accidents, writing incident reports, and making recommendations; conducting inspections to ensure equipment and site safety; eliminating work hazards.";

    return (
        <div className="content2">
            <button className="btnBody1" onClick={() => {
                sessionStorage.setItem("jobTitle", title1);
                sessionStorage.setItem("jobDesc", desc1);
                sessionStorage.setItem("jobSkills", skill1);
                sessionStorage.setItem("jobImg", "Job1");
                sessionStorage.setItem("apply", "false");
                sessionStorage.setItem("set1", "true");
                sessionStorage.setItem("set2", "false");
                sessionStorage.setItem("homeNav", "option5");
                document.location.reload(true);
            }}>
                <img src={Job1} alt="Job Image 1" className="imgJob1" />
                <div className="jobInfo">
                    <h1 className="jobTitle">{ title1 }</h1>
                    <h3 className="details">LOCATION / COMPANY &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; SHIFT SCHEDULE &emsp;&emsp;&emsp;&ensp;&emsp;&emsp; SALARY RANGE</h3>
                    <p>115 Kamuning Road, Quezon City, Metro Manila &emsp;&emsp;&emsp;&emsp;&ensp; 9:00am - 4:00pm (Monday - Friday) &emsp; Php 25,000 - Php 30,000</p>
                    <h3 className="details">JOB DESCRIPTION</h3>
                    <p>&emsp;&emsp;&emsp; { desc1 }</p>
                    <h3 className="details">SKILL REQUIRED</h3>
                    <p>{ skill1 }</p>
                </div>
            </button>
            <button className="btnBody1" onClick={() => {
                sessionStorage.setItem("jobTitle", title2);
                sessionStorage.setItem("jobDesc", desc2);
                sessionStorage.setItem("jobSkills", skill1);
                sessionStorage.setItem("jobImg", "Job2");
                sessionStorage.setItem("apply", "false");
                sessionStorage.setItem("set1", "true");
                sessionStorage.setItem("set2", "false");
                sessionStorage.setItem("homeNav", "option5");
                document.location.reload(true);
            }}>
                <img src={Job2} alt="Job Image 2" className="imgJob1" />
                <div className="jobInfo">
                    <h1 className="jobTitle">{ title2 }</h1>
                    <h3 className="details">LOCATION / COMPANY &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; SHIFT SCHEDULE &emsp;&emsp;&emsp;&ensp;&emsp;&emsp; SALARY RANGE</h3>
                    <p>115 Kamuning Road, Quezon City, Metro Manila &emsp;&emsp;&emsp;&emsp;&ensp; 9:00am - 4:00pm (Monday - Friday) &emsp; Php 25,000 - Php 30,000</p>
                    <h3 className="details">JOB DESCRIPTION</h3>
                    <p>&emsp;&emsp;&emsp; { desc2 }</p>
                    <h3 className="details">SKILL REQUIRED</h3>
                    <p>{ skill1 }</p>
                </div>
            </button>
        </div>
    );
}

export default Body2;