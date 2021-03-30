import React from 'react';

function FlashSaleProduct(props) {
    const { item } = props;
    return (
        <div className="shopee-product-flash__sale">
            <div className="flash-sale-item-card">
                <a className="flash-sale-item-card-link" href="#">
                    <div className="flash-sale-item-card__image">
                        <div className="_25_r8I">
                            <div className="flash-sale-item-card__image-overlay" style={{ backgroundImage: `url(${item.image_overlay})`, backgroundSize: "contain", backgroundRepeat: "no-repeat" }}>
                            </div>
                        </div>
                        <div className="_25_r8I">
                            <div className="flash-sale-item-card__animated-image _2GchKS" style={{ backgroundImage: `url(${item.image_product})`, backgroundSize: "contain", backgroundRepeat: "no-repeat" }}>
                            </div>
                        </div>
                    </div>
                    <div className="flash-sale-item-card__lower-wrapper">
                        <div className="flash-sale-item-card__lower-left">
                            <div className="flash-sale-item-card__current-price">
                                <span className="item-price-dollar-sign">₫ </span>
                                <span className="item-price-number">{item.price}</span>
                            </div>
                            <div className="flash-sale-progress-bar__wrapper">
                                <div className="flash-sale-progress-bar" style={{ backgroundImage: `url(https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/ac7f81d9ee062223753413ec98497a86.png)` }}>
                                    <div className="flash-sale-progress-bar__text">Đã bán {item.number_sell}</div>
                                    <div className="flash-sale-progress-bar__complement-wrapper">
                                        <div className="flash-sale-progress-bar__complement-sizer" style={{ width: `${(item.number_sell / item.number) * 100}%` }}>
                                            <div className="flash-sale-progress-bar__complement-color">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="shopee-item-card__badge-wrapper">
                            <div className="_3iRehQ _36vTKx _2xY8te shopee-badge">
                                <div className="_2TDZGE">
                                    <span className="percent">24%</span>
                                    <span className="_17XqBU">giảm</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default FlashSaleProduct;