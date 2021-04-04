import React from 'react';

function Product(props) {
    const { item } = props;
    return (
        <div className="shopee-search-item-result__item">
            <a href="#">
                <div className="product__content">
                    <div className="product__image">
                        <img className="image" alt="img" src={item.image}></img>
                    </div>
                    {item.discount > 0 ? (
                        <div className="shopee-item-card__badge-wrapper">
                            <div className="_3iRehQ _36vTKx _2xY8te shopee-badge">
                                <div className="_2TDZGE">
                                    <span className="percent">{item.discount}%</span>
                                    <span className="_17XqBU">giảm</span>
                                </div>
                            </div>
                        </div>
                    ) : ('')}

                    <div className="product__info">
                        <div className="product__title">
                            <div className="product__name">{item.title}</div>
                        </div>
                        <div className="price">
                            <span className="_3f1XxR">₫</span>
                            <span className="_29R_un">{item.price}</span>
                        </div>
                        <div className="shopee-rating">
                            <div className="rating">
                                <div className="shopee-rating-stars">
                                    <div className="shopee-rating-stars__stars">
                                        <div className="shopee-rating-stars__star-wrapper">
                                            <div className="shopee-rating-stars__lit" style={{ width: `${item.rating >= 1 ? '100%' : '0'}` }}>
                                                <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" className="shopee-svg-icon shopee-rating-stars__gold-star icon-rating-solid">
                                                    <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10">
                                                    </polygon>
                                                </svg>
                                            </div>
                                            <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" className="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"></polygon>
                                            </svg>
                                        </div>
                                        <div className="shopee-rating-stars__star-wrapper">
                                            <div className="shopee-rating-stars__lit" style={{ width: `${item.rating >= 2 ? '100%' : '0'}` }}>
                                                <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" className="shopee-svg-icon shopee-rating-stars__gold-star icon-rating-solid">
                                                    <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"></polygon>
                                                </svg>
                                            </div>
                                            <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" className="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"></polygon>
                                            </svg>
                                        </div>
                                        <div className="shopee-rating-stars__star-wrapper">
                                            <div className="shopee-rating-stars__lit" style={{ width: `${item.rating >= 3 ? '100%' : '0'}` }}>
                                                <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" className="shopee-svg-icon shopee-rating-stars__gold-star icon-rating-solid">
                                                    <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"></polygon>
                                                </svg>
                                            </div>
                                            <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" className="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"></polygon>
                                            </svg>
                                        </div>
                                        <div className="shopee-rating-stars__star-wrapper">
                                            <div className="shopee-rating-stars__lit" style={{ width: `${item.rating >= 4 ? '100%' : '0'}` }}>
                                                <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" className="shopee-svg-icon shopee-rating-stars__gold-star icon-rating-solid">
                                                    <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"></polygon>
                                                </svg>
                                            </div>
                                            <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" className="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"></polygon>
                                            </svg>
                                        </div>
                                        <div className="shopee-rating-stars__star-wrapper">
                                            <div className="shopee-rating-stars__lit" style={{ width: `${item.rating >= 5 ? '100%' : '0'}` }}>
                                                <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" className="shopee-svg-icon shopee-rating-stars__gold-star icon-rating-solid">
                                                    <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"></polygon>
                                                </svg></div><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" className="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"></polygon>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="go5yPW">Đã bán 8,3k</div>
                        </div>
                        <div className="_2CWevj">{item.location}</div>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default Product;