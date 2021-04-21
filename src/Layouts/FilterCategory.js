import React from 'react';
import FilterPanel from '../Components/filterProduct/FilterPanel';
import FilterResult from '../Components/filterProduct/FilterResult';

function FilterCategory(props) {
    const id = props.match.params.id
    return (
        <div className="filter__category">
            <div className="container">
                <FilterPanel />
                <FilterResult path={props} id={id} />
            </div>
        </div>
    );
}

export default FilterCategory;