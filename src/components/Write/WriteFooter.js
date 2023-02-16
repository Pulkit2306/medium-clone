import React from 'react';
import Logo from './Logo.png';

const WriteFooter = () => {
    return(
        <footer>
            <div className="WFooter">
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

export default WriteFooter;