import { React, useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styleSheet/style.css';

function NavBar() {
    return (
        <div className="navBar">
            <div className="btnContainer2">
                <button className="btnHome1" onClick={() => {
                    sessionStorage.setItem("homeNav", "option1");
                    document.location.reload(true);
                }}>find job</button>
                <button className="btnHome1" onClick={() => {
                    sessionStorage.setItem("homeNav", "option2");
                    document.location.reload(true);
                }}>job list</button>
                <button className="btnHome1" onClick={() => {
                    sessionStorage.setItem("homeNav", "option3");
                    document.location.reload(true);
                }}>interview</button>
                <button className="btnHome1" onClick={() => {
                    sessionStorage.setItem("homeNav", "option4");
                    document.location.reload(true);
                }}>profile</button>
            </div>
        </div>
    );
}

export default NavBar;