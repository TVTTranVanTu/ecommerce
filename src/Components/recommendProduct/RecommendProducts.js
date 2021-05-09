import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listRecommendProducts } from '../../Actions/RecommendProductsAction';
import Product from '../product/Product';

function RecommendProducts(props) {
    const dispatch = useDispatch();
    const recommendProductsList = useSelector((state) => state.recommendProductsList);
    const { loading, error, recommendProducts } = recommendProductsList;
    useEffect(() => {
        dispatch(listRecommendProducts());
    }, [dispatch]);
    return (
        <div className="recommend-products-wrapper">
            <div className="container">
                {
                    loading ? ('') :
                        error ? ('') :
                            (
                                <div>
                                    <div className="recommend-title">
                                        <h1>Gợi ý hôm nay</h1>
                                    </div>
                                    <div className="stardust-tabs-panels">
                                        {
                                            recommendProducts.map((item) => (
                                                <Product key={item.id} item={item} />
                                            ))
                                        }
                                        <div className="_3BrES5">
                                            <a className="btn btn-light btn--m btn--inline btn-light--link _3PNTgJ" href="/daily_discover?pageNumber=2">Xem thêm</a>
                                        </div>
                                    </div>
                                </div>
                            )
                }

            </div>

        </div>
    );
}

export default RecommendProducts;