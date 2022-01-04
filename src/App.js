import { Route, Routes } from 'react-router-dom';
import './App.css';
import { HomePage } from './pages/homepage/HomePage';
import ShopPage from './components/shop/Shop'; 


function App() {
  return (
    <div className="App">
    <Routes>
      <Route exact path='/' element={<HomePage/>}/>
      <Route exact path='/shop' element={ <ShopPage/>} />
    </Routes>
    </div>
  );
}

export default App;
