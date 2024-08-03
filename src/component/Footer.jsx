import React from 'react'

export default function Footer() {
  return (
    <>
        <div className='footer text-white flex items-center py-3'>
        <div className="container grid md:grid-cols-3 gap-3 ">
            <div className='location text-center my-3'>
                <h1 className='md:text-4xl text-xl'>LOCATION</h1>
                <p>2215 John Daniel Drive</p>
                <span>Clark, MO 65243</span>
            </div>
            <div className='text-center my-3'>
                <h1 className='md:text-4xl text-xl'>AROUND THE WEB</h1>
                <ul className='flex gap-3 justify-center'>
                    <li><i className="fa-brands fa-facebook"></i></li>
                    <li><i className="fa-brands fa-twitter"></i></li>
                    <li><i className="fa-brands fa-linkedin-in"></i></li>
                    <li><i className="fa-solid fa-globe"></i></li>
                </ul>
            </div>
            <div className='text-center my-3'>
                <h1 className='md:text-4xl text-xl'>ABOUT FREELANCER</h1>
                <p>Freelance is a free to use, licensed Bootstrap <br/>theme created by Route</p>
            </div>
        </div>
    </div>
        <div className='copy p-4 text-center'>Copyright © Your Website 2021</div>
    </>
  )
}
