import React from 'react';
import PropTypes from 'prop-types';
Pagination.propTypes = {
    pagination: PropTypes.object.isRequired,
    onPageChange: PropTypes.func,
};



Pagination.defaultProps = {
    onPageChange: null,
};

function Pagination(props) {
    const { pagination, onPageChange } = props;
    const { _page, _limit, _totalRows } = pagination;
    const totalPages = Math.ceil(_totalRows / _limit);
    function handlePgeChange(newPage) {
        if (onPageChange) {
            onPageChange(newPage)
        }
    }
    return (
        <div className="pagination">
            <div className="shopee-page-controller">
                <button className="shopee-icon-button shopee-icon-button--left " disabled={_page <= 1} onClick={() => { handlePgeChange(_page - 1) }}>
                    <svg enableBackground="new 0 0 11 11" viewBox="0 0 11 11" x="0" y="0" className="shopee-svg-icon icon-arrow-left"><g>
                        <path d="m8.5 11c-.1 0-.2 0-.3-.1l-6-5c-.1-.1-.2-.3-.2-.4s.1-.3.2-.4l6-5c .2-.2.5-.1.7.1s.1.5-.1.7l-5.5 4.6 5.5 4.6c.2.2.2.5.1.7-.1.1-.3.2-.4.2z">
                        </path>
                    </g>
                    </svg>
                </button>
                {/* <div className="pagination">
                <div className="shopee-page-controller">
                    <button className="shopee-icon-button shopee-icon-button--left ">
                        <svg enableBackground="new 0 0 11 11" viewBox="0 0 11 11" x="0" y="0" className="shopee-svg-icon icon-arrow-left"><g>
                            <path d="m8.5 11c-.1 0-.2 0-.3-.1l-6-5c-.1-.1-.2-.3-.2-.4s.1-.3.2-.4l6-5c .2-.2.5-.1.7.1s.1.5-.1.7l-5.5 4.6 5.5 4.6c.2.2.2.5.1.7-.1.1-.3.2-.4.2z">
                            </path>
                        </g>
                        </svg>
                    </button>
                    {
                        pages.map((item) => (
                            <button key={item} style={{ display: `${item <= 3 ? 'block' : 'none'}` }} onClick={() => { setActive(item) }} className={`${active === item ? 'shopee-button-solid shopee-button-solid--primary' : 'shopee-button-no-outline'}`}>{item}</button>

                        ))
                    }
                    {
                        pages.length > 3 ? (
                            <button className="shopee-button-no-outline shopee-button-no-outline--non-click">...</button>
                        ) : (
                            <div></div>
                        )
                    }
                    <button className="shopee-icon-button shopee-icon-button--right ">
                        <svg enableBackground="new 0 0 11 11" viewBox="0 0 11 11" x="0" y="0" className="shopee-svg-icon icon-arrow-right">
                            <path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z"></path>
                        </svg>
                    </button>
                </div>
            </div> */}
                <button className="shopee-icon-button shopee-icon-button--right " disabled={_page >= totalPages} onClick={() => { handlePgeChange(_page + 1) }}>
                    <svg enableBackground="new 0 0 11 11" viewBox="0 0 11 11" x="0" y="0" className="shopee-svg-icon icon-arrow-right">
                        <path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z"></path>
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default Pagination;