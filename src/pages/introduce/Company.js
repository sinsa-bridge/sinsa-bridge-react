import React,{useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import TopBanner from '../TopBanner'
import Header from '../Header';
import Footer from "../Footer";
import ciImg from '../../assets/img/sinsabridge-ci.png';
import mission01 from '../../assets/img/company-mission-01.png';
import mission02 from '../../assets/img/company-mission-02.png';

function Company(){

    useEffect(() => {
        AOS.init({
            duration : 1000
        });
    })

    const headerStyle=false;
    const topBannerID=1;

    return(
        <>

        <Header headerStyle={headerStyle}/>
        <TopBanner topBannerID={topBannerID}/>

        <div className="company">

            <div className="mission">
            <div className="container">
                <h2 data-aos="fade-up">협력을 통해 더 큰 가치를 만들어가는 기업</h2>
                <p data-aos="fade-up">
                    IT기술 각 분야의 상호 협력을 통해 비즈니스의 성공 및 혁신을 함께하고,<br/>
                    더 큰 가치를 만들어가는 기업
                </p>
                <div className="mission-img row" data-aos="fade-up"> 
                    <figure className="col-md-6">
                        <img src={mission01} />
                        <figcaption></figcaption>
                    </figure>
                    <figure className="col-md-6">
                        <img src={mission02} />
                        <figcaption></figcaption>
                    </figure>
                </div>
            </div>
            </div>

            <div className="vision">
            <div className="container">
                <h2 data-aos="fade-up">새로운 세상, 새로운 연결</h2>
                <p data-aos="fade-up">
                    우리는 IT기술 전문 기업으로써 기술과 사람을 중심으로<br/>
                    세상을 연결하고, 즐겁게 바꾸며, 이전에 없던 새로운 가치를 만들어 가겠습니다.
                </p>
            </div>
            </div>

            <div className="value">
            <div className="container">
                
                <div className="content">
                <h3 data-aos="fade-up">Value</h3>
                <ul className="row" data-aos="fade-up">
                        <li className='col-md-6' data-aos="fade-up"> 
                            <div className="con">
                                <strong>인재경영 - 사람중심의 연결</strong>
                                <p>모든 구성원이 각 분야의 전문가로 성장하도록 잠재력을 가진 인재를 발굴하고, 구성원들이 최고의 역량을 발휘할 수 있는 환경을 제공합니다.</p>
                            </div>
                            <div className="img">
                                <img src="https://www.dktechin.com/service/assets/images/img_value_01.png"/>
                            </div>
                        </li>
                        <li className='col-md-6' data-aos="fade-up"> 
                            <div className="con">
                                <strong>인재경영 - 사람중심의 연결</strong>
                                <p>모든 구성원이 각 분야의 전문가로 성장하도록 잠재력을 가진 인재를 발굴하고, 구성원들이 최고의 역량을 발휘할 수 있는 환경을 제공합니다.</p>
                            </div>
                            <div className="img">
                                <img src="https://www.dktechin.com/service/assets/images/img_value_01.png"/>
                            </div>
                        </li>
                </ul>

                </div>
            </div>
            </div>

            <div className="CI">
            <div className="container">
                <div className="content">
                    <h3 data-aos="fade-up">신사브릿지 CI</h3>
                    <div className="box" data-aos="fade-up">
                        <img src={ciImg} />
                    </div>
                </div>
            </div>
            </div>

        </div>

        <Footer/>
        
        </>
    );
}

export default Company;