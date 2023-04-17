import { AiOutlineArrowLeft,AiOutlineArrowRight } from "react-icons/ai";
import { useState } from "react";
import './Slider.scss'
const Slider = () => {
    const Data = [
        'https://img5.goodfon.com/original/1920x1080/8/3c/metin-2-devushka-magiia.jpg',
        'https://img5.goodfon.com/original/1920x1080/9/fa/girl-fanatsy-art-fire.jpg',
        'https://img5.goodfon.com/original/1920x1080/d/a8/ley-bowen-by-ley-bowen-devushka-kostium-blondinka-art-krasiv.jpg',
        
    ]
    const [currentSlide,setCurrentSlide] = useState(0)

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev-1)
    }
    const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev+1)
    }
    return(
        <div className='slider'>
            <div className="container" >
                <img src={Data[currentSlide]} alt="image" />
            </div>
            <div className="icons">
                
                    <AiOutlineArrowLeft className="icon" onClick={prevSlide}/>
                
                    <AiOutlineArrowRight className="icon" onClick={nextSlide}/>
                
            </div>

        </div>
    )
}

export default Slider
