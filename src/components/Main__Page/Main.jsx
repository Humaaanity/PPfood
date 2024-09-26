import React, {useState} from 'react';
import Food from '../../images/food.svg'

import './Main.css'
import Consulting from "../Consulting/Consulting";

const Main = () => {
    const [consultIsOpen, setConsultOpen] = useState(false)
    return (

        <div className='Main__Page'>
          <div className="main">
              <h2>Готовим с душой
                и доставляем с заботой
                вкусное правильное
                питание</h2>
            <h3>от 1 500 ₽ в день</h3>
            <div className="buttons">
                <button className='pitanie'>Подобрать питание</button>
                <button className='consulta' onClick={() => setConsultOpen(true)}>Получить консультацию</button>
            </div>
          </div>
            <img src={Food} alt=""/>



            <Consulting isOpen = {consultIsOpen} onClose = {() => setConsultOpen(false)}/>
        </div>
    );
};

export default Main;