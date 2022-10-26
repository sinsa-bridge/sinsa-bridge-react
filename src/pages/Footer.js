import { Link } from 'react-router-dom';
import { useState, useEffect} from 'react';
 
function Footer(){
    const [ view, setView ] = useState('');

    useEffect(()=>{
        window.innerWidth < 765 ? setView(true) : setView(false);
        console.log(view);
    })
    return(
        <div className="footer">
            <div className="container">

                <ul className="quick">
                    <li><Link to="/Service">회사소개</Link></li>
                    <li><Link to="/contact">고객문의</Link></li>
                </ul>

                { view == true ? 
                <div className="info">
                    <span><b>(주)신사브릿지</b></span><br/>
                    <span>경기도 김포시 김포한강9로 75번길 158, B111호</span><br/>
                    <span><b>대표이사</b> 조은정</span><br/>
                    <span><b>대표전화</b> 070-7847-6600</span><br/>
                    <p className="copyright">© sinsabridge Corp. All rights reserved.</p>
                </div>
                :
                <div className="info">
                    <span>(주)신사브릿지</span>
                    <span>경기도 김포시 김포한강9로 75번길 158, B111호</span>
                    <span>대표이사 조은정</span>
                    <span>대표전화 070-7847-6600</span>
                    <p className="copyright">© sinsabridge Corp. All rights reserved.</p>
                </div>
                }

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
