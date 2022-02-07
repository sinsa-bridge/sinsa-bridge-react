import React, {useState, useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './pages/Footer';
import './assets/css/bootstrap.css';
import './App.css';
import AOS from "aos";
import "aos/dist/aos.css";

import Main from './pages/main/Main';
import Company from './pages/introduce/Company';
import Welfare from './pages/introduce/Welfare';
import Way from './pages/introduce/Way'
import Contact from './pages/contact/Contact';
import Service from './pages/business/Service';
import Talent from './pages/career/Talent';
import Process from './pages/career/Process';


function App() {

  useEffect(() => {
    AOS.init();
  })

  
  return (
    <>
    <Routes>
      <Route path="/" element={<Main />} exact={true}/>
      <Route path="/Company" element={<Company />} />
      <Route path="/Welfare" element={<Welfare />} />
      <Route path="/Way" element={<Way />} />
      <Route path="/Service" element={<Service />} />
      <Route path="/Talent" element={<Talent />} />
      <Route path="/Process" element={<Process />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
    </>
  );
}

export default App;
