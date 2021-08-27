import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listShopeeMallProducts } from '../Actions/ShopeeMallAction';
import ShopeeMallProduct from '../Components/shopeeMail/ShopeeMallProduct';

function ShopeeMallPage(props) {
    const dispatch = useDispatch();
    const shopeeMallList = useSelector((state) => state.shopeeMallList);
    const { loading, error, shopeeMalls } = shopeeMallList;
    useEffect(() => {
        dispatch(listShopeeMallProducts());
    }, [dispatch]);
    return (
        <div className="shopee-mail">
            <div className="container">
                {
                    loading ? ('') :
                        error ? ('') :
                            (
                                <div className="flashsale-item-result__items">
                                    {
                                        shopeeMalls.map((item) => (
                                            <ShopeeMallProduct key={item._id} item={item} />
                                        ))
                                    }
                                </div>
                            )
                }
            </div>
        </div>
    );
}

export default ShopeeMallPage;