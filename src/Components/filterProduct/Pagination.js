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
    const { page, limit, totalRow } = pagination;
    const totalPages = Math.ceil(totalRow / limit);
    function handlePageChange(newPage) {
        if (onPageChange) {
            onPageChange(newPage)
        }
    }
    return (
        <div className="pagination">
            <div className="shopee-page-controller">
                <button className="shopee-icon-button shopee-icon-button--left " disabled={page <= 0} onClick={() => { handlePageChange(page - 1) }}>
                    <svg enableBackground="new 0 0 11 11" viewBox="0 0 11 11" x="0" y="0" className="shopee-svg-icon icon-arrow-left"><g>
                        <path d="m8.5 11c-.1 0-.2 0-.3-.1l-6-5c-.1-.1-.2-.3-.2-.4s.1-.3.2-.4l6-5c .2-.2.5-.1.7.1s.1.5-.1.7l-5.5 4.6 5.5 4.6c.2.2.2.5.1.7-.1.1-.3.2-.4.2z">
                        </path>
                    </g>
                    </svg>
                </button>
                <button className="shopee-icon-button shopee-icon-button--right " disabled={page >= totalPages - 1} onClick={() => { handlePageChange(page + 1) }}>
                    <svg enableBackground="new 0 0 11 11" viewBox="0 0 11 11" x="0" y="0" className="shopee-svg-icon icon-arrow-right">
                        <path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z"></path>
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default Pagination;