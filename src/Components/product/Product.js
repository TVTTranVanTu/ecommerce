import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '../rating/Rating';

function Product(props) {
    const { item } = props;
    const id = item.id;
    const name = item.postTitle.replace(/\s/g, '-');
    return (
        <div className="shopee-search-item-result__item">
            <Link to={`/${name}.${id}`}>
                <div className="product__content">
                    <div className="product__image">
                        <img className="image" alt="img" src={item.productThumbnail}></img>
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
                            <div className="product__name">{item.postTitle}</div>
                        </div>
                        <div className="price">
                            <span className="_3f1XxR">₫</span>
                            <span className="_29R_un">{item.productPrice}</span>
                        </div>
                        <div className="shopee-rating">
                            <Rating item={item} />
                            <div className="go5yPW">Đã bán
                            {
                                    item.soldQuantity < 1000 ? `${item.soldQuantity}` : `${item.soldQuantity / 1000}k`
                                }
                            </div>
                        </div>
                        <div className="_2CWevj">{item.address}</div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Product;