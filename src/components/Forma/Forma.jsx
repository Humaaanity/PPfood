import React, {useState} from 'react';
import './Forma.css'
import ResultCul from "../ResultCul/ResultCul";

const Forma = () => {
    const [active, setActive] = useState(false)
    const [actionValue, setActionValue] = useState()
    const [missionValue, setMissionValue] = useState()
    const [weightValue, setWeightValue] = useState()
    const [heightValue, setHeightValue] = useState()
    const [oldValue, setOldValue] = useState()
    const [Pole, setPole] = useState(false)
    const Results =  Math.round(88.36 + (13.4 * parseInt(weightValue)) + (4.8 * parseInt(heightValue)) - (5.7 * parseInt(oldValue)) + parseInt(actionValue) + parseInt(missionValue));
    const Crate = () => {
        if (!Results) {
            setPole(true);
            setActive(false)
        }
        else {
            setPole(false)
            setActive(true)
        }

    }

    return (
        <div className='ff'>
            <h2>Подберите рацион для своих целей</h2>
            {Pole && <div className='error' style={{color: 'red'}}>Заполните все поля</div>}
        <form onSubmit={e => e.preventDefault()}>
            <input onChange={e => setWeightValue(e.target.value)} className='weight' type="number" placeholder='Ваш вес в кг.'/>
            <input onChange={e => setHeightValue(e.target.value)} className='height' type="number" placeholder='Ваш рост в см.'/>
            <input onChange={e => setOldValue(e.target.value)} className='old' type="number" placeholder='Ваш возраст'/>
            <select id='action' onChange={e => setActionValue(e.target.value)}  name='Активность'>
                <option className='opt' value="1" disabled selected>Активность</option>
                <option className='opt' value="100">Низкая</option>
                <option className='opt' value="200">Средняя</option>
                <option className='opt' value="300">Высокая</option>
            </select>
            <select onChange={e => setMissionValue(e.target.value)}>
                <option className='opt' value="1" disabled selected>Выберите цель</option>
                <option className='opt' value="-200">Похудение</option>
                <option className='opt' value="200">Набор</option>
            </select>
            <button onClick={Crate} className='explore'>Узнать результаты</button>
        </form>


            <ResultCul isOpen = {active} onClose = {() => setActive(false)} results ={Results}/>
        </div>
    );
};

export default Forma;