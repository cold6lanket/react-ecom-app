import React from "react";

const FilterOptions = ({ inputElements, func }) => {

    const elements = inputElements.map(item => {
        return (
            <li key={item.id} >
                <label className="filter-label">
                    <input onChange={func} type={item.type} name={item.name} value={item.value} />
                    {item.value}
                </label>
            </li>
        );
    });

    return (
        <ul className="filter-price-types">
            {elements}
        </ul>
    );
};

export default FilterOptions;