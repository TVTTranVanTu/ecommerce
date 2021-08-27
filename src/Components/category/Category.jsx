import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listCategory } from "../../Actions/CategoryAction";
import CategoryItem from "./Category-item.jsx";
import LoadingBox from "../boxInfor/LoadingBox";
import MessageBox from "../boxInfor/MessageBox";
function Category(props) {
  const dispatch = useDispatch();
  const categoryList = useSelector((state) => state.categoryList);
  const { loading, error, categorys } = categoryList;
  const [translate, setTranslate] = useState(0);
  const prev = () => {
    setTranslate(translate + 360);
  };
  const next = () => {
    setTranslate(translate - 360);
  };
  useEffect(() => {
    dispatch(listCategory());
  }, [dispatch]);

  return (
    <div className="category">
      <div className="container">
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <div>
            <div className="category__title">
              <h1>Danh mục</h1>
            </div>
            <div className="category__content">
              <div className="carousel-content">
                <ul
                  className="carousel__item-list"
                  style={{
                    width: `${Math.ceil(categorys.length / 2) * 10}%`,
                    transform: `translate(${translate}px,0px)`,
                  }}
                >
                  {categorys
                    .slice(0, Math.ceil(categorys.length / 2))
                    .map((item) => (
                      <li key={item.id} className="image-carousel__item">
                        <CategoryItem item={item} />
                      </li>
                    ))}
                </ul>
                <ul
                  className="carousel__item-list"
                  style={{
                    width: `${
                      categorys.length % 2 === 0
                        ? Math.ceil(categorys.length / 2) * 10
                        : Math.ceil(categorys.length / 2 - 1) * 10
                    }%`,
                    transform: `translate(${translate}px,0px)`,
                  }}
                >
                  {categorys
                    .slice(Math.ceil(categorys.length / 2), categorys.length)
                    .map((item) => (
                      <li key={item.id} className="image-carousel__item">
                        <CategoryItem item={item} />
                      </li>
                    ))}
                </ul>
              </div>
              <div
                className="carousel-arrow carousel-arrow--prev carousel-arrow--hint"
                onClick={prev}
                role="button"
                tabIndex="0"
                style={{
                  opacity: 1,
                  visibility: `${translate === 0 ? "hidden" : "visible"}`,
                  transform: "translateX(calc(-50% + 0px))",
                }}
              >
                <svg
                  enableBackground="new 0 0 13 20"
                  viewBox="0 0 13 20"
                  x="0"
                  y="0"
                  className="shopee-svg-icon icon-arrow-left-bold"
                >
                  <polygon points="4.2 10 12.1 2.1 10 -.1 1 8.9 -.1 10 1 11 10 20 12.1 17.9"></polygon>
                </svg>
              </div>
              <div
                className="carousel-arrow carousel-arrow--next carousel-arrow--hint"
                onClick={next}
                role="button"
                tabIndex="0"
                style={{
                  opacity: 1,
                  visibility: `${
                    translate === (Math.ceil(categorys.length / 2) - 10) * -120
                      ? "hidden"
                      : "visible"
                  }`,
                  transform: "translateX(calc(50% - 0px))",
                }}
              >
                <svg
                  enableBackground="new 0 0 13 21"
                  viewBox="0 0 13 21"
                  x="0"
                  y="0"
                  className="shopee-svg-icon icon-arrow-right-bold"
                >
                  <polygon points="11.1 9.9 2.1 .9 -.1 3.1 7.9 11 -.1 18.9 2.1 21 11.1 12 12.1 11"></polygon>
                </svg>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Category;
