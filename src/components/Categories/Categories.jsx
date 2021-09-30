import React from 'react';
import { connect } from 'react-redux';
import { catalogSelected } from '../../actions';
//import { Link } from 'react-router-dom';
import './Categories.css';


function Categories({ catalogSelected, isHidden }) {
    const onHandleChange = (item) => {
        item.preventDefault();
        
        const type = item.target.getAttribute('data-type');

        if (type) {
            catalogSelected(type);
        }
    };

    let classNames = "categories-list";

    // if (isHidden) {
    //     classNames += ' hide';
    // }

    return (
        <ul 
            className={classNames}
            onClick={onHandleChange}
        >
            <li>
                <a href="/" data-type="all">All</a>
            </li>
            <li>
                <a href="/" data-type="laptop">Laptops</a>
            </li>
            <li>
                <a href="/" data-type="phone">Smartphone</a>
            </li>
            <li>
                <a href="/" data-type="other">Other</a>
            </li>
        </ul>
    );
}


const mapDispatchToProps = { catalogSelected };

export default connect(null, mapDispatchToProps)(Categories);