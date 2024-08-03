import React from 'react'

export default function About() {
  return (
      <div className='about py-24  text-white'>
        <div className="container py-20">
        <h1 className='text-center md:text-4xl text-xl'>ABOUT COMPONENT</h1>
        <div className='shape m-auto flex justify-center items-center my-3'>
          <div className='bg-white h-1 w-20'></div>
          <i className="fa-solid fa-star text-white mx-4"></i>
          <div className='bg-white h-1 w-20'></div>
       </div>
       <div className="info grid md:grid-cols-2 gap-3 mt-10 text-center">
        <p className='my-3'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        <p className='my-3'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
       </div>
        </div>
      </div>
  )
}
