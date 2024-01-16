
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Aboutus from './pages/Aboutus';
import Contactus from './pages/Contactus';
import Shop from './pages/Shop';

function App() {
  return (
    <div>
     <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/about' exact element={<Aboutus/>}/>
      <Route path='/contactus' exact element={<Contactus/>}/>
      <Route path='/shop' exact element={<Shop/>}/>
     </Routes>
    </div>
  );
}

export default App;
