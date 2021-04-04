import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from "react-slick";
import { listShopeeMallProducts } from '../Actions/ShopeeMallAction';
import ShopeeMallProduct from './ShopeeMallProduct';

function ShopeeMall(props) {
    const dispatch = useDispatch();
    const shopeeMallList = useSelector((state) => state.shopeeMallList);
    const { loading, error, shopeeMalls } = shopeeMallList;
    const [translate, setTranslate] = useState(0);
    const prev = () => {
        setTranslate(translate + 800);
    }
    const next = () => {
        setTranslate(translate - 800);
    }
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };
    useEffect(() => {
        dispatch(listShopeeMallProducts());
    }, [dispatch])
    return (
        <div className="shopee-mail">
            <div className="container">
                <div className="shopee-mail__header">
                    <div className="shopee-mail__header-title">
                        <div className="link">
                            <a href="#" className="main-link">Shopee Mall</a>
                            <div className="list-link">
                                <div className="item-link">
                                    <div className="_2SCKPT mall_selling_points-vn-background mall_selling_points-vn-7_day_return-png"></div>
                                    7 ngày miễn phí trả hàng
                                </div>
                                <div className="item-link">
                                    <div className="_2SCKPT mall_selling_points-vn-background mall_selling_points-vn-authentic-png"></div>
                                    Hàng chính hãng 100%
                                </div>
                                <div className="item-link">
                                    <div className="_2SCKPT mall_selling_points-vn-background mall_selling_points-vn-free_shipping-png"></div>
                                    Miễn phí vận chuyển
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shopee-mail__header-link">
                        <button className="shopee-button-no-outline">
                            <a className="_19fjwV" href="#">
                                <div className="_3WSAH5">
                                    Xem tất cả
                                <div className="_2TyZyx">
                                        <svg enableBackground="new 0 0 11 11" viewBox="0 0 11 11" x="0" y="0" className="shopee-svg-icon icon-arrow-right">
                                            <path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                            </a>
                        </button>
                    </div>
                </div>
                <div className="shopee-mail__content">
                    <div className="shopee-mail__carousel">
                        <Slider {...settings} className="slider">
                            <div>
                                <a href="#">
                                    <img src="https://cf.shopee.vn/file/85e186f6b4a4deed4fa9971b8ee47845" alt="image1"></img>
                                </a>
                            </div>
                            <div>
                                <a href="#">
                                    <img src="https://cf.shopee.vn/file/3d6ab64db46988502de7bcff105591da" alt="image1"></img>

                                </a>
                            </div>
                            <div>
                                <a href="#">
                                    <img src="https://cf.shopee.vn/file/7a55bf7260d3345d319f885bbe2547a0" alt="image1"></img>

                                </a>
                            </div>

                        </Slider>
                    </div>
                    <div className="shopee-mail__products">
                        <div className="carousel-content">

                            <ul className="carousel__item-list" style={{ width: `${(Math.ceil(shopeeMalls.length / 2)) * 25}%`, transform: `translate(${translate}px,0px)` }}>
                                {
                                    shopeeMalls.slice(0, Math.ceil(shopeeMalls.length / 2)).map((item) => (
                                        <li key={item._id} className="image-carousel__item" >
                                            <ShopeeMallProduct item={item} />
                                        </li>
                                    ))
                                }
                            </ul>
                            <ul className="carousel__item-list" style={{ width: `${shopeeMalls.length % 2 === 0 ? Math.ceil((shopeeMalls.length / 2) - 1) * 25 : Math.ceil((shopeeMalls.length / 2)) * 25}%`, transform: `translate(${translate}px,0px)` }}>
                                {
                                    shopeeMalls.slice(Math.ceil(shopeeMalls.length / 2), shopeeMalls.length).map((item) => (
                                        <li key={item._id} className="image-carousel__item">
                                            <ShopeeMallProduct item={item} />
                                        </li>
                                    ))
                                }
                                <li className="image-carousel__item">
                                    <div className="ofs-seemore__content">
                                        Xem tất cả
                                    <div className="ofs-seemore__arrow">
                                            <svg enableBackground="new 0 0 11 11" viewBox="0 0 11 11" x="0" y="0" className="shopee-svg-icon icon-arrow-right">
                                                <path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z">
                                                </path>
                                            </svg>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="carousel-arrow carousel-arrow--prev carousel-arrow--hint" onClick={prev} role="button" tabIndex="0" style={{ opacity: 1, visibility: `${translate === 0 ? "hidden" : "visible"}`, transform: "translateX(calc(-50% + 0px))" }}>
                            <svg enableBackground="new 0 0 13 20" viewBox="0 0 13 20" x="0" y="0" className="shopee-svg-icon icon-arrow-left-bold">
                                <polygon points="4.2 10 12.1 2.1 10 -.1 1 8.9 -.1 10 1 11 10 20 12.1 17.9">
                                </polygon>
                            </svg>
                        </div>
                        <div className="carousel-arrow carousel-arrow--next carousel-arrow--hint" onClick={next} role="button" tabIndex="0" style={{ opacity: 1, visibility: `${translate <= (Math.ceil(shopeeMalls.length / 2) - 4) * -200 ? "hidden" : "visible"}`, transform: "translateX(calc(50% - 0px))" }}>
                            <svg enableBackground="new 0 0 13 21" viewBox="0 0 13 21" x="0" y="0" className="shopee-svg-icon icon-arrow-right-bold">
                                <polygon points="11.1 9.9 2.1 .9 -.1 3.1 7.9 11 -.1 18.9 2.1 21 11.1 12 12.1 11"></polygon></svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShopeeMall;