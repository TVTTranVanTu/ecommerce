import React from 'react';

function Rating(props) {
    const { item } = props;
    return (
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
    );
}

export default Rating;