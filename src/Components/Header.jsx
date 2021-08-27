import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { listProductSearch } from "../Actions/SearchProductAction";
import logo from "../assets/logo1.png";
function Header(props) {
  const history = useHistory();
  const cart = useSelector((state) => state.cart);
  const [keyword, setKeyword] = useState("");
  const { cartItems } = cart;
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({
    limit: 20,
    page: 0,
  });

  const listProductsSearch = useSelector((state) => state.listProductsSearch);
  const { loading, error, data } = listProductsSearch;
  console.log(data);
  const searchListProduct = () => {
    dispatch(listProductSearch(keyword, filters));
  };
  useEffect(() => {
    data && history.push(`/search/${keyword}`);
  }, [data, history]);
  return (
    <div className="header">
      <div className="container">
        <div className="header__logo">
          <Link to="/">
            <div className="logo_image">
              <img src={logo} alt="logo" />
            </div>
          </Link>
        </div>
        <div className="header__search">
          <div className="searchbar">
            <div className="searchbar__main">
              <form role="search" className="form-searchbar-input">
                <input
                  className="search-input"
                  placeholder="Nhập vào mặt hàng bạn muốn tìm ..."
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                ></input>
              </form>
            </div>
            <button
              type="button"
              className="btn btn-solid-primary btn--s btn--inline"
              onClick={searchListProduct}
            >
              <svg
                height="19"
                viewBox="0 0 19 19"
                width="19"
                className="shopee-svg-icon "
              >
                <g fillRule="evenodd" stroke="none" strokeWidth="1">
                  <g transform="translate(-1016 -32)">
                    <g>
                      <g transform="translate(405 21)">
                        <g transform="translate(611 11)">
                          <path d="m8 16c4.418278 0 8-3.581722 8-8s-3.581722-8-8-8-8 3.581722-8 8 3.581722 8 8 8zm0-2c-3.3137085 0-6-2.6862915-6-6s2.6862915-6 6-6 6 2.6862915 6 6-2.6862915 6-6 6z"></path>
                          <path d="m12.2972351 13.7114222 4.9799555 4.919354c.3929077.3881263 1.0260608.3842503 1.4141871-.0086574.3881263-.3929076.3842503-1.0260607-.0086574-1.414187l-4.9799554-4.919354c-.3929077-.3881263-1.0260608-.3842503-1.4141871.0086573-.3881263.3929077-.3842503 1.0260608.0086573 1.4141871z"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </button>
          </div>
          <div className="search-type-product">
            <div className="list-type-product">
              <a href="#">Sandal Nữ</a>
              <a href="#">SƠMI Nữ</a>
              <a href="#">Tai-Nghe Bluetooth</a>
              <a href="#">Áo-Khoác Nữ</a>
              <a href="#">Áo-Phông Nữ</a>
              <a href="#">Giày-Thể-Thao Nữ</a>
              <a href="#">Balo Nữ</a>
              <a href="#">Quần-Jean Nữ</a>
            </div>
          </div>
        </div>
        <div className="header__cart">
          <Link to="cart" className="cart-link">
            <svg
              viewBox="0 0 26.6 25.6"
              className="shopee-svg-icon navbar__link-icon icon-shopping-cart-2"
            >
              <polyline
                fill="none"
                points="2 1.7 5.5 1.7 9.6 18.3 21.2 18.3 24.6 6.1 7 6.1"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="2.5"
              ></polyline>
              <circle cx="10.7" cy="23" r="2.2" stroke="none"></circle>
              <circle cx="19.7" cy="23" r="2.2" stroke="none"></circle>
            </svg>
            {cartItems.length > 0 && (
              <div className="shopee-cart-number-badge">{cartItems.length}</div>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
