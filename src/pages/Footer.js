function Footer(){
    return(
        <div className="footer">
            <div className="container">

                <ul className="quick">
                    <li><a>회사소개</a></li>
                    <li><a>오시는길</a></li>
                    <li><a>사업문의</a></li>
                </ul>

                <div className="info">
                    <span>(주)신사브릿지</span>
                    <span>경기도 김포시 김포한강9로75번길 158 KR 이편한세상시티 한강신도시 A307</span>
                    <span>대표이사: 홍길동</span>
                    <span>대표전화: 00-000-0000</span>
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
