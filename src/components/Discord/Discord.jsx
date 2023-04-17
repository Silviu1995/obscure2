import React from 'react'
import { Icon } from '@iconify/react';
import './Discord.scss'
const DiscordLogo = () => {
  return (
    <div className="discordContainer">
      <div className="discordLogo">
        <Icon className='discordIcon' icon="simple-icons:discord" />
        <span className="discordName">DISCORD</span>
      </div>
      <button className='discordButton'>Join Us</button>
      <div className="discordServer">
        Obscure 2 Server
      </div>
    </div>
    

    
  )
}

export default DiscordLogo
