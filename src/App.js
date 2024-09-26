import './App.css';
import Sales from "./components/sales/sales";
import Header from "./components/Header/Header";
import Main from "./components/Main__Page/Main";
import Promo from './components/Promo/Promo'
import Forma from './components/Forma/Forma'


function App() {
  return (
    <div className="App">
      <div className='container-fluid'>
          <Sales/>
          <Header/>
          <Main/>
          <Promo/>
          <Forma/>



      </div>
    </div>
  );
}

export default App;
