import React from 'react';
import HomeHeader from "./HomeHeader";
import './css/index.css';
import HomeMain from "./HomeMain";
import RecommendedPost from "./RecommendedPost";
import HomeFooter from "./HomeFooter";

const index = () => {

    return(
        <div>
            <HomeHeader />
            <HomeMain />
            <RecommendedPost />
            <HomeFooter />
        </div>
    )

}

export default index;