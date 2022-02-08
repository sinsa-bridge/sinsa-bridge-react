import React, {useState, useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './pages/Footer';
import './assets/css/bootstrap.css';
import './App.css';

import Main from './pages/main/Main';
import Company from './pages/introduce/Company';
import Welfare from './pages/introduce/Welfare';
import Way from './pages/introduce/Way'
import Contact from './pages/contact/Contact';
import Service from './pages/business/Service';
import Talent from './pages/career/Talent';
import Process from './pages/career/Process';

function App() {
  return (
    <>
    <div className='wrap'>
    <Routes>
      <Route path="/" element={<Main />} exact={true}/>
      <Route path="/company" element={<Company />} />
      <Route path="/welfare" element={<Welfare />} />
      <Route path="/way" element={<Way />} />
      <Route path="/service" element={<Service />} />
      <Route path="/talent" element={<Talent />} />
      <Route path="/process" element={<Process />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </div>
    </>
  );
}

export default App;
