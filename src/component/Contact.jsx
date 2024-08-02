import React, { useState } from 'react'

export default function Contact() {
  
  function showLabel(e){
    e.target.previousSibling.classList.replace('first-change','changes')
  }

  return (
    <div className="contact mt-10">
      <div className="container">
        <h1 className='text-center'>CONTACT COMPONENT</h1>
        <div className='shape m-auto flex justify-center items-center my-3'>
          <div className='h-1 w-20'></div>
          <i className="fa-solid fa-star mx-4"></i>
          <div className='h-1 w-20'></div>
        </div>
        <div className="form my-12 m-auto w-2/3">
          <form action="" className=''>

            <div className="form-group relative mb-3">
              <label htmlFor="" className='first-change'>userName</label>
              <input type="text" placeholder='userName' className='relative top-0 left-0 mb-6 p-3 border-b-2 w-full focus:outline-none inline-block' onChange={showLabel}/>
            </div>
            <div className="form-group relative mb-3">
              <label htmlFor="" className='first-change'>userAge</label>
              <input type="text" placeholder='userAge' className='relative top-0 left-0 mb-6 p-3 border-b-2 w-full focus:outline-none inline-block' onChange={showLabel}/>
            </div>
            <div className="form-group relative mb-3">
              <label htmlFor="" className='first-change'>userEmail</label>
              <input type="email" placeholder='userEmail' className='relative top-0 left-0 mb-6 p-3 border-b-2 w-full focus:outline-none inline-block' onChange={showLabel}/>
            </div>
            <div className="form-group relative ">
              <label htmlFor="" className='first-change'>userPassword</label>
              <input type="password" placeholder='userPassword' className='relative top-0 left-0 mb-6 p-3 border-b-2 w-full focus:outline-none inline-block' onChange={showLabel}/>
            </div>
            <button className='text-white p-2 my-5 rounded-md' type='button'>send Message</button>
          </form>
        </div>
      </div>
    </div>
  )
}
