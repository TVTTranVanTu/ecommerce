import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProductCategory } from '../../Actions/CategoryAction';
import LoadingBox from '../boxInfor/LoadingBox';
import MessageBox from '../boxInfor/MessageBox';
import Pagination from './Pagination';
import Product from '../product/Product';

function FilterResult(props) {
    const dispatch = useDispatch();

    const productsCategory = useSelector((state) => state.productsCategory);
    const { loading, error, listProducts } = productsCategory;

    const { id } = props;
    const [pagination, setPagination] = useState({
        _page: 1,
        _limit: 20,
        _totalRows: 21,
    });
    const [filter, setFilter] = useState({
        _limit: 20,
        _page: 1,
    })

    function handlePgeChange(newPage) {
        console.log("newPage :", newPage);
    }

    useEffect(() => {
        dispatch(listProductCategory(id));
    }, [filter, dispatch, id])

    return (
        <div className="shopee-search-item-result">
            {
                loading ? (<LoadingBox></LoadingBox>)
                    :
                    error ? (<MessageBox variant="danger">{error}</MessageBox>)
                        : (
                            <>
                                <div className="shopee-sort-bar">
                                    <span className="shopee-sort-bar__label">Sắp xếp theo</span>
                                    <div className="shopee-sort-by-options">
                                        <div className="shopee-sort-by-options__option shopee-sort-by-options__option--selected">Phổ biến</div>
                                        <div className="shopee-sort-by-options__option">Mới nhất</div>
                                        <div className="shopee-sort-by-options__option">Bán chạy</div>
                                        <div>
                                            <div className="select-with-status">
                                                <div className="select-with-status__holder select-with-status__box-shadow">
                                                    <span className="select-with-status__placeholder">Giá</span>
                                                    <span>
                                                        <svg viewBox="0 0 10 6" className="shopee-svg-icon icon-arrow-down-small">
                                                            <path d="M9.7503478 1.37413402L5.3649665 5.78112957c-.1947815.19574157-.511363.19651982-.7071046.00173827a.50153763.50153763 
                                                            0 0 1-.0008702-.00086807L.2050664 1.33007451l.0007126-.00071253C.077901 1.18820749 0 1.0009341 0 .79546595 0 .35614224.3561422 
                                                            0 .7954659 0c.2054682 0 .3927416.07790103.5338961.20577896l.0006632-.00066318.0226101.02261012a.80128317.80128317 0 0 
                                                            1 .0105706.0105706l3.3619016 3.36190165c.1562097.15620972.4094757.15620972.5656855 0a.42598723.42598723 0 0 
                                                            0 .0006944-.00069616L8.6678481.20650022l.0009529.0009482C8.8101657.07857935 8.9981733 0 9.2045341 0 9.6438578 0 
                                                            10 .35614224 10 .79546595c0 .20495443-.077512.39180497-.2048207.53283641l.0003896.00038772-.0096728.00972053a.80044712.80044712 0 0 1-.0355483.03572341z" fillRule="nonzero">
                                                            </path>
                                                        </svg>
                                                    </span>
                                                    <div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="select-with-status__dropdown shopee-modal__transition-exit shopee-modal__transition-exit-active">
                                                        <div className="select-with-status__dropdown-item select-with-status__dropdown-item--with-tick">Giá: Thấp đến Cao</div>
                                                        <div className="select-with-status__dropdown-item select-with-status__dropdown-item--with-tick">Giá: Cao đến Thấp</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="shopee-mini-page-controller">
                                        <div className="shopee-mini-page-controller__state">
                                            <span className="shopee-mini-page-controller__current">1</span>
                                            /
                                            <span className="shopee-mini-page-controller__total">100</span>
                                        </div>
                                        <button className="shopee-button-outline shopee-mini-page-controller__prev-btn shopee-button-outline--disabled" disabled="">
                                            <svg viewBox="0 0 7 11" className="shopee-svg-icon icon-arrow-left-small">
                                                <path d="M4.694078 9.8185598L.2870824 5.4331785c-.1957415-.1947815-.1965198-.511363-.0017382-.7071046a.50867033.50867033 0 0 1 
                                                .000868-.0008702L4.7381375.2732784 4.73885.273991c.1411545-.127878.3284279-.205779.5338961-.205779.4393237 0 .7954659.3561422.7954659.7954659 0 
                                                .2054682-.077901.3927416-.205779.5338961l.0006632.0006632-.0226101.0226101a.80174653.80174653 0 0 1-.0105706.0105706L2.4680138 
                                                4.7933195c-.1562097.1562097-.1562097.4094757 0 .5656855a.45579485.45579485 0 0 0 .0006962.0006944l3.3930018 
                                                3.3763607-.0009482.0009529c.128869.1413647.2074484.3293723.2074484.5357331 0 .4393237-.3561422.7954659-.7954659.7954659-.2049545 
                                                0-.391805-.077512-.5328365-.2048207l-.0003877.0003896-.0097205-.0096728a.80042023.80042023 0 0 1-.0357234-.0355483z" fillRule="nonzero"></path>
                                            </svg>
                                        </button>
                                        <button className="shopee-button-outline shopee-mini-page-controller__next-btn">
                                            <svg viewBox="0 0 7 11" className="shopee-svg-icon icon-arrow-right-small">
                                                <path d="M2.305922 9.81856l4.4069956-4.385381c.1957415-.194782.1965198-.511364.0017382-.707105a.26384055.26384055 0 0 
                                                0-.000868-.00087L2.2618625.273278 2.26115.273991C2.1199955.146113 1.9327221.068212 1.7272539.068212c-.4393237 
                                                0-.7954659.356142-.7954659.795466 0 .205468.077901.392741.205779.533896l-.0006632.000663.0226101.02261c.0034906.003557.0070143.00708.0105706.010571L4.5319862 4.79332c.1562097.156209.1562097.409475 
                                                0 .565685-.0002318.000232-.0004639.000463-.0006962.000694L1.1382882 8.73606l.0009482.000953c-.128869.141365-.2074484.329372-.2074484.535733 0 .439324.3561422.795466.7954659.795466.2049545 
                                                0 .391805-.077512.5328365-.204821l.0003877.00039.0097205-.009673c.012278-.011471.0241922-.023327.0357234-.035548z" fillRule="nonzero">
                                                </path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="shopee-search-item-result__items">
                                    {
                                        listProducts.map((item) => (
                                            <Product key={item.id} item={item} />
                                        ))
                                    }
                                </div>
                                <Pagination pagination={pagination} onPageChange={handlePgeChange} />
                            </>
                        )
            }


        </div>

    );
}

export default FilterResult;