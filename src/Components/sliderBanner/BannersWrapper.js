import React from 'react';
import SliderBanner from './SliderBanner';
import Data from '../../Data';
import { Link } from 'react-router-dom';
function BannersWrapper(props) {
    let banners = Data.banner;
    return (
        <div className="banners-wrapper">
            <div className="container">
                <SliderBanner />
                <div className="list-banners">
                    {
                        banners.map((item, index) => (
                            <Link key={index} to={item.title.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '').replace(/\s/gi, '-')}>
                                <div className="banner-item">
                                    <div className="banner-item-image">
                                        <img src={item.image} alt={item.title}></img>
                                    </div>
                                    <div className="banner-title">{item.title}</div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default BannersWrapper;