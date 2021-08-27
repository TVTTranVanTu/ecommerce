import React from 'react';

function ShopeeMallProduct(props) {
    const { item } = props;

    return (
        <div>
            <div className="ofs-carousel__item">
                <a className="ofs-carousel__shop-cover-image" href="/laneige-day">
                    <div className="_25_r8I">
                        <div className="ofs-carousel__cover-image _2GchKS" style={{ backgroundImage: `url(${item.image})`, backgroundSize: "contain", backgroundRepeat: "no-repeat" }} >
                        </div>
                    </div>
                </a>
                <div className="ofs-carousel__item__text">{item.title}</div>
            </div>
        </div>
    );
}

export default ShopeeMallProduct;