import TopBanner from '../TopBanner'
import Header from '../Header';
import Footer from "../Footer";


function Way(){

    const headerStyle=false;
    const topBannerID=3;

    return(
        <>
            <Header headerStyle={headerStyle}/>
            <TopBanner topBannerID={topBannerID}/>

            <div className="way">
            <div className="container">

                <h2 data-aos="fade-up">김포오피스</h2>
                <dl data-aos="fade-up">
                    <dt>주소</dt>
                    <dd>경기 김포시 김포한강9로75번길 158 (구래동) A-307, B-111</dd>
                </dl>
                <dl data-aos="fade-up">
                    <dt>전화번호</dt>
                    <dd>070-7847-6600</dd>
                </dl>
                <div className='map' data-aos="fade-up"></div>

            </div>
            </div>

            <Footer/>
        </>
    );
}

export default Way;