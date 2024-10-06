import React from 'react';
import Cross from '../../images/cross.svg'
import {Transition} from "react-transition-group";
import './Ordering.css'

const Ordering = ({regOpen, regClose}) => {
    return (
        <>
        <Transition in={regOpen} timeout={350} unmountOnExit={true}>
            {(state) => (
        <div className={`ordering ordering--${state}`}>
            <div className="ordering-content" onClick={e => e.stopPropagation()}>
            <h3><img src={Cross} alt="" onClick={regClose}/>Оформление заказа</h3>
            <p>После отправки формы мы свяжемся с вами для уточнения всех деталей</p>
            <input type="text" placeholder='Ваше имя'/>
            <input type="text" placeholder='Адрес доставки'/>
            <input type="text" placeholder='Телефон'/>
                <button>Отправить заказ</button>
            </div>
        </div>)}
        </Transition>
        </>
    );
            };

export default Ordering;