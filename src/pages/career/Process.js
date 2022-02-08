import TopBanner from "../TopBanner";
import Header from "../Header";
import Footer from "../Footer";

function Process(){

    const headerStyle=false;
    const topBannerID=6;

    return(
        <>
        
        <Header headerStyle={headerStyle}/> 
        <TopBanner topBannerID={topBannerID}/>

        <div className="process">
        <div className="container">

            <h2 data-aos="fade-up">영입절차</h2>
            <ul className="row imgmap" data-aos="fade-up">
                <li className="col-md-3">
                    <div className="box">
                        <span>01</span>
                        <p>지원 및<br/>서류전형</p>
                    </div>
                </li>
                <li className="col-md-3">
                    <div className="box">
                        <span>02</span>
                        <p>Pre-Test</p>
                    </div>
                </li>
                <li className="col-md-3">
                    <div className="box">
                        <span>03</span>
                        <p>1차 인터뷰</p>
                    </div>
                </li>
                <li className="col-md-3">
                    <div className="box">
                        <span>04</span>
                        <p>최종 합격</p>
                    </div>
                </li>
            </ul>
            <ul className="row txt">
                <li className="col-md-6" data-aos="fade-up">
                    <dl>
                        <dt>1. 지원 및 서류전형</dt>
                        <dd>
                            제출하신 상세 이력, 자기소개서, 포트폴리오 등에 기반해 평가를 진행합니다.
                            세부 진행 내용 및 제출 양식(항목)은 공고 별 상이할 수 있으니, 지원하시는 채용 공고를 상세히 확인하시기 바랍니다.
                        </dd>
                    </dl>
                </li>
                <li className="col-md-6" data-aos="fade-up">
                    <dl>
                        <dt>2. Pre-Test</dt>
                        <dd>
                            Pre-Test는 개발 직군 서류전형 합격자에 한하여 진행됩니다.
                            코딩테스트를 기본으로 진행하며, 지원하신 직군/직무에 따라 포트폴리오 제출 혹은 당일테스트로 대체될 수 있습니다.
                        </dd>
                    </dl>
                </li>
                <li className="col-md-6" data-aos="fade-up">
                    <dl>
                        <dt>3. 1차 인터뷰</dt>
                        <dd>
                            채용 부서 실무 담당자가 참여해 수행하게 될 업무에 대한 역량, 전문성을 확인하는 과정입니다.
                            Pre-test진행 시 해당 과제 확인도 함께 진행됩니다.
                        </dd>
                    </dl>
                </li>
                <li className="col-md-6" data-aos="fade-up">
                    <dl>
                        <dt>4. 최종 합격</dt>
                        <dd>
                            최종 합격 시 처우 협의 및 입사일을 조율합니다.
                        </dd>
                    </dl>
                </li>
            </ul>

        </div>
        </div>

        <Footer/>
        
        </>
    );

}

export default Process;