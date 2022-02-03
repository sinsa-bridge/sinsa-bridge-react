import TopBanner from "../TopBanner";
import Header from "../Header";
import Footer from "../Footer";
import ciImg from '../../assets/img/sinsabridge-ci.png';

function Service(){

    const headerStyle=true;
    const topBannerID=4;

    return(
        <>

        <Header headerStyle={headerStyle}/> 
        <TopBanner topBannerID={topBannerID}/>

        <div className="service">
        <div className="container">

            <div className="content si">
                <h3>SI & Solution</h3>
                <strong>컨설팅부터 시스템 구축, 운영까지, 고객 맞춤형 업무 플랫폼 및 사내 시스템을 개발/운영합니다.</strong>
                    <ul className="row">
                        <li className="col-xl-4 box">
                            <dl>
                                <dt><strong>SI프로젝트</strong></dt>
                                <dd>IT 컨설팅 / 사내외 IT 정보 시스템 / 공공 SW 정보화 시스템 / IT 인프라 시스템 등 맞춤형 시스템 구축</dd>
                            </dl>
                        </li>
                        <li className="col-xl-4 box">
                            <dl>
                                <dt><strong>SI프로젝트</strong></dt>
                                <dd>IT 컨설팅 / 사내외 IT 정보 시스템 / 공공 SW 정보화 시스템 / IT 인프라 시스템 등 맞춤형 시스템 구축</dd>
                            </dl>
                        </li>
                        <li className="col-xl-4 box">
                            <dl>
                                <dt><strong>SI프로젝트</strong></dt>
                                <dd>IT 컨설팅 / 사내외 IT 정보 시스템 / 공공 SW 정보화 시스템 / IT 인프라 시스템 등 맞춤형 시스템 구축</dd>
                            </dl>
                        </li>
                    </ul>
            </div>

            <div className="content operation">
                <h3>서비스 개발 및 운영</h3>
                <strong>풍부한 구축 및 운영 경험과 체계화 된 방법론, 최고의 전문인력을 바탕으로 고객사 IT 자산의 활용 가치를 높일 수 있게 최상의 IT Outsourcing 서비스를 제공합니다.</strong>
                <ul class="row">
                    <li className="col-xl-4 box">
                        <dl>
                            <dt><strong>IT Outsourcing 방법론 및 컨설팅</strong></dt>
                            <dd>IT 컨설팅 / 사내외 IT 정보 시스템 / 공공 SW 정보화 시스템 / IT 인프라 시스템 등 맞춤형 시스템 구축</dd>
                        </dl>
                    </li>
                    <li className="col-xl-4 box">
                        <dl>
                            <dt><strong>IT Service Management</strong></dt>
                            <dd>IT 컨설팅 / 사내외 IT 정보 시스템 / 공공 SW 정보화 시스템 / IT 인프라 시스템 등 맞춤형 시스템 구축</dd>
                        </dl>
                    </li>
                    <li className="col-xl-4 box">
                        <dl>
                            <dt><strong>SM 운영 및 유지보수</strong></dt>
                            <dd>IT 컨설팅 / 사내외 IT 정보 시스템 / 공공 SW 정보화 시스템 / IT 인프라 시스템 등 맞춤형 시스템 구축</dd>
                        </dl>
                    </li>
                </ul>
            </div>

            <div className="content ITO">
                <h3>ITO service</h3>
                <strong>카카오 공동체 IT서비스 제공에 필요한 인프라 제반 환경 구축 및 관리, 모니터링, 기술 지원을 수행합니다.</strong>
                <ul className="row">
                    <li className="col-xl-4 box">
                        <dl>
                            <dt><strong>맞춤형 기술 지원</strong></dt>
                            <dd>IT 컨설팅 / 사내외 IT 정보 시스템 / 공공 SW 정보화 시스템 / IT 인프라 시스템 등 맞춤형 시스템 구축</dd>
                        </dl>
                    </li>
                    <li className="col-xl-4 box">
                        <dl>
                            <dt><strong>IDC인프라 관리&운영</strong></dt>
                            <dd>IT 컨설팅 / 사내외 IT 정보 시스템 / 공공 SW 정보화 시스템 / IT 인프라 시스템 등 맞춤형 시스템 구축</dd>
                        </dl>
                    </li>
                    <li className="col-xl-4 box">
                        <dl>
                            <dt><strong>모니터링 및 장애 관제</strong></dt>
                            <dd>IT 컨설팅 / 사내외 IT 정보 시스템 / 공공 SW 정보화 시스템 / IT 인프라 시스템 등 맞춤형 시스템 구축</dd>
                        </dl>
                    </li>
                </ul>
            </div>

            <div className="content client">
                <h3>고객사</h3>
                <ul className="row">
                    <li className="col-6 col-md-3"><img src={ciImg}/></li>
                    <li className="col-6 col-md-3"><img src={ciImg}/></li>
                    <li className="col-6 col-md-3"><img src={ciImg}/></li>
                    <li className="col-6 col-md-3"><img src={ciImg}/></li>
                    <li className="col-6 col-md-3"><img src={ciImg}/></li>
                    <li className="col-6 col-md-3"><img src={ciImg}/></li>
                    <li className="col-6 col-md-3"><img src={ciImg}/></li>
                    <li className="col-6 col-md-3"><img src={ciImg}/></li>
                </ul>
            </div>

        </div>
        </div>

        <Footer/>
        
        </>
    )
}

export default Service;