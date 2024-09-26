import React from 'react';
import './ResultCul.css'
import Cross from '../../images/cross.svg'
import {Transition} from "react-transition-group";

const ResultCul = ({isOpen, onClose, results}) => {
    return (
        <>
        <Transition in={isOpen} timeout={450} unmountOnExit={true}>
            {(state) => (
        <div className='result' onClick={event => event.stopPropagation()}>
            <div className="result-content">
                <img src={Cross} alt="" onClick={onClose}/>
                <p>
                    Ваша суточная норма калорий:
                </p>
                <h2>{results} ккал</h2>
                <button>Выбрать программу питания</button>

            </div>

        </div>)}
        </Transition>
            </>
    );
};

export default ResultCul;