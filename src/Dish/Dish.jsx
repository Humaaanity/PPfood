import React from 'react';

const Dish = ({image, type, gramm, intent}) => {
    return (
        <div className='dish-card'>
            <img src={image} alt=""/>
            <h5>{type} {gramm}</h5>
            <p>{intent}</p>

        </div>
    );
};

export default Dish;