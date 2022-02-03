import TopBanner from "../TopBanner";
import Header from "../Header";
import Footer from "../Footer";

function Welfare(){

    const headerStyle=false;
    const topBannerID=2;

    return(

        <>
        <Header headerStyle={headerStyle}/> 
        <TopBanner topBannerID={topBannerID}/>

        <div className="welfare">
        <div className="container">
            
            <div className="work">
            <div className="content">
                <h3>work</h3>
                <ul className="row">
                    <li className='col-md-6'>
                        <span className='icon'></span>
                        <div className="con">
                            <strong>유연근무제</strong>
                            <p>구성원을 위한 사내 카페와 스낵바 및 남/ 녀 수면실, 안마의자, 수유실 등 편의시설 운영</p>
                        </div>
                    </li>
                    <li className='col-md-6'>
                        <span className='icon'></span>
                        <div className="con">
                            <strong>유연근무제</strong>
                            <p>구성원을 위한 사내 카페와 스낵바 및 남/ 녀 수면실, 안마의자, 수유실 등 편의시설 운영</p>
                        </div>
                    </li>
                    <li className='col-md-6'>
                        <span className='icon'></span>
                        <div className="con">
                            <strong>유연근무제</strong>
                            <p>구성원을 위한 사내 카페와 스낵바 및 남/ 녀 수면실, 안마의자, 수유실 등 편의시설 운영 구성원을 위한 사내 카페와 스낵바 및 남/ 녀 수면실, 안마의자, 수유실 등 편의시설 운영</p>
                        </div>
                    </li>
                    <li className='col-md-6'>
                        <span className='icon'></span>
                        <div className="con">
                            <strong>유연근무제</strong>
                            <p>구성원을 위한 사내 카페와 스낵바 및 남/ 녀 수면실, 안마의자, 수유실 등 편의시설 운영 구성원을 위한 사내 카페와 스낵바 및 남/ 녀 수면실, 안마의자, 수유실 등 편의시설 운영</p>
                        </div>
                    </li>
                </ul>
            </div>
            </div>

            <div className="life">
            <div className="content">
                <h3>Life</h3>
                <ul className="row">
                    <li className='col-md-6'>
                        <span className='icon'></span>
                        <div className="con">
                            <strong>유연근무제</strong>
                            <p>구성원을 위한 사내 카페와 스낵바 및 남/ 녀 수면실, 안마의자, 수유실 등<br/>편의시설 운영</p>
                        </div>
                    </li>
                    <li className='col-md-6'>
                        <span className='icon'></span>
                        <div className="con">
                            <strong>유연근무제</strong>
                            <p>구성원을 위한 사내 카페와 스낵바 및 남/ 녀 수면실, 안마의자, 수유실 등<br/>편의시설 운영</p>
                        </div>
                    </li>
                    <li className='col-md-6'>
                        <span className='icon'></span>
                        <div className="con">
                            <strong>유연근무제</strong>
                            <p>구성원을 위한 사내 카페와 스낵바 및 남/ 녀 수면실, 안마의자, 수유실 등<br/>편의시설 운영</p>
                        </div>
                    </li>
                </ul>
            </div>
            </div>

            <div className="development">
            <div className="content">
                <h3>Development</h3>
                <ul className="row">
                    <li className='col-md-6'>
                        <span className='icon'></span>
                        <div className="con">
                            <strong>유연근무제</strong>
                            <p>구성원을 위한 사내 카페와 스낵바 및 남/ 녀 수면실, 안마의자, 수유실 등<br/>편의시설 운영</p>
                        </div>
                    </li>
                    <li className='col-md-6'>
                        <span className='icon'></span>
                        <div className="con">
                            <strong>유연근무제</strong>
                            <p>구성원을 위한 사내 카페와 스낵바 및 남/ 녀 수면실, 안마의자, 수유실 등<br/>편의시설 운영</p>
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