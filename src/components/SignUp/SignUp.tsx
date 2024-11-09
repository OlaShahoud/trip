"use client"
import React, { useState } from 'react'
 import exit from '@/assets/img/exit.png'
 import google from '@/assets/img/grommet-icons_google.png'
 import eye from '@/assets/img/ant-design_eye-invisible-filled.png'
import Link from 'next/link'
interface signup{
    title:string,
    classAll:string,
    classAgree:string,
    btn1:string,
    btn2:string,
    id:string,
    forget:string,
    p2:string,
    dataSignUp:Array<string|object|any>,
    input:string
}
const SignUp = ({title,classAll,classAgree,btn1,btn2,id,forget,p2,dataSignUp,input}:signup) => {
  const dataSignUpp=dataSignUp
  const [showPopup, setShowPopup] = useState(false);
  localStorage.setItem('pop',`${showPopup}`)
 
  return (
    <div id={id}className={` fixed w-full h-full top-0 flex flex-col left-0 justify-center items-center bg-bg-black z-10 ${classAll}`}>
    <div className='w-488 h-674 bg-white rounded-3xl px-59 py-10'>
    <div className='flex justify-between pb-5'>
      <h1 className='text-32 font-bold text-black-1 '>{title}</h1>
      <img className='h-6 w-6' src={exit.src} alt="" onClick={()=>{setShowPopup(false)}} />
      </div>
      <div>
        {dataSignUpp.map((item,index)=>{return(
        <div key={index} className={`relative flex flex-col ${index==0?`${input}`:``}`}>
          <label  className="text-lg font-semibold" htmlFor={item.lable}>{item.lable}</label>
          <input className={`border border-gg rounded-lg py-3.5 px-6 text-base font-normal text-gg mt-2.5 mb-5 `} type="text" id={item.lable}  placeholder={item.placeholder} />
          <img  className={index==2?'absolute bottom-8 right-3':'hidden'} src={eye.src} alt="eye" />
        </div>)})}
      </div>
     <p className={` ${forget} flex w-full justify-end`}>Forgot your password?</p>
      <div className={`flex ${classAgree}`}>
      <input type='checkbox' />
      <p>I agree with<span className='text-orange'>Terms</span>and<span className='text-orange'>Privacy</span></p>
      </div>
      <div>
        <button className='h-47 bg-orange rounded-3xl'>{btn1}</button>
        <p>or</p>
        <button className='text-black-1 flex border'><img src={google.src} alt="google" />{btn2}</button>
      </div>
      <div>
        <p> Already have an account? <Link className='text-orange' href='#login'>{p2}</Link>  </p>
       
      </div>

    </div>
    </div>
  )
}

export default SignUp
