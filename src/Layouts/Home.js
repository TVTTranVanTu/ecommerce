import React from 'react';
import Category from '../Components/category/Category';
import FlashSale from '../Components/flashSale/FlashSale';
import RecommendProducts from '../Components/recommendProduct/RecommendProducts';
import ShopeeMall from '../Components/shopeeMail/ShopeeMall';
import BannersWrapper from '../Components/sliderBanner/BannersWrapper';

function Home(props) {
    return (
        <div className="home">
            <BannersWrapper />
            <div className="welcome-package-banner" style={{ marginTop: "1.25rem" }}>
                <div className="container">
                    <img style={{ width: "100%", backgroundRepeat: "no-repeat", backgroundSize: "contain", cursor: "pointer" }}
                        src="https://cf.shopee.vn/file/add351c6b49300ea7881422fc3929d5a_xxhdpi&quot" alt="home_image">
                    </img>
                </div>
            </div>
            <Category />
            <FlashSale />
            <ShopeeMall />
            {/* <RecommendProducts /> */}
        </div>
    );
}

export default Home;