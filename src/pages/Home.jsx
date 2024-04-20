import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PieChart from "../components/charts/PieChart";
import BarChart from "../components/charts/BarChart";
import { getData} from "../datas/statics/fetching";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


//========================================
import sawah1 from "../assets/images/Sawah-kotgor.jpeg"
import sawah2 from "../assets/images/Sawah-kotgor2.jpg"
import sawah3 from "../assets/images/Sawah-kotgor3.jpeg"
const images = [
    {url: sawah1},
    {url: sawah2},
    {url: sawah3},
]
//=======================================




const Home = () =>{
    const [toggle, setToggle] = useState(false);

    const [showToggle, setShowToggle] = useState(false);

    const fetchCallback = () =>{
        setShowToggle(true)
    }

    const [imgIdx, setImgIdx] = useState(0);

    //For Image Carousel Effect
    let idx=0
    useEffect(()=>{
        const interval = setInterval(()=>{
            if(idx==3){idx=0; setImgIdx(idx)}
            setImgIdx(idx);
            idx++;
        }, 7000)
        return ()=>clearInterval(interval);
    }, [idx])
    ///

    return (
        <>
            <div className={`cont flex justify-center absolute z-10 transition-transform ${toggle != false ? '' : '-translate-x-[382px] z-50'}`}>
                <div className={`chart bg-[#232c31] w-[382px] h-[100vh]`}>
                    <div className="item py-16 px-2 h-full ">
                        <PieChart  onFetch={getData} fetchCallback={fetchCallback}/>
                        <br />
                        <BarChart  onFetch={getData} fetchCallback={fetchCallback}/>
                    </div>
                </div>
                <button className={`bg-[#232c31] px-1 transition ease-in duration-[500ms] hover:opacity-100 ${showToggle != false ? 'opacity-20': 'opacity-0 pointer-events-none'}`} onClick={()=>setToggle(!toggle)}>
                    ▶
                </button>
            </div>


            <main>
                {/* <div className="bg carousel">
                </div> */}

                <div 
                className="bg duration-500" 
                style={{
                    backgroundImage: `url(${images[imgIdx].url})`, 
                    backgroundRepeat: "no-repeat", 
                    backgroundSize: "cover", 
                    backgroundPosition: "50%", 
                    position: "absolute", 
                    top: "0", 
                    left:"0", 
                    bottom:"0", 
                    right:"0", 
                    width:"100%", 
                    height:"100%", 
                    zIndex: "1",
                    transitionProperty: "style 2s",
                    transitionDuration: "1s",
                }}
                ></div>
                
               
                <div className="header">
                    <h1 className="text-balance break-all">SIGPetaKotaGorontalo</h1>
                    <div className="desc">
                        Sistem Informasi Geografis Pertanian Kota Gorontalo
                    </div>
                    <div className="buttons">
                        <Link to={"/peta"}>
                            <button className="mylink">Data Spasial</button>
                        </Link>
                        <Link to={"/data"}>
                            <button className="mylink">Data Tabular</button>
                        </Link>
                    </div>
                    <div className="hr"></div>
                    <div className="desc">
                    <strong>Selamat Datang</strong>
                    <br />
                    SIGPetaKotaGorontalo Merupakan Sebuah Sistem Yang Memuat Data dan Informasi Pertanian di Kota Gorontalo Dalam Bentuk Spasial dan Tabular
                    <br /><br />
                    </div>
                </div>
                <div className="footer">
                    &copy; 2024 Tim KotGor, Sistem Informasi - Universitas Negeri Gorontalo. All Right Reserved
                </div>
            </main>
        </>
    )
}
export default Home;
