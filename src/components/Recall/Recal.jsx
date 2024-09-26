import React, {useState} from 'react';
import './Recall.css'
import Cross from '../../images/cross.svg'
import {InputMask} from 'primereact/inputmask'
import {Transition} from 'react-transition-group'

const Recal = ({isOpen, onClose}) => {
    const [value, setValue] = useState()
    return (
        <>
            <Transition in={isOpen} timeout={350} unmountOnExit={true}>
        {(state) => (
             <div className={`recall recall--${state}`} >
                 <div className="recall-content" onClick={e => e.stopPropagation()}>
                     <h2>
                         <img src={Cross} alt="" onClick={() => onClose()}/>
                         Заказ обратного звонка</h2>
                     <p>Введи номер телефона, на который необходимо перезвонить</p>
                     <InputMask onChange={(e) => setValue(e.target.value)} mask="+9 (999) 999 99 99" placeholder="Телефон" />
                     <button>Перезвони мне</button>

                 </div>
             </div>)}
            </Transition>
            </>
    );
};

export default Recal;