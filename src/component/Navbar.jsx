import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  let [open , setOpen] = useState(false)
  function toggle() {
    setOpen(!open)
  }
  return (
    <>
        <nav className='nav-bar w-full  bg-gray-100 cursor-pointer sticky top-0 z-50 '>
          <div className="container relative py-3">
          <div className='md:flex justify-between items-center'>
            <h1 className='md:text-3xl text-xl'><Link to={''}>START FRAMEWORK</Link></h1>
            <ul className={`py-4 md:flex justify-between gap-6 ${open?'block':'hidden'}`}>
                <li className='my-3'><NavLink to={'/about'} className='NavLink'>ABOUT</NavLink></li>
                <li className='my-3'><NavLink to={'/portfolio'} className='NavLink'>PORTFOLIO</NavLink></li>
                <li className='my-3'><NavLink to={'/contact'} className='NavLink'>CONTACT</NavLink></li>
            </ul>

          </div>
          <i onClick={toggle} className="sm:visible md:invisible fa-solid fa-bars fa-2xl absolute top-6 right-12" style={{color: '#ffffff'}} />
          </div>
        </nav>
        
    </>
  )
}
