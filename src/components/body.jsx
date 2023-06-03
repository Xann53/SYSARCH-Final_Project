import { React } from 'react';
import Body1 from './HomeBody1';
import Body2 from './HomeBody2';
import Body3 from './HomeBody3';
import Body5 from './HomeBody5';

function ContentNav() {
    var homeNav = sessionStorage.getItem("homeNav");
    
    if (homeNav == 'option1') {
        return (
            <Body1 />
        );
    }
    if (homeNav == 'option2') {
        return (
            <Body2 />
        );
    }
    if (homeNav == 'option3') {
        return (
            <Body3 />
        );
    }
    if (homeNav == 'option5') {
        return (
            <Body5 />
        );
    }
}

export default ContentNav;