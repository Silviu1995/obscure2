import React from 'react'
import { GiDwarfFace, GiHornedSkull,GiDaemonSkull,GiDuration,GiServerRack } from "react-icons/gi";
import { FcOk } from "react-icons/fc";
import './Status.scss'
const Status = () => {
  return (
    <div className="statusContainer">
      <div className='statusWrapper'>
     <div className="serverStatus">
        <GiServerRack className='statusImage'/>
        <h4>Server status:</h4>
        <h4>ONLINE</h4>
        <FcOk className='statusImage'/>
     </div>
     <div className="statusItem">
        <div className='statusImageContainer'><GiDwarfFace className="statusImage"/></div>
        <div className="statusInfo">
            <h2>100.422</h2>
            <span>conturi creeate</span>
        </div>
      </div>
      <div className="statusItem">
        <div className='statusImageContainer'><GiHornedSkull className="statusImage"/></div>
        <div className="statusInfo">
            <h2>10.222</h2>
            <span>caractere creeate</span>
        </div>
      </div>
      <div className="statusItem">
        <div className='statusImageContainer'><GiDaemonSkull className="statusImage"/></div>
        <div className="statusInfo">
            <h2>2.122</h2>
            <span>jucatori online</span>
        </div>
      </div>
      <div className="statusItem">
        <div className='statusImageContainer'><GiDuration className="statusImage"/></div>
        <div className="statusInfo">
            <h2>15.223</h2>
            <span>jucatori online - 24h</span>
        </div>
      </div>
    </div>
    </div>
    
  )
}

export default Status
