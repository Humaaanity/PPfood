import React from 'react';
import Dish4 from "../../../images/dish4.png";
import Dish3 from "../../../images/dish3.png";
import Dish2 from "../../../images/dish2.png";
import Dish1 from "../../../images/dish1.png";
import './tuesday.css'

const Tuesday = () => {
    return (
        <div className='tuesday'>
            <div><img src={Dish4} alt=""/>
                <h5>Ужин 100/100 гр</h5>
                <p>Морепродукты в соусе Гарсия со стручковой фасолью</p>
            </div>
            <div><img src={Dish3} alt=""/>
                <h5>Полдник 50/30 гр</h5>
                <p>Кукурузные блинчики с кокосовым припеком и фруктовым тар-таром</p>
            </div>
            <div><img src={Dish2} alt=""/>
                <h5>Обед 320/30 гр</h5>
                <p>Боул с куриными фрикадельками в кунжуте, брокколи и миндальным соусом</p>
            </div>
            <div><img src={Dish1} alt=""/>
                <h5>Завтрак 230/250 гр</h5>
                <p>Утренний боул с перепелиным яйцом, киноа и лососем</p>
            </div>

        </div>
    );
};

export default Tuesday;