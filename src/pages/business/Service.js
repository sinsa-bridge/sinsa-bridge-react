import TopBanner from "../TopBanner";
import Header from "../Header";
import Footer from "../Footer";
import ciImg from '../../assets/img/sinsabridge-ci.png';
import client01 from '../../assets/img/client/01.png';
import client02 from '../../assets/img/client/02.png';
import client03 from '../../assets/img/client/03.png';
import client04 from '../../assets/img/client/04.png';
import client05 from '../../assets/img/client/05.png';
import client06 from '../../assets/img/client/06.png';

function Service(){

    const headerStyle=false;
    const topBannerID=1;

    return(
        <>

        <Header headerStyle={headerStyle}/>
        <TopBanner topBannerID={topBannerID}/>

        <div className="service">
            <div className="container">

                <div className="content si">
                    <h3 data-aos="fade-up">IT Outsourcing</h3>
                    <strong data-aos="fade-up">풍부한 구축 및 운영 경험으로 고객 맞춤형 서비스를 제공합니다.</strong>
                    <ul className="row">
                        <li className="col-xl-4 box" data-aos="fade-up">
                            <dl>
                                <dt><strong>SI 프로젝트</strong></dt>
                                <dd>IT 컨설팅 / 사내외 IT 정보 시스템 / 공공 SW 정보화 시스템 / IT 인프라 시스템 등 맞춤형 시스템 구축</dd>
                            </dl>
                        </li>
                        <li className="col-xl-4 box" data-aos="fade-up">
                            <dl>
                                <dt><strong>SM 운영 및 유지보수</strong></dt>
                                <dd>시스템 관리 및 운영 부터 유지보수까지 운영을 위한 모든 업무를 전문적이고 효율적으로 진행</dd>
                            </dl>
                        </li>
                        <li className="col-xl-4 box" data-aos="fade-up">
                            <dl>
                                <dt><strong>IT Service 컨설팅</strong></dt>
                                <dd>전문성을 바탕으로 차별화된 방법론 및 컨설팅을 제공하여, IT 분야 최적의 해법을 제시</dd>
                            </dl>
                        </li>
                    </ul>
                </div>

                <div className="content ITO">
                    <h3 data-aos="fade-up">Service Management</h3>
                    <strong data-aos="fade-up">서비스 제공에 필요한 인프라 제반 환경 구축 및 관리, 모니터링, 기술 지원을 수행합니다.</strong>
                    <ul className="row">
                        <li className="col-xl-4 box" data-aos="fade-up">
                            <dl>
                                <dt><strong>맞춤형 기술 지원</strong></dt>
                                <dd>고객 인프라 환경을 고려한, 최적의 인프라 통합 서비스 제공</dd>
                            </dl>
                        </li>
                        <li className="col-xl-4 box" data-aos="fade-up">
                            <dl>
                                <dt><strong>IDC 인프라 관리&운영</strong></dt>
                                <dd>24시간, 365일 무중단</dd>
                            </dl>
                        </li>
                        <li className="col-xl-4 box" data-aos="fade-up">
                            <dl>
                                <dt><strong>모니터링 및 장애 관제</strong></dt>
                                <dd>서비스·인프라 전반</dd>
                            </dl>
                        </li>
                    </ul>
                </div>

                <div className="content info">
                    <h3 data-aos="fade-up">COMPONY PROFILE</h3>
                    <ul className="row list-style" data-aos="fade-up">
                        <li>
                            <dl>
                                <dt>회사설립</dt>
                                <dd>2019.01.08</dd>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt>대표이사</dt>
                                <dd>조은정</dd>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt>주요기술</dt>
                                <dd>Web application</dd>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt>대표메일</dt>
                                <dd>support@sinsabridge.com</dd>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt>사업자등록번호</dt>
                                <dd>672-86-01278</dd>
                            </dl>
                        </li>
                    </ul>
                </div>

                <div className="content client">
                    <h3 data-aos="fade-up">주요 고객사</h3>
                    <ul className="row" data-aos="fade-up">
                        <li className="col-12 col-md-3"><img src={client01}/></li>
                        <li className="col-12 col-md-3"><img src={client02}/></li>
                        <li className="col-12 col-md-3"><img src={client03}/></li>
                        <li className="col-12 col-md-3"><img src={client04}/></li>
                        <li className="col-12 col-md-3"><img src={client05}/></li>
                        <li className="col-12 col-md-3"><img src={client06}/></li>
                    </ul>
                </div>

            </div>
        </div>

        <Footer/>

        </>
    )
}

export default Service;
