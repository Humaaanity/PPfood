import React from 'react';
import arrow from '../../images/arrowright.svg'
import discount from '../../images/discount.svg'
import './sales.css'

const Sales = () => {
    return (
        <div className='sales'>
            <div className="discount">
                <img src={discount} alt="discount"/>
                <span>Скидка 20% на первый заказ</span>
            </div>
            <a className='order' href="">Заказать <img src={arrow} alt=""/></a>
            
        </div>
    );
};

export default Sales;