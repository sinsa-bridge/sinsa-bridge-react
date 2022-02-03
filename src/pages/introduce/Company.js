import TopBanner from '../TopBanner'
import Header from '../Header';
import Footer from "../Footer";
import ciImg from '../../assets/img/sinsabridge-ci.png';
import mission01 from '../../assets/img/company-mission-01.png';
import mission02 from '../../assets/img/company-mission-02.png';

function Company(){

    const headerStyle=true;
    const topBannerID=1;

    return(
        <>

        <Header headerStyle={headerStyle}/>
        <TopBanner topBannerID={topBannerID}/>

        <div className="company">

            <div className="mission">
            <div className="container">
                <h2>협력을 통해 더 큰 가치를 만들어가는 기업</h2>
                <p>
                    IT기술 각 분야의 상호 협력을 통해 비즈니스의 성공 및 혁신을 함께하고,<br/>
                    더 큰 가치를 만들어가는 기업
                </p>
                <div className="mission-img">
                    <figure>
                        <img src={mission01} />
                        <figcaption></figcaption>
                    </figure>
                    <figure>
                        <img src={mission02} />
                        <figcaption>디케이테크인은 IT 기술적 가치 창출로 고객과 세상의 새로운 연결을 만들어가기 위해 존재합니다.</figcaption>
                    </figure>
                </div>
            </div>
            </div>

            <div className="vision">
            <div className="container">
                <h2>새로운 세상, 새로운 연결</h2>
                <p>
                    우리는 IT기술 전문 기업으로써 기술과 사람을 중심으로<br/>
                    세상을 연결하고, 즐겁게 바꾸며, 이전에 없던 새로운 가치를 만들어 가겠습니다.
                </p>
            </div>
            </div>

            <div className="value">
            <div className="container">
                
                <div className="content">
                <h3>Value</h3>
                <ul className="row">
                        <li className='col-md-6'> 
                            <div className="con">
                                <strong>인재경영 - 사람중심의 연결</strong>
                                <p>모든 구성원이 각 분야의 전문가로 성장하도록 잠재력을 가진 인재를 발굴하고, 구성원들이 최고의 역량을 발휘할 수 있는 환경을 제공합니다.</p>
                            </div>
                            <div className="img">
                                <img src="https://www.dktechin.com/service/assets/images/img_value_01.png"/>
                            </div>
                        </li>
                        <li className='col-md-6'> 
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
                    <h3>신사브릿지 CI</h3>
                    <div className="box">
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