import './App.scss';
import MyRoutes from './layout/MyRoutes';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <MyRoutes/>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
