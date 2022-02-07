import React,{useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import TopBanner from '../TopBanner'
import Header from '../Header';
import Footer from "../Footer";

function Contact(){

    useEffect(() => {
        AOS.init({
            duration : 1000
        });
    })

    const headerStyle=false;
    const topBannerID=7;

    return(
        <>
            <Header headerStyle={headerStyle}/>
            <TopBanner topBannerID={topBannerID}/>

            <div className="contact">
            <div className="container">

                <h2 data-aos="fade-up">문의하기</h2>
                <ul className='row'>
                    <li className='col-md-6' data-aos="fade-up">
                        <h3>이메일 문의</h3>
                        <button>이메일 문의 <span className='icon email-icon'></span></button>
                    </li>
                    <li className='col-md-6' data-aos="fade-up">
                        <h3>카카오톡 문의</h3>
                        <button>카카오톡 문의 <span className='icon kakao-icon'></span></button>
                    </li>
                </ul>

            </div>
            </div>

            <Footer/>
        </>
    );
}

export default Contact;