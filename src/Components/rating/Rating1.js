import React, { useState } from "react";

function Rating1(props) {
  const [value, setValue] = useState(props.value);
  console.log(value);
  return (
    <div className="rating">
      <div className="shopee-rating-stars">
        <div className="shopee-rating-stars__stars">
          <div className="shopee-rating-stars__star-wrapper">
            <div
              className="shopee-rating-stars__lit"
              style={{ width: `${value >= 1 ? "100%" : "0"}` }}
              onClick={() => setValue(1)}
            >
              <svg
                enableBackground="new 0 0 15 15"
                viewBox="0 0 15 15"
                x="0"
                y="0"
                className="shopee-svg-icon shopee-rating-stars__gold-star icon-rating-solid"
              >
                <polygon
                  points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                ></polygon>
              </svg>
            </div>
            <svg
              enableBackground="new 0 0 15 15"
              viewBox="0 0 15 15"
              x="0"
              y="0"
              className="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid"
            >
              <polygon
                points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
              ></polygon>
            </svg>
          </div>
          <div className="shopee-rating-stars__star-wrapper">
            <div
              className="shopee-rating-stars__lit"
              style={{ width: `${value >= 2 ? "100%" : "0"}` }}
              onClick={() => setValue(2)}
            >
              <svg
                enableBackground="new 0 0 15 15"
                viewBox="0 0 15 15"
                x="0"
                y="0"
                className="shopee-svg-icon shopee-rating-stars__gold-star icon-rating-solid"
              >
                <polygon
                  points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                ></polygon>
              </svg>
            </div>
            <svg
              enableBackground="new 0 0 15 15"
              viewBox="0 0 15 15"
              x="0"
              y="0"
              className="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid"
            >
              <polygon
                points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
              ></polygon>
            </svg>
          </div>
          <div className="shopee-rating-stars__star-wrapper">
            <div
              className="shopee-rating-stars__lit"
              style={{ width: `${value >= 3 ? "100%" : "0"}` }}
              onClick={() => setValue(3)}
            >
              <svg
                enableBackground="new 0 0 15 15"
                viewBox="0 0 15 15"
                x="0"
                y="0"
                className="shopee-svg-icon shopee-rating-stars__gold-star icon-rating-solid"
              >
                <polygon
                  points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                ></polygon>
              </svg>
            </div>
            <svg
              enableBackground="new 0 0 15 15"
              viewBox="0 0 15 15"
              x="0"
              y="0"
              className="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid"
            >
              <polygon
                points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
              ></polygon>
            </svg>
          </div>
          <div className="shopee-rating-stars__star-wrapper">
            <div
              className="shopee-rating-stars__lit"
              style={{ width: `${value >= 4 ? "100%" : "0"}` }}
              onClick={() => setValue(4)}
            >
              <svg
                enableBackground="new 0 0 15 15"
                viewBox="0 0 15 15"
                x="0"
                y="0"
                className="shopee-svg-icon shopee-rating-stars__gold-star icon-rating-solid"
              >
                <polygon
                  points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                ></polygon>
              </svg>
            </div>
            <svg
              enableBackground="new 0 0 15 15"
              viewBox="0 0 15 15"
              x="0"
              y="0"
              className="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid"
            >
              <polygon
                points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
              ></polygon>
            </svg>
          </div>
          <div className="shopee-rating-stars__star-wrapper">
            <div
              className="shopee-rating-stars__lit"
              style={{ width: `${value >= 5 ? "100%" : "0"}` }}
              onClick={() => setValue(5)}
            >
              <svg
                enableBackground="new 0 0 15 15"
                viewBox="0 0 15 15"
                x="0"
                y="0"
                className="shopee-svg-icon shopee-rating-stars__gold-star icon-rating-solid"
              >
                <polygon
                  points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                ></polygon>
              </svg>
            </div>
            <svg
              enableBackground="new 0 0 15 15"
              viewBox="0 0 15 15"
              x="0"
              y="0"
              className="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid"
            >
              <polygon
                points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
              ></polygon>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rating1;
