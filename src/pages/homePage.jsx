import { React } from 'react';
import '../styleSheet/style.css';
import NavBar from '../components/navBar';
import ContentNav from '../components/body';

function Home() {
    return (
        <div className="page">
            <div className="siteTitleContainer">
                <h1 className="titleSet1">SINGLE PARENTS</h1>
                <h1 className="titleSet2">EMPLOYMENT</h1>
                <h1 className="titleSet3">4</h1>
            </div>
            <div className="bgImgHome" />
            <div className="bodyHome">
                <NavBar />
                <ContentNav />
            </div>
        </div>
    );
}

export default Home;