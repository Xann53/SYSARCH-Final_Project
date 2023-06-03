import { React } from 'react';
import { NavLink } from 'react-router-dom';
import '../styleSheet/style.css';

function SignUp() {
    return (
        <div className="page">
            <div className="formReg">
                <div className="formReg2">
                    <input type="text" className="formTxtBox2" placeholder="First Name" />
                    <input type="text" className="formTxtBox2" placeholder="Last Name" />
                    <input type="text" className="formTxtBox2" placeholder="Username" />
                    <input type="text" className="formTxtBox2" placeholder="Email Address" />
                    <p className="details2"><input type="checkbox" className="checkBox" /> Male &emsp;&emsp;&emsp; <input type="checkbox" className="checkBox" /> Female</p>
                    <input type="text" className="formTxtBox2" placeholder="Password" />
                    <input type="text" className="formTxtBox2" placeholder="Confirm Password" />
                </div>
                <div className="btnCtnrReg">
                    <NavLink to="/home" onClick={() => {
                        sessionStorage.setItem("homeNav", "option1");
                    }}><button className="btnLanding">confirm</button></NavLink>
                    <NavLink to="/"><button className="btnLanding">cancel</button></NavLink>
                </div>
            </div>
        </div>
    );
}

export default SignUp;