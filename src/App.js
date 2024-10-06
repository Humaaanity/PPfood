import './App.css';
import Sales from "./components/sales/sales";
import Header from "./components/Header/Header";
import Main from "./components/Main__Page/Main";
import Promo from './components/Promo/Promo'
import Forma from './components/Forma/Forma'
import Order from "./components/Order/Order";
import About1 from '../src/images/about1.svg'
import About2 from '../src/images/about2.svg'
import About3 from '../src/images/about3.svg'
import About4 from '../src/images/about4.svg'
import About5 from '../src/images/about5.svg'
import About6 from '../src/images/about6.svg'
import About from '../src/components/About/About'
import Bowls from "./components/Bowls/Bowls";
import Map from '../src/components/Map/Map.jsx'



const App = () => {
    const about = [
        {id : 1,
            image : About1,
            title : 'Мы используем деликатные технологии приготовления блюд',
            body : 'Сухой гриль без прямого контакта продукта\n' +
                'с жарочной поверхностью, запекание, су-вид'
        },{id : 2,
            image : About2,
            title : 'Меню из 90 блюд на две недели \n' +
                'без повтора',
            body : 'Сбалансированные блюда, содержащие в себе все необходимые элементы за счёт большого количества компонентов'
        },{id : 3,
            image : About3,
            title : 'Здоровые рецепты',
            body : 'Без молочки, белой муки, сахара, консервантов, усилителей вкуса и глубокой прожарки. А также мы испольузем сыродавленные масла собственного производства'
        },{id : 4,
            image : About4,
            title : 'Гарантия возврата',
            body : '100%-ная гарантия возврата денежных средств за предоплаченные дни, если что-то не понравилось в течение первой недели'
        },{id : 5,
            image : About5,
            title : 'Контроль температуры',
            // eslint-disable-next-line no-multi-str
            body : 'Все курьеры оснащены сумками-холодильниками, что позволяет сохранять температурный режим  от 2°C до 4°C от кухни до ваших рук'
        },{id : 6,
            image : About6,
            title : 'Забота о природе',
            body : 'Все блюда доставляем в экоупаковке из крафтового картона со столовыми приборами  из кукурузного крахмала'
        },
    ]

    return (
    <div className="App">
      <div className='container-fluid'>
          <Sales/>
          <Header/>
          <Main/>
          <Promo/>
          <Forma/>
          <Order/>
          <h2 className='about-title'>О нашем сервисе</h2>
              <div className='about-service'>{about.map(about  =>
                   <About  key = {about.id} image = {about.image} title = {about.title} body = {about.body}/>
                  )}
              </div>
          <Bowls/>
          <Map/>

      </div>
    </div>
  );
}

export default App;
