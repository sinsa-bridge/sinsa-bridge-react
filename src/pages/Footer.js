import { Link } from 'react-router-dom';

function Footer(){
    return(
        <div className="footer">
            <div className="container">

                <ul className="quick">
                    <li><Link to="/company">회사소개</Link></li>
                    <li><Link to="/contact">고객문의</Link></li>
                </ul>

                <div className="info">
                    <span>(주)신사브릿지</span>
                    <span>경기도 김포시 김포한강9로75번길 158 KR 이편한세상시티 한강신도시 A307</span>
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
