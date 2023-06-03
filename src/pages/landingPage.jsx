import { React } from 'react';
import { NavLink } from 'react-router-dom';
import '../styleSheet/style.css';

function Landing() {
    return (
        <div className="page">
            <div className="headerLanding">
                <div className="btnContainer1">
                    <NavLink to="/register"><button className="btnLanding">sign up</button></NavLink>
                    <NavLink to="/login"><button className="btnLanding">login</button></NavLink>
                </div>
            </div>
            <div className="siteTitleContainer">
                <h1 className="titleSet1">SINGLE PARENTS</h1>
                <h1 className="titleSet2">EMPLOYMENT</h1>
                <h1 className="titleSet3">4</h1>
            </div>
            <div className="bgCvrLanding" />
            <div className="bgImgLanding" />
        </div>
    );
}

export default Landing;