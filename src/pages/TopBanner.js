import { useState, useEffect } from "react";
import Spinner from "../Spinner";

function TopBanner({topBannerID}){

    const [bannerList, setBannerList] = useState([]);
    const [banner, setBanner] = useState([]);

    const [loading,setLoading] = useState(false);

    useEffect(()=>{
        fetch('/sinsa-bridge-react/data/topbanner.json',{
            method: 'GET'
        })
         .then(res => res.json())
         .then(userData => {
             setBannerList(userData);
         });

         document.addEventListener('load',setLoading(true))

    },[])

    // const bannerListItem = setBannerList(bannerList.filter( item => bannerList.id !== item ));
     console.log(bannerList);

    return(
        <>
        { loading == false ? <Spinner /> 
        :bannerList.map( n => {
            if(n.id==topBannerID){
            return(
                <div className="TopBanner" style={{ background: 'url(' + n.imgUrl + ') no-repeat center center' }} key={n.id}>
                    <div className="container">
                        <h2>{n.tit}</h2>
                    </div>
                </div>
            );
            }
        })} 
        </>
    )
}

export default TopBanner;