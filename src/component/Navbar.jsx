import React from 'react'
import { Logo } from '../assets/images'

const Navbar = () => {
  return (
    <>
      <div className='Navbar'>
        <nav className='flex justify-between p-6'>
        <div className='flex items-center'>
          <img src={Logo} alt="" />
          <h1><strong className='text-2xl'>Decepticonf</strong></h1>

        </div>
        <h3 className='text-sky-500'>04-06 of April, 2022 Los Angeles, CA</h3>
        <button className='p-2 hover:bg-sky-800 rounded-2xl bg-sky-500 text-stone-50'>Get your TICKET</button>
        </nav>
      </div>
    </>
  )
}

export default Navbar
