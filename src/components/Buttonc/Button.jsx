import React, {useState} from 'react';
import './Buttonc.css'

const Button = ({ccal, col, isActive, setActive}) => {
    return (
        <div >
            <button className={`${isActive ? 'but-active but' : 'but'}`} onClick={setActive} >
                <h4>{ccal}</h4>
                {col !== '' && <span>{col}</span>}
            </button>
        </div>
    );
};

export default Button;