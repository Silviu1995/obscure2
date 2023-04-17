import React from 'react'
import { GiCrenelCrown,GiClown } from "react-icons/gi";
import { FaCode } from "react-icons/fa";

import './Staff.scss'
const Staff = () => {
  return (
    <div className='staffContainer'>
        <div className="staffTitle">
          Management Team
        </div>
        <div className="staffMembers">
            <div className="staffMember">
              <div className="staffIconContaier">
                <GiCrenelCrown className="staffIcon"/>
              </div>
            
              <span className="staffName">
                [OWN] AlgarCelGros
              </span>
            </div>
            <div className="staffMember">
            <div className="staffIconContaier">
                <FaCode className="staffIcon"/>
              </div>
            
              <span className="staffName">
                [SA] Bacanation
              </span>
            </div>
            <div className="staffMember">
            <div className="staffIconContaier">
            <GiClown className="staffIcon"/>
              </div>
            
              <span className="staffName">
                [SMD] Kraxxx
              </span>
            </div>
        </div>
        
    </div>
  )
}

export default Staff
