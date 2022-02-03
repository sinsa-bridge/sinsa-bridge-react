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

            <h2>신사브릿지에서 일 한다는 것</h2>
            <div>
                신사브릿지 팀은 최소한의 규칙으로 최대한의 자유를 보장하는 것을 원칙으로 하는 만큼<br/>
                우리 모두가 스스로의 생각과 행동에 대한 막중한 책임감을 가지고 임합니다.<br/>
                다음의 일곱가지는 이러한 원칙을 기반으로 만들어진 신사브릿지의 일하는 방식이며 근본적인 가치입니다.
            </div>
            <ul className="row">
                <li className="col-6 col-md-3">
                    <span>01</span>
                    <p>인재상 첫번째</p>
                </li>
                <li className="col-6 col-md-3">
                    <span>02</span>
                    <p>인재상 두번째</p>
                </li>
                <li className="col-6 col-md-3">
                    <span>03</span>
                    <p>인재상 세번째</p>
                </li>
                <li className="col-6 col-md-3">
                    <span>04</span>
                    <p>인재상 네번째</p>
                </li>
                <li className="col-6 col-md-3">
                    <span>05</span>
                    <p>인재상 다섯번째</p>
                </li>
                <li className="col-6 col-md-3">
                    <span>06</span>
                    <p>인재상 여섯번째</p>
                </li>
            </ul>

        </div> 
        </div>

        <Footer/>
        
        </>
    );
}

export default Talent;