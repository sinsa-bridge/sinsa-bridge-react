import { Link } from 'react-router-dom';

function Footer(){
    return(
        <div className="footer">
            <div className="container">

                <ul className="quick">
                    <li><Link to="/Service">회사소개</Link></li>
                    <li><Link to="/contact">고객문의</Link></li>
                </ul>

                <div className="info">
                    <span>(주)신사브릿지</span>
                    <span>서울특별시 중구 회현동 세종대로 14-1 그랜드센트럴 빌딩 9층, 11층</span>
                    <span>대표이사: 조은정</span>
                    <span>대표전화: 070-7847-6600</span>
                    <p className="copyright">© sinsabridge Corp. All rights reserved.</p>
                </div>

                {/* <div className="btn">
                    <div className="mobile"><a>모바일버전 보기</a></div>
                    <ul>
                        <li><a>페이스북</a></li>
                        <li><a>페이스북</a></li>
                        <li><a>페이스북</a></li>
                    </ul>
                </div> */}

            </div>
        </div>
    )
}

export default Footer;
