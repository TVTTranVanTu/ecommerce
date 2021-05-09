import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import {
    addToCart,
    removeFromCart
} from '../Actions/CartAction';
import MessageBox from '../Components/boxInfor/MessageBox';


function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function CartScreen(props) {
    const dispatch = useDispatch();
    const productId = props.match.params.id;
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
    let query = useQuery();
    const qty = query.get("qty");
    const size = query.get("size");
    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty, size));
        }
    }, [dispatch, productId, qty]);
    const removeFromCartHandle = (id) => {
        dispatch(removeFromCart(id));
    };
    const checkoutHandler = () => {
        props.history.push('/signin?redirect=shipping');
    }
    return (
        <div className="cart-page">
            <div className="container">
                <div className="cart-page__content">
                    <div className="cart-page__header">
                        <div className="cart-page-product-header__product">Sản phẩm</div>
                        <div className="cart-page-product-header__unit-price">Đơn giá</div>
                        <div className="cart-page-product-header__quantity">Số lượng</div>
                        <div className="cart-page-product-header__total-price">Số tiền</div>
                        <div className="cart-page-product-header__action">Thao tác</div>
                    </div>
                    <div className="cart-page__section">
                        <div className="cart-page-shop-section__items">
                            <div className="_3JyeIc">
                                <div className="_3-WktU">
                                    Danh sách sản phẩm
                                </div>
                                {cartItems.length === 0 ?
                                    (<MessageBox>
                                        Chưa có sản phẩm nào .&nbsp;<Link to="/pet-food">Mua hàng</Link>
                                    </MessageBox>) : (
                                        <div className="cart-item Ssi6z2">
                                            {
                                                cartItems.map((item) => (

                                                    <div className="cart-item__content" key={item.product}>
                                                        <div className="cart-item__cell-overview">
                                                            <div className="cart-item__cell-overview--line">
                                                                <a className="cart-item-overview__thumbnail-wrapper" title={`[${item.postTitle}] ${item.productName}`} href="/-Mã-FASHIONXANH264-giảm-10K-đơn-50K-Áo-thun-bò-sữa-tay-lỡ-form-rộng-Unisex-ATLBO-i.14746382.3260645015">
                                                                    <div className="cart-item-overview__thumbnail" style={{ backgroundImage: `url(${item.productThumbnail})` }}></div>
                                                                </a>
                                                                <div className="cart-item-overview__product-name-wrapper">
                                                                    <a className="cart-item-overview__name" title={`[${item.postTitle}] ${item.productName}`} href="/-Mã-FASHIONXANH264-giảm-10K-đơn-50K-Áo-thun-bò-sữa-tay-lỡ-form-rộng-Unisex-ATLBO-i.14746382.3260645015">{`[${item.postTitle}]${item.productName}`}</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="cart-item__cell-variation">
                                                            <div className="wVIh3V _3VMiFu">
                                                                <div className="fR1TuC" role="button" tabIndex="0">
                                                                    <div className="_3zs0wV">Phân loại hàng:</div>
                                                                    <div className="LidAAI">SIZE: {item.size}</div>
                                                                </div>
                                                                <div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="cart-item__cell-unit-price"><div>
                                                            <span className="cart-item__unit-price cart-item__unit-price--after">₫{item.productPrice.toLocaleString('vi-VN')}</span>
                                                        </div>
                                                        </div>
                                                        <div className="cart-item__cell-quantity">
                                                            <div className="_16mL_A shopee-input-quantity">
                                                                <button className="_2KdYzP" onClick={() => { (dispatch(addToCart(item.product, Number(item.qty - 1)))) }}>
                                                                    <svg enableBackground="new 0 0 10 10" viewBox="0 0 10 10" x="0" y="0" className="shopee-svg-icon ">
                                                                        <polygon points="4.5 4.5 3.5 4.5 0 4.5 0 5.5 3.5 5.5 4.5 5.5 10 5.5 10 4.5"></polygon>
                                                                    </svg>
                                                                </button>
                                                                <input className="_2KdYzP iRO3yj" type="text" value={item.qty} onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))} />
                                                                <button className="_2KdYzP" onClick={() => (dispatch(addToCart(item.product, Number(item.qty + 1))))}>
                                                                    <svg enableBackground="new 0 0 10 10" viewBox="0 0 10 10" x="0" y="0" className="shopee-svg-icon icon-plus-sign">
                                                                        <polygon points="10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 5.5 10 5.5"></polygon>
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="cart-item__cell-total-price">
                                                            <span>₫{(item.qty * item.productPrice).toLocaleString('vi-VN')}</span>
                                                        </div>
                                                        <div className="cart-item__cell-actions cart-item__cell-actions--multiple">
                                                            <button className="cart-item__action" onClick={() => removeFromCartHandle(item.product)}>Xóa</button>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cart-page-footer cart-page-footer--overlap">
                    <div className="cart__bottom">
                        <div className="backto_listfood">
                            <Link to="/">
                                <i className="fas fa-backward"></i>
                            Tiếp tục mua hàng
                            </Link>
                        </div>
                        <div className="subtotal">
                            <span>
                                Tổng giá&nbsp;
                                ({cartItems.reduce((a, b) => a + Number(b.qty), 0)} sản phẩm) :&nbsp;
                            </span>
                            <span className="sub__total">
                                {cartItems.reduce((a, b) => a + b.productPrice * b.qty, 0).toLocaleString('vi-VN')} đ
                            </span>
                            <button type="button" className="ant-btn ant-btn-primary" onClick={checkoutHandler} disabled={cartItems.length === 0} >Tiến hành thanh toán</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartScreen;