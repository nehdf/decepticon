import React from 'react'
import { dianna_guilianelli, erhrat_cockrin1, jaquelin_isch, ronni_cantador, steven_mchail, Pakerjohnson } from '../../assets/images'

const Interviews = () => {
  return (
        <div className='grid grid-cols-3 gap-4 p-10'>
          <div>
            <img src={erhrat_cockrin1} alt="" />
            <h2>erhrat cockrin</h2>
          </div>
          <img src={dianna_guilianelli} alt="" />
          <img src={jaquelin_isch} alt="" />
          <img src={ronni_cantador} alt="" />
          <img src={steven_mchail} alt="" />
          <img src={Pakerjohnson}/>
        </div>
  )
}

export default Interviews
