import React from 'react';
import FilterPanel from '../Components/FilterPanel';
import FilterResult from '../Components/FilterResult';

function FilterCategory(props) {
    return (
        <div className="filter__category">
            <div className="container">
                <FilterPanel />
                <FilterResult />
            </div>
        </div>
    );
}

export default FilterCategory;