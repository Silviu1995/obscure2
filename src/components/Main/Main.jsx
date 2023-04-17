import React from 'react'
import './Main.scss'
import Slider from '../Slider/Slider'
const Main = () => {
  return (
    <div className="mainContainer">
        <div className="mainTop">
            <div className="buttonContainer">
                <div className="buttonDiscord">DISCORD</div>
                <div className="buttonRegister">REGISTER</div>
            </div>
            <div className="buttonContainer">
                <div className="buttonDownload">DOWNLOAD</div>
                <div className="buttonRank">RANK</div>
            </div>
        </div>
        <Slider/>
        <div className="mainRegister">
          Register now !
        </div>
    </div>
    
  )
}

export default Main
