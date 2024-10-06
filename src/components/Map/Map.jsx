import React, {useState} from 'react';
import './Map.css'
import map from './../../images/map.png'
import Recal from "../Recall/Recal";
const Map = () => {
    const [recallIsOpen, setRecallIsOpen] = useState(false);
    return (
        <div className='map'>
            <h3>Карта доставки</h3>
            <p className='delivery-time'>Доставка осуществляется каждый день с 06:00 до 12:00. Выбор интервала — 2 часа.</p>
            <div className="map-radius">
                <img src={map} alt=""/>
                <div className="map-info">
                    <div className="green radius">По городу бесплатно</div>
                    <div className="blue radius">Пригород 25 км — 100 ₽</div>
                    <div className="orange radius">Пригород 35 км — 300 ₽</div>
                    <div className="red radius">Пригород 50 км — 500 ₽</div>
                    <p>Уточните стоимость и время доставки</p>
                    <div className="tel">+7 988 500-1-700</div>
                    <div className="time">c 09:00 до 21:00</div>
                    <button onClick={() => setRecallIsOpen(true)}>Перезвоните мне</button>
                    <Recal isOpen = {recallIsOpen} onClose = {() => setRecallIsOpen(false)}/>

                </div>
            </div>

        </div>
    );
};

export default Map;