import React from 'react';
import './dayBt.css'


const DayBt = ({body, isActive, onChange}) => {



    return (
        <div>
            <button  onClick={() =>onChange(isActive)} className={isActive ? 'comBT-active comBT' : 'comBT'}>{body}</button>
        </div>
    );
};

export default DayBt;