import React, {useState} from 'react';
import Menu from '../../images/menu.svg'
import Button from '../Buttonc/Button'
import  './Order.css'
import DayBt from "../dayBt/dayBt";
import Dish1 from "../../images/dish1.png";
import Dish2 from "../../images/dish2.png";
import Dish3 from "../../images/dish3.png";
import Dish4 from "../../images/dish4.png";
import Dish from "../../Dish/Dish";
import Monday from "../Dishesday/monday/monday";
import Tuesday from "../Dishesday/tuesday/tuesday";
import ServiceImage from '../../images/service.svg'
import Ordering from "../Ordering/Ordering";
const Order = () => {
    const button = [
        {
            id : 1,
            ccal: '900 ккал',
            col : '4 блюда'


        },
        {
            id : 2,
            ccal: '1250 ккал',
            col : '4 блюда'


        },
        {
            id : 3,
            ccal: '1600 ккал',
            col : '5 блюд'


        },
        {
            id : 4,
            ccal: '2500 ккал',
            col : '6 блюд'


        },
        {
            id : 5,
            ccal: 'индивидуально подобрать',


        },
        {
            id : 6,
            ccal: 'Пробные 2 дня',
            col : 'за 2900 ₽'


        },
        {
            id : 7,
            ccal: '1 неделя',
            col : '1700 ₽ в день'


        },
        {
            id : 8,
            ccal: '2 недели ',
            col : '1600 ₽ в день'


        },
        {
            id : 9,
            ccal: '3 недели',
            col : '1520 ₽ в день'


        },
        {
            id : 10,
            ccal: '4 недели',
            col : '1450 ₽ в день'


        },
    ]
    const [dayActive, setDayActive] = useState(0)
    const [activeButton, setActiveButton] = useState(0)
    const [activeNumber, setActiveNumber] = useState(0);
    const dayBtn = [
        {
            id : 1,
            body : 'Понедельник',
            name: 'monday'
        },
        {
            id : 2,
            body : 'Вторник',
            name : 'tuesday'
        },
        {
            id : 3,
            body : 'Среда',
            name: 'wednesday'
        } ,
        {
            id : 4,
            body : 'Четверг',
            name: 'thursday'
        },
        {
            id : 5,
            body : 'Пятница',
            name: 'friday'
        },{
            id : 6,
            body : 'Суббота',
            name: 'saturday'

        },{
            id : 7,
            body : 'Воскресенье',
            name: 'sunday'
        },

    ]
    const buttonGroup1 = button.slice(0, 5)
    const buttonGroup2 = button.slice(5, 10)
    const Dishes = [
        {
            id : 1,
            image: Dish1,
            type : 'Завтрак',
            gramm: '230/250 гр',
            intent : 'Утренний боул с перепелиным яйцом, киноа и лососем'

        },
        {
            id : 2,
            image: Dish2,
            type : 'Обед',
            gramm: '320/30 гр',
            intent : 'Боул с куриными фрикадельками в кунжуте, брокколи и миндальным соусом'

        },
        {
            id : 3,
            image: Dish3,
            type : 'Полдник',
            gramm: '50/30 гр',
            intent : 'Кукурузные блинчики с кокосовым припеком и фруктовым тар-таром'

        },
        {
            id : 4,
            image: Dish4,
            type : 'Ужин',
            gramm: '100/100 гр',
            intent : 'Морепродукты в соусе Гарсия со стручковой фасолью'

        }
    ]

    const [dayBt, setdayBt] = useState('monday')
    const [registration, setRegistration] = useState(false)



    return (
        <div className='ord'>
            <div className="programm">
            <h2>Программа ПремиумБоул</h2>
                <span><img src={Menu} alt=""/>Каждый день новое меню</span>
            </div>
            <div className='title'>Калорийность</div>
            <div className="colccal">
                {buttonGroup1.map(button =>
                    <Button
                        key={button.id} ccal={button.ccal} col={button.col? button.col : ''}
                        setActive={() => setActiveNumber(button.id)}
                        isActive={button.id === activeNumber}
                    />
                )}
            </div>
            <div className='title2'>Продолжительность</div>
            <div className="colccal">
            {buttonGroup2.map(button =>
                <Button
                key={button.id} ccal={button.ccal} col={button.col ? button.col : ''}
                setActive={() => setActiveButton(button.id)}
                isActive={button.id === activeButton}
                />
            )}
            </div>

            <div className="days">
                <p>Выберите, сколько дней  в неделю вы хотите питаться</p>
                <div className="colday">
                    <button className={`${dayActive === document.getElementById('day1') ? 'day-active day' : 'day'}`} id='day1' onClick={() => setDayActive(document.getElementById('day1'))}>5</button>
                    <button className={`${dayActive === document.getElementById('day2') ? 'day-active day' : 'day'}`} id='day2' onClick={() => setDayActive(document.getElementById('day2'))}>6</button>
                    <button className={`${dayActive === document.getElementById('day3') ? 'day-active day' : 'day'}`} id='day3' onClick={() => setDayActive(document.getElementById('day3'))}>7</button>
                </div>
            </div>

            <div className="example">
                <h4>Пример дневного рациона</h4>
                <div className='fats'>6 блюд. Калорийность — 1 235 ккал. Белки — 103 г; жиры — 37 г; углеводы — 120 г</div>
                <div className="btdays">
                    {dayBtn.map(dayBtn =>
                        <DayBt key = {dayBtn.id}
                            body ={dayBtn.body}
                               isActive = {dayBtn.name === dayBt}
                               onChange = { () => setdayBt(dayBtn.name)}
                        />
                        )}

                </div>

                {dayBt === 'monday' && <>

                        <Monday/>


                </>}

                {dayBt === 'tuesday' && <>

                       <Tuesday/>
                </>
                }
                {dayBt === 'wednesday' && <>

                    <Monday/>


                </>}

                {dayBt === 'thursday' && <>

                    <Tuesday/>
                </>
                }
                {dayBt === 'friday' && <>

                    <Monday/>


                </>}

                {dayBt === 'saturday' && <>

                    <Tuesday/>
                </>
                }
                {dayBt === 'sunday' && <>

                    <Monday/>
                </>
                }

            </div>
            <div className="registration">
            <div className="service">
                <button className='order-button'  onClick={() => setRegistration(true)}>Заказать 10 дней питания за 16 000 ₽</button>
                <p>1 250 ккал за 1 600 ₽ в день</p>
            </div>
            <div className="order-info">
                <img className='service-img' src={ServiceImage} alt=""/>
                <div className="info">
                <h4>Будем доставлять наборы каждый день.</h4>`
                <p className='every'>Доставка осуществляется каждый день с 06:00 до 12:00. Выбор интервала — 2 часа. </p>
                <p className='date'>Заявки принимаются не позднее, чем за день до предполагаемой доставки. </p>
                </div>
            </div>
            </div>
            <Ordering regOpen = {registration} regClose = {() => setRegistration(false)}/>
        </div>

    );
};

export default Order;