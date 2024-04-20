import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import sawah from "../assets/images/Sawah-kotgor.jpeg"

const Slider = ()=>{

    return (
        <>
            <Carousel autoPlay autoFocus interval={2500} infiniteLoop showThumbs={false} showArrows={false}>
                <div>
                    <img src={sawah} alt="Sawah" />
                </div>
                <div>
                    <img src={sawah} alt="Sawah" />
                </div>
                <div>
                    <img src={sawah} alt="Sawah" />
                </div>
            </Carousel>

        </>
    );
}


export default Slider;


