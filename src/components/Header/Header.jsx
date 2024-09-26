import React, {useState} from 'react';
import Logo from '../../images/logo.svg'
import './Header.css'
import Recal from "../Recall/Recal";


const Header = () => {
    const [recallIsOpen, setRecallIsOpen] = useState(false);
    return (
        <div className='Head'>
            <div className="logo">
                <img src={Logo} alt=""/>
            </div>
            <div className="nav">
                <a href='#' className="nav_inner">Подбор рациона</a>
                <a href='#' className="nav_inner">Программы питания</a>
                <a href='#' className="nav_inner">О нас</a>
                <a href='#' className="nav_inner">Доставка</a>
                <a href='#' className="nav_inner">Акции</a>
                <a href='#' className="nav_inner">FAQ</a>
                <a href='#' className="nav_inner">Отзывы</a>
            </div>
            <div className="contact">
                <span onClick={() => setRecallIsOpen(true)}>Перезвоните мне</span>
                <div className='tel'>+7 988 500-1-700</div>
                <div className='time'>c 9:00 до 21:00</div>

                <Recal isOpen = {recallIsOpen} onClose = {() => setRecallIsOpen(false)}/>


            </div>
        </div>
    )};

export default Header;