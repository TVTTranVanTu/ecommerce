import React from 'react';

function ShopeeMallProduct(props) {
    const { item } = props;

    return (
        <div>
            <div class="ofs-carousel__item">
                <a class="ofs-carousel__shop-cover-image" href="/laneige-day">
                    <div class="_25_r8I">
                        <div class="ofs-carousel__cover-image _2GchKS" style={{ backgroundImage: `url(${item.image})`, backgroundSize: "contain", backgroundRepeat: "no-repeat" }} >
                        </div>
                    </div>
                </a>
                <div class="ofs-carousel__item__text">{item.title}</div>
            </div>
        </div>
    );
}

export default ShopeeMallProduct;