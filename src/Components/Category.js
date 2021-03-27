import React, { useState } from 'react';
import Data from '../Data.js';
import CategoryItem from './Category-item.js';
function Category(props) {
    let product = Data.products;
    const [translate, setTranslate] = useState(0);
    const prev = () => {
        setTranslate(translate + 360);
    }
    const next = () => {
        setTranslate(translate - 360);
    }

    return (
        <div className="category">
            <div className="container">
                <div className="category__title">
                    <h1>Danh mục</h1>
                </div>
                <div className="category__content">
                    <div className="carousel-content">
                        <ul className="carousel__item-list" style={{ width: `${Math.ceil(product.length / 2) * 10}%`, transform: `translate(${translate}px,0px)` }}>
                            {
                                product.slice(0, Math.ceil(product.length / 2)).map((item) => (
                                    <li key={item._id} className="image-carousel__item">
                                        <CategoryItem item={item} />
                                    </li>
                                ))
                            }
                        </ul>
                        <ul className="carousel__item-list" style={{ width: `${product.length % 2 === 0 ? Math.ceil((product.length / 2)) * 10 : Math.ceil((product.length / 2) - 1) * 10}%`, transform: `translate(${translate}px,0px)` }}>
                            {
                                product.slice(Math.ceil(product.length / 2), product.length).map((item) => (
                                    <li key={item._id} className="image-carousel__item">
                                        <CategoryItem item={item} />
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
                    <div className="carousel-arrow carousel-arrow--next carousel-arrow--hint" onClick={next} role="button" tabIndex="0" style={{ opacity: 1, visibility: `${translate === (Math.ceil(product.length / 2) - 10) * -120 ? "hidden" : "visible"}`, transform: "translateX(calc(50% - 0px))" }}>
                        <svg enableBackground="new 0 0 13 21" viewBox="0 0 13 21" x="0" y="0" className="shopee-svg-icon icon-arrow-right-bold">
                            <polygon points="11.1 9.9 2.1 .9 -.1 3.1 7.9 11 -.1 18.9 2.1 21 11.1 12 12.1 11"></polygon></svg>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Category;