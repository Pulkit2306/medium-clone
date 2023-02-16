import React from 'react';
import Logo from "./Logo.png";

const HomeFooter = () => {
    return(
        <footer>
            <div className="Footer">
                <div className="Footer-left">
                    <img src={Logo} alt="It Could Not Be Loaded"/>
                </div>
                <div className="Footer-right">
                    <span> Every Idea Needs A Medium! </span>
                </div>
            </div>
        </footer>
    )
}

export default HomeFooter;