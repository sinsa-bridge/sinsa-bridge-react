import React,{useEffect} from "react";
import TopBanner from "../TopBanner";
import Header from "../Header";
import Footer from "../Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const Welfare = () => {

    useEffect(() => {
        AOS.init({
            duration : 1000
        });
    })

    const headerStyle=false;
    const topBannerID=2;

    return(
        <>
            <Header headerStyle={headerStyle}/>
            <TopBanner topBannerID={topBannerID}/>

            <div className="welfare">
                <div className="container">
                    <div className="work" data-aos="fade-up">
                        <div className="content">
                            <h3>work</h3>
                            <ul className="row">
                                <li className='col-md-6' data-aos="fade-up">
                                    <span className='icon'></span>
                                    <div className="con">
                                        <strong>도서구입비</strong>
                                        <p>주도적인 성장과 역량 향상을 위해 업무 관련 도서 구입 비용을 무제한으로 지원해드려요.</p>
                                    </div>
                                </li>
                                <li className='col-md-6' data-aos="fade-up">
                                    <span className='icon'></span>
                                    <div className="con">
                                        <strong>온라인교육</strong>
                                        <p>패스트캠퍼스 제휴를 통해 가장 트렌드한 업무 지식뿐만 아니라 관심있는 다양한 분야의 역량을 기를 수 있어요.</p>
                                    </div>
                                </li>
                                <li className='col-md-6' data-aos="fade-up">
                                    <span className='icon'></span>
                                    <div className="con">
                                        <strong>직무 관련 컨퍼런스/세미나 지원</strong>
                                        <p>관심있는 국내·외 컨퍼런스 및 세미나를 참석할 수 있어요.</p>
                                    </div>
                                </li>
                                <li className='col-md-6' data-aos="fade-up">
                                    <span className='icon'></span>
                                    <div className="con">
                                        <strong>먹거리/교통비 지원</strong>
                                        <p>어쩔 수 없는 야근 시, 저녁 식대를 제공하고 밤 10시 이후엔 안전한 귀가를 위해 택시비를 지원하고 있어요.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="life" data-aos="fade-up">
                        <div className="content">
                            <h3>Life</h3>
                            <ul className="row">
                                <li className='col-md-6' data-aos="fade-up">
                                    <span className='icon'></span>
                                    <div className="con">
                                        <strong>복지비</strong>
                                        <p>여가/취미 활동 등 좀 더 나은 삶을 지원하기 위해, 연 100만원의 복지비를 지원해드려요.</p>
                                    </div>
                                </li>
                                <li className='col-md-6' data-aos="fade-up">
                                    <span className='icon'></span>
                                    <div className="con">
                                        <strong>가족사랑</strong>
                                        <p>부모님 생신은 저희가 챙길게요. 축하 꽃다발과 백화점 상품권(10만원)을 보내드려요.</p>
                                    </div>
                                </li>
                                <li className='col-md-6' data-aos="fade-up">
                                    <span className='icon'></span>
                                    <div className="con">
                                        <strong>자유로운 휴가</strong>
                                        <p>업무에 차질이 없다면 별도의 결재없이 동료들에게 공유만해주세요.</p>
                                    </div>
                                </li>
                                <li className='col-md-6' data-aos="fade-up">
                                    <span className='icon'></span>
                                    <div className="con">
                                        <strong>리프레시 휴가</strong>
                                        <p>열심히 일한 당신을 위해 3년 근무 시, 15일의 휴가를 드려요.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </>
    );
}

export default Welfare;
