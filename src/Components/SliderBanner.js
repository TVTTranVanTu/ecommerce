import React from 'react';
import Slider from "react-slick";
function SliderBanner(props) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };
    return (
        <div className="slider-banner">
            <div className="slider-show">
                <Slider {...settings} className="slider">
                    <div>
                        <img src="https://cf.shopee.vn/file/9ae3f0fb659615b5ad951fd0b5b0df04_xxhdpi" alt="image1"></img>
                    </div>
                    <div>
                        <img src="https://cf.shopee.vn/file/2b14b9c3da24c908e6e5b05fae028aa3_xxhdpi" alt="image1"></img>
                    </div>
                    <div>
                        <img src="https://cf.shopee.vn/file/0a24ff865d9374cb004017e61949fa31_xxhdpi" alt="image1"></img>
                    </div>
                    <div>
                        <img src="https://cf.shopee.vn/file/0f10bfc1c2f6572ea920f6fee67c77d0_xxhdpi" alt="image1"></img>
                    </div>
                    <div>
                        <img src="https://cf.shopee.vn/file/dc85afa69822e2e79523295164527448_xxhdpi" alt="image1"></img>
                    </div>
                    <div>
                        <img src="https://cf.shopee.vn/file/c71c304f4167df6a8de4d112b3a3bd0f_xxhdpi" alt="image1"></img>
                    </div>
                    <div>
                        <img src="https://cf.shopee.vn/file/bb9f1f6f7f70f78dce75f25268e5943a_xxhdpi" alt="image1"></img>
                    </div>
                    <div>
                        <img src="https://cf.shopee.vn/file/9d79fb15a8449d308c4b29a1f5534c62_xxhdpi" alt="image1"></img>
                    </div>
                    <div>
                        <img src="https://cf.shopee.vn/file/0b40f795cc2501da53939ddd558d0f8d_xxhdpi" alt="image1"></img>
                    </div>
                    <div>
                        <img src="https://cf.shopee.vn/file/7181e13dc7825abf2b5b7e7bda542beb_xxhdpi" alt="image1"></img>
                    </div>
                    <div>
                        <img src="https://cf.shopee.vn/file/2f0cc25a84da21be51c7d39101d825dd_xxhdpi" alt="image1"></img>
                    </div>
                    <div>
                        <img src="https://cf.shopee.vn/file/96b37c11076ac4d6091fbe4bc3a439c8_xxhdpi" alt="image1"></img>
                    </div>
                    <div>
                        <img src="https://cf.shopee.vn/file/e2b9b269cb2a0c1ac2a4d46f7faf80c8_xxhdpi" alt="image1"></img>
                    </div>
                    <div>
                        <img src="https://cf.shopee.vn/file/9ae3f0fb659615b5ad951fd0b5b0df04_xxhdpi" alt="image1"></img>
                    </div>
                </Slider>
            </div>
            <div className="banners__right-banner">
                <a className="image-banner" href="#">
                    <div className="image-banner-content">
                        <img src="https://cf.shopee.vn/file/82f908174b62bd35017d65e83983c287_xhdpi&quot"></img>
                    </div>
                </a>
                <a className="image-banner" href="#" style={{ marginTop: "0.3125rem" }}>
                    <div className="image-banner-content">
                        <img src="https://cf.shopee.vn/file/f30314a7a3b21f65ab1b089a8b11fbab_xhdpi"></img>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default SliderBanner;