import React, {useState} from 'react';
import {InputMask} from "primereact/inputmask";
import Cross from '../../images/cross.svg'
import './Consulting.css'
import {Transition} from 'react-transition-group'
const Consulting = ({isOpen, onClose}) => {
    const [value, setValue] = useState()
    return (
        <>
            <Transition in={isOpen} timeout={700} unmountOnExit={true}>
            {(state) => (
        <div className={`consult consult--${state}`}>
            <div className="consult-content" onClick={event => event.stopPropagation()}>
                <h2><img src={Cross} onClick={() => onClose() } className='cross' alt=""/>
                    Консультация</h2>
                <p>Предложим подходящую программу, ответим на все ваши вопросы.</p>
                <InputMask onChange={(e) => setValue(e.target.value)} mask="+9 (999) 999 99 99" placeholder="Телефон" />
                <button className='send'>Отправить</button>
            </div>
        </div>)}
            </Transition>
            </>
    );
};

export default Consulting;