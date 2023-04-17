import React from 'react'
import Status from '../../components/Status/Status'
import Login from '../../components/Login/Login'

import './Home.scss'
import Main from '../../components/Main/Main'
import Staff from '../../components/Staff/Staff'
import Discord from '../../components/Discord/Discord'
const Home = () => {
  return (
    <div className='homeContainer'>
    <div className="left">
     <Login/>
     <Status/>
    </div>
    <div className="center">
      <Main/>
    </div>
    <div className="right">
      <Staff/>
      <Discord/>
    </div>
    </div>
    
  )
}

export default Home
