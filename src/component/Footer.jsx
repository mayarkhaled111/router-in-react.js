import React from 'react'

export default function Footer() {
  return (
    <>
        <div className='footer text-white flex items-center'>
        <div className="container flex justify-between  ml-28">
            <div className='location text-center'>
                <h1>LOCATION</h1>
                <p>2215 John Daniel Drive</p>
                <span>Clark, MO 65243</span>
            </div>
            <div className='text-center'>
                <h1>AROUND THE WEB</h1>
                <ul className='flex gap-3 justify-center'>
                    <li><i className="fa-brands fa-facebook"></i></li>
                    <li><i className="fa-brands fa-twitter"></i></li>
                    <li><i className="fa-brands fa-linkedin-in"></i></li>
                    <li><i className="fa-solid fa-globe"></i></li>
                </ul>
            </div>
            <div className='text-center'>
                <h1>ABOUT FREELANCER</h1>
                <p>Freelance is a free to use, licensed Bootstrap <br/>theme created by Route</p>
            </div>
        </div>
    </div>
        <div className='copy p-4 text-center'>Copyright © Your Website 2021</div>
    </>
  )
}
