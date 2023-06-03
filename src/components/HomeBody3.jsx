import { React } from 'react';
import '../styleSheet/style.css';

function Body3() {
    const jTitle = sessionStorage.getItem("jobTitle");
    return (
        <div className="content2">
            <button className="btnBody1">
                <div className="btnInterview">
                    <h4 className="details3"> &emsp;&emsp;&emsp; Incoming Interview &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Interview Date and Time &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Interview Venue</h4>
                    <h3 className="details"> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp; February 25, 3023 (2:00pm) &emsp;&emsp;&emsp;&emsp;&emsp;&nbsp; 115 Kamuning Road, Quezon City, Metro Manila</h3>
                    <h1 className="details4"> &emsp;&nbsp; {jTitle}</h1>
                </div>
            </button>
        </div>
    );
}

export default Body3;