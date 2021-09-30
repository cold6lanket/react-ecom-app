import React from 'react';
import FilterByPrice from './FilterByPrice';
import FilterByBrand from './FilterByBrand';
import './FilterSection.css';

function FilterSection(props) {
    return (
        <div className="filter-section">
            <FilterByPrice />
            <FilterByBrand />
        </div>
    );
}

export default FilterSection;