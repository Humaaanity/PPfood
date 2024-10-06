import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';
import Food1 from '../../images/food1.svg'
import './Bowls.css'

const Bowls = () => {
    return (
        <div className='slider'>
            <div className="splide-about">
            <h5>Попробуйте новый формат рационов — Боулы!
                Это богатый набор полезных веществ и масса вкусовых впечатлений!</h5>
            <p>
                Боулы — это сбалансированный вариант блюда, содержащего в себе все необходимые элементы за счёт большого количества компонентов. Ингредиенты блюда не смешиваются между собой, а не спеша поедаются по отдельности.
            </p>
            <p>
                Мы готовим полноценное здоровое питание на день и ежедневно доставляем утром к вашим дверям.
            </p>
            <p>
                Наш сервис помогает экономить время, поддерживать стройность,
                работоспособность и укреплять здоровье.
            </p>
            </div>

            <Splide aria-label="My Favorite Images" className='splide'>
                <SplideSlide className='splide_item'>
                    <img src={Food1} alt=""/>
                </SplideSlide>
                <SplideSlide className='splide_item'>
                    <img src={Food1} alt=""/>
                </SplideSlide>
            </Splide>

        </div>
    );
};

export default Bowls;