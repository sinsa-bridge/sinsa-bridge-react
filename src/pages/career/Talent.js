import TopBanner from "../TopBanner";
import Header from "../Header";
import Footer from "../Footer";
import ciImg from '../../assets/img/sinsabridge-ci.png';

function Talent(){

    const headerStyle=false;
    const topBannerID=5;

    return(
        <>

        <Header headerStyle={headerStyle}/> 
        <TopBanner topBannerID={topBannerID}/>

        <div className="talent">
        <div className="container">

            <h2 data-aos="fade-up">신사브릿지에서 일 한다는 것</h2>
            <div data-aos="fade-up">
                신사브릿지 팀은 최소한의 규칙으로 최대한의 자유를 보장하는 것을 원칙으로 하는 만큼<br/>
                우리 모두가 스스로의 생각과 행동에 대한 막중한 책임감을 가지고 임합니다.<br/>
                다음의 일곱가지는 이러한 원칙을 기반으로 만들어진 신사브릿지의 일하는 방식이며 근본적인 가치입니다.
            </div>
            <ul className="row">
                <li className="col-6 col-md-3" data-aos="fade-up">
                    <span>01</span>
                    <p>스스로 동기부여하여 높은 목표를 도전하고 기존의 틀을 깨는 과감한 실행을 하는 분</p>
                </li>
                <li className="col-6 col-md-3" data-aos="fade-up">
                    <span>02</span>
                    <p>그 과정에서 필요한 역량을 개발하기 위해 노력하여 팀웍을 발휘하는 분</p>
                </li>
                <li className="col-6 col-md-3" data-aos="fade-up">
                    <span>03</span>
                    <p>부단한 자기계발로 항상 새로운 분</p>
                </li>
                {/* <li className="col-6 col-md-3" data-aos="fade-up">
                    <span>04</span>
                    <p>부지런하고 정직하며 예의바른 분</p>
                </li> */}
                <li className="col-6 col-md-3" data-aos="fade-up">
                    <span>04</span>
                    <p>미래를 예측하고 변화를 주도하는 분</p>
                </li>
            </ul>

        </div> 
        </div>

        <Footer/>
        
        </>
    );
}

export default Talent;