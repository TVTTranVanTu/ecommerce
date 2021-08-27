import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listRecommendProducts } from '../Actions/RecommendProductsAction';
import FlashSaleProduct from '../Components/flashSale/FlashSaleProduct';
function FlashSalePage(props) {
    const dispatch = useDispatch();
    const flashSaleList = useSelector((state) => state.flashSaleList);
    const { loading, error, flashSales } = flashSaleList;
    useEffect(() => {
        dispatch(listRecommendProducts());
    }, [dispatch]);
    return (
        <div className="flash-sale__page">
            <div className="container">
                {
                    loading ? ('') :
                        error ? ('') :
                            (
                                <div className="flashsale-item-result__items">
                                    {
                                        flashSales.map((item) => (
                                            <FlashSaleProduct key={item._id} item={item} />
                                        ))
                                    }
                                </div>
                            )
                }
            </div>
        </div>
    );
}

export default FlashSalePage;