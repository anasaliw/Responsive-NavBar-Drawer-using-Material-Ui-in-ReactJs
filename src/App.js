import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Production from './components/Production';
import Overview from './components/Overview';
import Pricing from './components/Pricing';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Production/>} />
        <Route path='/overview' element={<Overview/>} />
        <Route path='/pricing' element={<Pricing/>} />
        <Route path='/contact' element={<ContactUs/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
