import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
        <nav className='nav-bar w-full py-6 bg-gray-100 cursor-pointer sticky top-0 z-50'>
          <div className='container  flex justify-between items-center'>
            <h1><Link to={''}>START FRAMEWORK</Link></h1>
            <ul className='flex justify-between gap-6'>
                <li><NavLink to={'/about'} className='NavLink'>ABOUT</NavLink></li>
                <li><NavLink to={'/portfolio'} className='NavLink'>PORTFOLIO</NavLink></li>
                <li><NavLink to={'/contact'} className='NavLink'>CONTACT</NavLink></li>
            </ul>
          </div>
        </nav>
    </>
  )
}
