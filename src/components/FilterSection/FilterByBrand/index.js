import React from 'react';
import { connect } from 'react-redux';
import { onBrandSelect, removeBrandSelect } from '../../../actions'
import FilterHeader from '../../FilterHeader';
import FilterOptions from '../../FilterOptions';

function FilterByBrand({ selected, onBrandSelect, removeBrandSelect }) {
    let checkInputs = [
        {type: 'checkbox', name: 'orderByBrand', value: 'dell', id: 'pld', category: 'laptop'},
        {type: 'checkbox', name: 'orderByBrand', value: 'acer', id: 'wer', category: 'laptop'},
        {type: 'checkbox', name: 'orderByBrand', value: 'hp', id: 'qer', category: 'laptop'},
        {type: 'checkbox', name: 'orderByBrand', value: 'apple', id: 'ser', category: 'phonelaptop'},
        {type: 'checkbox', name: 'orderByBrand', value: 'lg', id: 'ver', category: 'laptop'},
        {type: 'checkbox', name: 'orderByBrand', value: 'asus', id: 'nbr', category: 'laptop'},
        {type: 'checkbox', name: 'orderByBrand', value: 'samsung', id: 'ybe', category: 'phonelaptop'},
        {type: 'checkbox', name: 'orderByBrand', value: 'xiaomi', id: 'hbq', category: 'phonelaptop'},
        {type: 'checkbox', name: 'orderByBrand', value: 'huawei', id: 'uyh', category: 'phone'},
    ];

    const onRemoveInput = () => {
        const inputs = document.querySelectorAll('.filter-label > input');

        //catalogSortClear();

        inputs.forEach(input => input.checked = false);  
    };

    const onHandleInput = (e) => {
        const brandName = e.target.value;
        const value = e.target.checked;

        if (value) {
            onBrandSelect(brandName);
        } else {
            removeBrandSelect(brandName);
        }
    };

    let classnames = "filter-price";


    if (selected === 'all') {
        classnames += ' lock';

        onRemoveInput();
    } 


    return (
        <div className={classnames}>
            <FilterHeader header='Brands' />
            <FilterOptions inputElements={checkInputs} func={onHandleInput} />
        </div>
    );
}

const mapStateToProps = ({ selected }) => ({ selected });

const mapDispatchToProps = { onBrandSelect, removeBrandSelect };

export default connect(mapStateToProps, mapDispatchToProps)( FilterByBrand );