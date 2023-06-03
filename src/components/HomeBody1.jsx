import { React } from 'react';
import '../styleSheet/style.css';

function Body1() {
    return (
        <div className="content">
            <div className="formBody1">
                <h1>JOB SEARCH</h1>
                <div>
                    <h4 className="details2">What Field do you wish to apply in?</h4>
                    <input type="text" className="formTxtBox" />
                    <h4 className="details2">What specific Job are you looking for?</h4>
                    <input type="text" className="formTxtBox" />
                    <h4 className="details2">What specific Skills do you have?</h4>
                    <input type="text" className="formTxtBox" />
                    <h4 className="details2">How many children do you have?</h4>
                    <input type="text" className="formTxtBox" />
                    <h4 className="details">What is the Age range of your child / children?</h4>
                    <p className="details3"><input type="checkbox" className="checkBox" /> 1 month to 5 years old &emsp; <input type="checkbox" className="checkBox" /> 6 to 12 years old  &emsp; <input type="checkbox" className="checkBox" /> 13 to 17 years old  &emsp; <input type="checkbox" className="checkBox" /> 18 to 21 years old</p>
                    <h4 className="details2">How many of your children still go to School?</h4>
                    <input type="text" className="formTxtBox" />
                    <h4 className="details2">What is the range of their Tuition Fees?</h4>
                    <input type="text" className="formTxtBox" />
                    <h4 className="details2">What Time does your child / children go to School?</h4>
                    <input type="text" className="formTxtBox" />
                    <h4 className="details2">What Time do their Class end?</h4>
                    <input type="text" className="formTxtBox" />
                    <h4 className="details">How do your child / children go Home?</h4>
                    <p className="details3"><input type="checkbox" className="checkBox" /> School Bus &emsp; <input type="checkbox" className="checkBox" /> Pick up (by You)  &emsp; <input type="checkbox" className="checkBox" /> Pick up (by Someone Else) &emsp; <input type="checkbox" className="checkBox" /> By Themselves</p>
                </div>
                <button className="btnForm1" onClick={() => {
                    sessionStorage.setItem("homeNav", "option2");
                    document.location.reload(true);
                }}>search</button>
            </div>
        </div>
    );
}

export default Body1;