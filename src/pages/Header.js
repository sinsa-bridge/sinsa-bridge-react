import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ciImg from '../assets/img/sinsabridge-ci.png';
import closeicon from '../assets/img/close.png';
import menuicon from '../assets/img/menu2.png';
import menuiconB from '../assets/img/menu2-black.png';

function Header({headerStyle}) {

    const [header, setheader] = useState();

    const [scrollPosition, setScrollPosition] = useState(0);
    const updateScroll = () => {
      setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }
    useEffect(()=>{
        window.addEventListener('scroll', updateScroll);
        return () => setheader(headerStyle);
    },[]);
  
    const [mouseOver, setmouseOver] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
  
    function inMouseOver(){
      setmouseOver(true);
    }
    function inMouseOut(){
      setmouseOver(false);
    }
  
    const style={
      height:"1500px",
      background:"#333"
    }
    
    function openNav(){
      setMobileOpen(true);
    }

    function closeNav(){
      setMobileOpen(false);
    }
  
    return (
      <>
        <div className={ headerStyle == false && scrollPosition < 100 && mouseOver == false ? "header" : "header on" }  onMouseOver={()=>inMouseOver()} onMouseOut={()=>inMouseOut()}> 
          <div className='container'>
            
            <nav className='nav navbar'>
              <h1 className='navbar-brand'><Link to="/">SINSA BRIDGE</Link></h1>
                <ul className='navbar-nav' >
                  <li className='nav-item'>
                    <Link to="/Company">회사소개</Link>
                    <ul className={ mouseOver == false ? "subnav hidden" : "subnav open" }>
                      <li><Link to="/Company">신사브릿지</Link></li>
                      <li><Link to="/Welfare">복지제도</Link></li>
                      <li><Link to="/Way">오시는길</Link></li>
                    </ul>
                  </li>
                  <li className='nav-item'><Link to="/Service">IT Service</Link></li>
                  <li className='nav-item'>
                    <Link to="/Talent">인재영입</Link>
                    <ul className={ mouseOver == false ? "subnav hidden" : "subnav open" }>
                      <li><Link to="/Talent">인재상</Link></li>
                      <li><Link to="/Process">영입절차</Link></li>
                    </ul>
                  </li>
                  <li className='nav-item'><Link to="/Contact">고객문의</Link></li>
                </ul>
            </nav>      
  
          </div>
          <div className={mouseOver == false ? "box-close" : "box"}></div>
        </div>

        <div className={ headerStyle == false && scrollPosition < 100 ? "m-header" : "m-header on" }>
        <nav className='nav navbar'>
          <div className='container'>
            <h1 className='navbar-brand'><Link to="/">SINSA BRIDGE</Link></h1>
            <button onClick={()=>openNav()}><img src={ headerStyle == false && scrollPosition < 100 ? menuicon : menuiconB } /></button>
          </div>
            <ul className={ mobileOpen == false ? "navbar-nav" : "navbar-nav open" } id="m-nav">
              <li className='nav-close'><button onClick={()=>closeNav()}><img src={closeicon}/></button></li>
              <li className='nav-item'>
                <Link to="/Company">회사소개</Link>
                <ul className="subnav open">
                  <li><Link to="/Company">신사브릿지</Link></li>
                  <li><Link to="/Welfare">복지제도</Link></li>
                  <li><Link to="/Way">오시는길</Link></li>
                </ul>
              </li>
              <li className='nav-item'><Link to="/Service">IT Service</Link></li>
              <li className='nav-item'>
                <Link to="/Talent">인재영입</Link>
                <ul className="subnav open">
                  <li><Link to="/Talent">인재상</Link></li>
                  <li><Link to="/Process">영입절차</Link></li>
                </ul>
              </li>
              <li className='nav-item'><Link to="/Contact">고객문의</Link></li>
            </ul>
        </nav>
        </div> 

  
      </>
    );
  }

  

export default Header;