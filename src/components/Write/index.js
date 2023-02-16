import React from 'react';
import './css/style.css';
import WriteHeader from "./WriteHeader";
import WriteMain from "./WriteMain";
import WriteFooter from "./WriteFooter";

const index = () => {
    return(
        <div>
            <WriteHeader />
            <WriteMain />
            <WriteFooter />
        </div>
    )
}

export default index;