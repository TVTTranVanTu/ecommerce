import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { listFlashSale } from '../../Actions/FlashSaleAction';
import FlashSaleProduct from './FlashSaleProduct';

function FlashSale(props) {
    const dispatch = useDispatch();
    const flashSaleList = useSelector((state) => state.flashSaleList);
    const { loading, error, flashSales } = flashSaleList;
    const [translate, setTranslate] = useState(0);
    const prev = () => {
        setTranslate(translate + 1000);
    }
    const next = () => {
        setTranslate(translate - 1000);
    }
    useEffect(() => {
        dispatch(listFlashSale());
    }, [dispatch])
    return (
        <div className="flash__sale">
            <div className="container">
                <div className="flash-sale-title">
                    <div className="flash-sale-contain">
                        <div className="flash-sale-icon"></div>
                        <div className="flash-sale-time"></div>
                    </div>
                    <Link to="/flash-sale">
                        <button className="shopee-button-no-outline">
                            Xem tất cả&nbsp;
                            <svg enableBackground="new 0 0 11 11" viewBox="0 0 11 11" x="0" y="0" className="shopee-svg-icon icon-arrow-right">
                                <path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z">
                                </path>
                            </svg>
                        </button>
                    </Link>
                </div>
                <div className="flash-sale-content">
                    <div className="carousel-content">
                        <ul className="carousel__item-list" style={{ width: `${(flashSales.length) * 16.666666667}%`, transform: `translate(${translate}px,0px)` }}>
                            {
                                flashSales.map((item) => (
                                    <li key={item._id} className="image-carousel__item" >
                                        <FlashSaleProduct item={item} />
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="carousel-arrow carousel-arrow--prev carousel-arrow--hint" onClick={prev} role="button" tabIndex="0" style={{ opacity: 1, visibility: `${translate === 0 ? "hidden" : "visible"}`, transform: "translateX(calc(-50% + 0px))" }}>
                        <svg enableBackground="new 0 0 13 20" viewBox="0 0 13 20" x="0" y="0" className="shopee-svg-icon icon-arrow-left-bold">
                            <polygon points="4.2 10 12.1 2.1 10 -.1 1 8.9 -.1 10 1 11 10 20 12.1 17.9">
                            </polygon>
                        </svg>
                    </div>
                    <div className="carousel-arrow carousel-arrow--next carousel-arrow--hint" onClick={next} role="button" tabIndex="0" style={{ opacity: 1, visibility: `${translate <= ((flashSales.length) * -200) + 1200 ? "hidden" : "visible"}`, transform: "translateX(calc(50% - 0px))" }}>
                        <svg enableBackground="new 0 0 13 21" viewBox="0 0 13 21" x="0" y="0" className="shopee-svg-icon icon-arrow-right-bold">
                            <polygon points="11.1 9.9 2.1 .9 -.1 3.1 7.9 11 -.1 18.9 2.1 21 11.1 12 12.1 11"></polygon></svg>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FlashSale;