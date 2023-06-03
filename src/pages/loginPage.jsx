import { React } from 'react';
import { NavLink } from 'react-router-dom';
import '../styleSheet/style.css';

function LogIn() {
    return (
        <div className="page">
            <div className="formReg">
                <div className="formReg3">
                    <input type="text" className="formTxtBox2" placeholder="Username / Email Address" />
                    <input type="text" className="formTxtBox2" placeholder="Password" />
                    <p className="details2"><input type="checkbox" className="checkBox" /> Remember my Password</p>
                    
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

export default LogIn;