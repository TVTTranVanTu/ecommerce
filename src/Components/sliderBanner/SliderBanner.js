import React from "react";
import Slider from "react-slick";
import banner1 from "../../assets/banner_1.png";
import banner2 from "../../assets/banner2.png";

function SliderBanner(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className="slider-banner">
      <div className="slider-show">
        <Slider {...settings} className="slider">
          <div>
            <img
              src="https://cf.shopee.vn/file/dddf4631638cc2b49b67fd762e07cf5f_xxhdpi"
              alt="image1"
            ></img>
          </div>
          <div>
            <img
              src="https://cf.shopee.vn/file/96c2ce94564152f3ec393d10c82fd96b_xxhdpi"
              alt="image1"
            ></img>
          </div>
          <div>
            <img
              src="https://cf.shopee.vn/file/eb0eaefe649f563308a9f03f9a435961_xxhdpi"
              alt="image1"
            ></img>
          </div>
          <div>
            <img
              src="https://cf.shopee.vn/file/3a33887273b4cf7ff851cca6f4aef3e1_xxhdpi"
              alt="image1"
            ></img>
          </div>
          <div>
            <img
              src="https://cf.shopee.vn/file/433006bef1cc3d67e40d964665e4c1da_xxhdpi"
              alt="image1"
            ></img>
          </div>
          <div>
            <img
              src="https://cf.shopee.vn/file/89d5a37694b6885fd2d658fc21d2bde6_xxhdpi"
              alt="image1"
            ></img>
          </div>
          <div>
            <img
              src="https://cf.shopee.vn/file/40c9a878bb43418193c199b8c6813d9d_xxhdpi"
              alt="image1"
            ></img>
          </div>
          <div>
            <img
              src="https://cf.shopee.vn/file/5f1045c2dd3cbce6289a84925608c731_xxhdpi"
              alt="image1"
            ></img>
          </div>
          <div>
            <img
              src="https://cf.shopee.vn/file/58d782e52ae6bd84960fcdf69d712127_xxhdpi"
              alt="image1"
            ></img>
          </div>
          <div>
            <img
              src="https://cf.shopee.vn/file/cee64f14f364325be6a3a1fcea4cd742_xxhdpi"
              alt="image1"
            ></img>
          </div>
          <div>
            <img
              src="https://cf.shopee.vn/file/4ed46f86bfcbe8d5a037955eb5d4da6c_xxhdpi"
              alt="image1"
            ></img>
          </div>
          <div>
            <img
              src="https://cf.shopee.vn/file/700bfede60a0d443b9092f178b292570_xxhdpi"
              alt="image1"
            ></img>
          </div>
          <div>
            <img
              src="https://cf.shopee.vn/file/489fe7d83286dfe7c0c303a317205bc5_xxhdpi"
              alt="image1"
            ></img>
          </div>
          <div>
            <img
              src="https://cf.shopee.vn/file/cad02c3d02d423688bf6d5eb803ff2e4_xxhdpi"
              alt="image1"
            ></img>
          </div>
        </Slider>
      </div>
      <div className="banners__right-banner">
        <a className="image-banner" href="#">
          <div className="image-banner-content">
            <img src={banner1} alt="img"></img>
          </div>
        </a>
        <a className="image-banner" href="#" style={{ marginTop: "0.3125rem" }}>
          <div className="image-banner-content">
            <img src={banner2} alt="img"></img>
          </div>
        </a>
      </div>
    </div>
  );
}

export default SliderBanner;
