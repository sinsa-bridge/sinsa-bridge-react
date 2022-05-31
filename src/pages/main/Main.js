import Header from '../Header';
import Footer from "../Footer";
import SimpleSlider from './MainSlick';
import MainCareers from './MainCareers';
import MainBox from './MainBox';

function Main(){

    const headerStyle=false;

    return(
        <>
        <div className='main'>
            <Header headerStyle={headerStyle}/>
            <SimpleSlider />
            <MainCareers />
            {/* <MainBox /> */}
            <Footer/>
        </div>
        </>
    );
}

export default Main;