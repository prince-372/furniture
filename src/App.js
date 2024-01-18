
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Aboutus from './pages/Aboutus';
import Contactus from './pages/Contactus';
import Shop from './pages/Shop';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init({
      duration:1500,
      once:true,
    });
  }, [])

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
