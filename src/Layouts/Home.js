import React from "react";
import Category from "../Components/category/Category";
import FlashSale from "../Components/flashSale/FlashSale";
import RecommendProducts from "../Components/recommendProduct/RecommendProducts";
import ShopeeMall from "../Components/shopeeMail/ShopeeMall";
import BannersWrapper from "../Components/sliderBanner/BannersWrapper";
import banner_row from "../assets/banner_row.png";

function Home(props) {
  return (
    <div className="home">
      <BannersWrapper />
      <div className="welcome-package-banner" style={{ marginTop: "1.25rem" }}>
        <div className="container">
          <img
            style={{
              width: "100%",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              cursor: "pointer",
            }}
            src={banner_row}
            alt="home_image"
          ></img>
        </div>
      </div>
      <Category />
      <FlashSale />
      <ShopeeMall />
      <RecommendProducts />
    </div>
  );
}

export default Home;
