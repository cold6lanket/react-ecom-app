import React from 'react';
import { connect } from 'react-redux';

import { catalogSort, catalogSortClear } from '../../../actions'
import FilterHeader from '../../FilterHeader';
import FilterOptions from '../../FilterOptions';
import './FilterByPrice.css';

function FilterByPrice({ catalogSort, selected, catalogSortClear }) {

    const radioInputs = [
        {type: 'radio', name: 'orderByPrice', value: 'low', id: 'qwe'},
        {type: 'radio', name: 'orderByPrice', value: 'high', id: 'rty'},
    ];
   
    const onRemoveInput = () => {
        const inputs = document.querySelectorAll('.filter-label > input');

        catalogSortClear();

        inputs.forEach(input => input.checked = false);  
    };

    const onHandleInput = (e) => {
        const type = e.target.value.toUpperCase();

        catalogSort(type);
    };

    let classnames = "filter-price";

    if (selected === 'all') {
        classnames += ' lock';

        onRemoveInput();
    }

    return (
        <div className={classnames}>
            <FilterHeader header='Price from' />
            <FilterOptions inputElements={radioInputs} func={onHandleInput} />
        </div>
    );
}

const mapStateToProps = ({ selected }) => ({ selected });

const mapDispatchToProps = { catalogSort, catalogSortClear };

export default connect(mapStateToProps, mapDispatchToProps)(FilterByPrice);



//<input onChange={onHandleInput} type="radio" name="orderByPrice" value="fromLow" />
