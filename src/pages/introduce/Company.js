import TopBanner from '../TopBanner'
import Header from '../Header';
import Footer from "../Footer";
import ciImg from '../../assets/img/sinsabridge-ci.png';
import mission01 from '../../assets/img/company-mission-01.png';
import mission02 from '../../assets/img/company-mission-02.png';

function Company(){

    const headerStyle=false;
    const topBannerID=1;

    return(
        <>

        <Header headerStyle={headerStyle}/>
        <TopBanner topBannerID={topBannerID}/>

        <div className="company" data-aos="fade-up">

            <div className="mission">
            <div className="container">
                <h2 data-aos="fade-up">협력을 통해 더 큰 가치를 만들어가는 기업</h2>
                <p data-aos="fade-up">
                    IT기술 각 분야의 상호 협력을 통해 비즈니스의 성공 및 혁신을 함께하고,<br/>
                    더 큰 가치를 만들어가는 기업
                </p>
                <div className="mission-img row">
                    <figure className="col-md-6" data-aos="fade-up">
                        <img src={mission01} />
                        <figcaption></figcaption>
                    </figure>
                    <figure className="col-md-6" data-aos="fade-up">
                        <img src={mission02} />
                        <figcaption></figcaption>
                    </figure>
                </div>
            </div>
            </div>

            <div className="vision" data-aos="fade-up">
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
                                <strong>인재경영</strong>
                                <p>
                                    신사브릿지에서 가장 중요한 가치는 인재육성입니다. <br/>
                                    좋은 사람, 좋은 조직이 모이면 좋은 회사가 될 것이라 확신합니다.
                                </p>
                            </div>
                            <div className="img">
                                <img src=""/>
                            </div>
                        </li>
                        <li className='col-md-6' data-aos="fade-up">
                            <div className="con">
                                <strong>동반성장</strong>
                                <p>
                                    직원의 성장이 곧 회사의 성장입니다. <br/>
                                    모든 의사결정에서 회사의 이익과 직원들의 성장을 동시에 추구합니다.
                                </p>
                            </div>
                            <div className="img">
                                <img src=""/>
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
