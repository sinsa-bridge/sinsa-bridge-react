import mainboximg from '../../assets/img/mainbox.png';
import { Link } from 'react-router-dom';

function MainCareers(){
    return(
        <div className="mainCareers" data-aos="fade-up" data-aos-offset="200">
            <div className="container">
                <div className="row">

                    <div className="content col-xl-5">
                        <h3 data-aos="fade-up">CAREERS</h3>
                        <h2 data-aos="fade-up">Right people for the 'sinsabridge'</h2>
                        <p data-aos="fade-up">
                            기술과 사람을 중심으로 새로운 세상, 새로운 연결을 함께 하는<br/>
                            sinsabridge 동반 성장할 전문가를 기다립니다.
                        </p>
                        <Link to="/process" type="button" className="btn-type-black" data-aos="fade-up">영입절차 확인하기</Link>
                    </div>

                    <div className="img col-xl-7" data-aos="fade-up">
                        <img src={mainboximg} />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default MainCareers;