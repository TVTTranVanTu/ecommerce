import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { listSubCategory } from '../../Actions/CategoryAction';

function FilterPanel(props) {
    const [dropdownL, setDropdownL] = useState(false);
    const [dropdownC, setDropdownC] = useState(false);


    const dispatch = useDispatch();
    const subCategoryList = useSelector((state) => state.subCategoryList);
    const { loading, error, subCategories } = subCategoryList;

    const { id } = props;


    useEffect(() => {
        dispatch(listSubCategory(id))
    }, [dispatch], id);

    return (
        <div className="filter__panel">
            <div className="shopee-category-list">
                <a className="shopee-category-list__header" href="/all_categories">
                    <svg viewBox="0 0 12 10" className="shopee-svg-icon shopee-category-list__header-icon icon-all-cate">
                        <g fillRule="evenodd" stroke="none" strokeWidth="1">
                            <g transform="translate(-373 -208)">
                                <g transform="translate(155 191)">
                                    <g transform="translate(218 17)">
                                        <path d="m0 2h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z">
                                        </path>
                                        <path d="m0 6h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z">
                                        </path>
                                        <path d="m0 10h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z">
                                        </path>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                    Tất cả Danh mục
                </a>
                <div className="shopee-category-list__body">
                    {
                        loading ? ('') : (
                            <div className="shopee-category-list__category">
                                <div className="shopee-category-list__main-category shopee-category-list__main-category--active">
                                    <a className="shopee-category-list__main-category__link" href="/Thời-Trang-Nam-cat.78">
                                        <svg viewBox="0 0 4 7" className="shopee-svg-icon shopee-category-list__main-category__caret icon-down-arrow-right-filled">
                                            <polygon points="4 3.5 0 0 0 7">
                                            </polygon>
                                        </svg>
                                        {
                                            subCategories[1].categoryName
                                        }
                                    </a>
                                </div>

                                <div className="folding-items shopee-category-list__sub-category-list folding-items--folded">
                                    {
                                        subCategories.slice(0, 5).map((item) => (
                                            <Link key={item.id} className="shopee-category-list__sub-category" to={item.subCategoryName.replace(/^\/|\//g, "").replace(/\s/g, '-') + ".cat" + item.id}>
                                                <svg viewBox="0 0 4 7" className="shopee-svg-icon shopee-category-list__sub-category__caret icon-down-arrow-right-filled">
                                                    <polygon points="4 3.5 0 0 0 7">
                                                    </polygon>
                                                </svg>
                                                {item.subCategoryName}
                                            </Link>
                                        ))
                                    }
                                    <div className="stardust-dropdown folding-items__toggle">
                                        <div className="stardust-dropdown__item-header" onClick={() => setDropdownC(true)} style={{ display: `${dropdownC ? 'none' : 'block'}` }}>
                                            <div className="shopee-category-list__toggle-btn">
                                                Thêm
                                            <svg enableBackground="new 0 0 11 11" viewBox="0 0 11 11" className="stardust-icon stardust-icon-arrow-down">
                                                    <path stroke="none" d="m11 2.5c0 .1 0 .2-.1.3l-5 6c-.1.1-.3.2-.4.2s-.3-.1-.4-.2l-5-6c-.2-.2-.1-.5.1-.7s.5-.1.7.1l4.6 5.5 4.6-5.5c.2-.2.5-.2.7-.1.1.1.2.3.2.4z">
                                                    </path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="stardust-dropdown__item-body" style={{ display: `${dropdownC ? 'block' : 'none'}`, cursor: "pointer" }}>
                                            <div className="folding-items__folded-items">
                                                {
                                                    subCategories.slice(5, subCategories.length).map((item) => (
                                                        <Link key={item.id} className="shopee-category-list__sub-category" to={item.subCategoryName.replace(/^\/|\//g, "").replace(/\s/g, '-') + ".cat" + item.id}>
                                                            <svg viewBox="0 0 4 7" className="shopee-svg-icon shopee-category-list__sub-category__caret icon-down-arrow-right-filled">
                                                                <polygon points="4 3.5 0 0 0 7">
                                                                </polygon>
                                                            </svg>
                                                            {item.subCategoryName}
                                                        </Link>
                                                    ))
                                                }

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        )
                    }

                </div>
            </div>
            <div className="shopee-search-filter-status shopee-search-filter-status--has-margin">
                <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" className="shopee-svg-icon ">
                    <g>
                        <polyline fill="none" points="5.5 13.2 5.5 5.8 1.5 1.2 13.5 1.2 9.5 5.8 9.5 10.2" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10">
                        </polyline>
                    </g>
                </svg>
                <div className="shopee-search-filter-status__text">Bộ lọc tìm kiếm</div>
            </div>
            <div className="shopee-filter-group shopee-location-filter">
                <div className="shopee-filter-group__header">Nơi bán</div>
                <div className="folding-items shopeee-filter-group__body folding-items--folded">
                    <div className="shopee-filter shopee-checkbox-filter">
                        <div className="shopee-checkbox">
                            <label className="shopee-checkbox__control">
                                <input type="checkbox" name="" value="Hà Nội" />
                                <div className="shopee-checkbox__box">
                                    <i>&ensp;</i>
                                </div>
                                <span className="shopee-checkbox__label">Hà Nội</span>
                            </label>
                        </div>
                    </div>
                    <div className="shopee-filter shopee-checkbox-filter">
                        <div className="shopee-checkbox">
                            <label className="shopee-checkbox__control">
                                <input type="checkbox" name="" value="TP. Hồ Chí Minh" />
                                <div className="shopee-checkbox__box">
                                    <i>&ensp;</i>
                                </div>
                                <span className="shopee-checkbox__label">TP. Hồ Chí Minh</span>
                            </label>
                        </div>
                    </div>
                    <div className="shopee-filter shopee-checkbox-filter">
                        <div className="shopee-checkbox">
                            <label className="shopee-checkbox__control">
                                <input type="checkbox" name="" value="Thái Nguyên" />
                                <div className="shopee-checkbox__box">
                                    <i>&ensp;</i>
                                </div>
                                <span className="shopee-checkbox__label">Thái Nguyên</span>
                            </label>
                        </div>
                    </div>
                    <div className="shopee-filter shopee-checkbox-filter">
                        <div className="shopee-checkbox">
                            <label className="shopee-checkbox__control">
                                <input type="checkbox" name="" value="Vĩnh Phúc" />
                                <div className="shopee-checkbox__box">
                                    <i>&ensp;</i>
                                </div>
                                <span className="shopee-checkbox__label">Vĩnh Phúc</span>
                            </label>
                        </div>
                    </div>

                    <div className="stardust-dropdown folding-items__toggle">
                        <div className="stardust-dropdown__item-header" onClick={() => setDropdownL(true)} style={{ display: `${dropdownL ? 'none' : 'block'}` }}>
                            <div className="shopee-category-list__toggle-btn">
                                Thêm
                                <svg enableBackground="new 0 0 11 11" viewBox="0 0 11 11" className="stardust-icon stardust-icon-arrow-down">
                                    <path stroke="none" d="m11 2.5c0 .1 0 .2-.1.3l-5 6c-.1.1-.3.2-.4.2s-.3-.1-.4-.2l-5-6c-.2-.2-.1-.5.1-.7s.5-.1.7.1l4.6 5.5 4.6-5.5c.2-.2.5-.2.7-.1.1.1.2.3.2.4z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        <div className="stardust-dropdown__item-body" style={{ display: `${dropdownL ? 'block' : 'none'}` }}>
                            <div className="folding-items__folded-items">
                                <div className="shopee-filter shopee-checkbox-filter">
                                    <div className="shopee-checkbox">
                                        <label className="shopee-checkbox__control">
                                            <input type="checkbox" name="" value="Hải phòng" />
                                            <div className="shopee-checkbox__box">
                                                <i>&ensp;</i>
                                            </div>
                                            <span className="shopee-checkbox__label">Hải phòng</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="shopee-filter-group shopee-price-range-filter shopee-price-range-filter--vn">
                <div className="shopee-filter-group__header shopee-price-range-filter__header">Khoảng giá</div>
                <div className="shopee-filter-group__body shopee-price-range-filter__edit">
                    <div className="shopee-price-range-filter__inputs">
                        <input type="text" maxLength="13" className="shopee-price-range-filter__input" placeholder="₫ TỪ" />
                        <div className="shopee-price-range-filter__range-line">
                        </div>
                        <input type="text" maxLength="13" className="shopee-price-range-filter__input" placeholder="₫ ĐẾN" />
                    </div>
                </div>
                <button className="shopee-button-solid shopee-button-solid--primary ">Áp dụng</button>
            </div>

        </div>

    );
}

export default FilterPanel;