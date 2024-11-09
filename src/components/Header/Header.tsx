"use client"
import React, { useEffect, useState } from 'react'
import image from '@/assets/img/homeImage.png'
import Public from '@/assets/img/baselinePublic.png'
import Private from '@/assets/img/icon_private tours.svg'
import iconGroup from '@/assets/img/private tours.png'
import chevbottom from '@/assets/img/chevron-down.png'
import line from '@/assets/img/Vector 3.png'
import date from '@/assets/img/iconsClock.png'
import time from '@/assets/img/iconsCalendar.png'
import tour from '@/assets/img/iconTour.png'
import car from '@/assets/img/iconCar.png'
import search from '@/assets/img/iconsSearch.png'
import '@/components/Header/Header.css'
import SignUp from '../SignUp/SignUp'
const Header = ({img,title,paragraf,classhome,classabout,classParagraf}:{img:string,paragraf:string,title:string,classhome:string,classabout:string,classParagraf:string}) => {
  const data=[{
    img:iconGroup,
    title:"Number of people",
    select:"Choose number",
    icon:chevbottom
  },
  {
    img:time,
    title:"Date",
    select:"Choose Date",
    icon:chevbottom
  },
  {
    img:date,
    title:"Time",
    select:"Choose Time",
    icon:chevbottom
  },
  {
    img:tour,
    title:"Tour",
    select:"Select Tour",
    icon:chevbottom
  },
  {
    img:car,
    title:"Transportation",
    select:"Select Transportation",
    icon:chevbottom
  }]
  const dataSignUp=[
    {placeholder:'Enter your name and surname',
        lable:'Name and Surname',
        class:''
    },
    {placeholder:'Enter your email address',
        lable:'Email Address',
        class:''
    },
    {placeholder:'Enter your password',
        lable:'Password',
        class:''
    },]
 
  
    useEffect(() => {
      const  handleShow =()=>{
        if(showPopupSign){
          
        }
      }
     window.addEventListener('click', handleShow);
      return 
    }, []);
  const showPopupSign=localStorage.getItem('SignUp')
  const showPopupLog=localStorage.getItem('login')
  console.log(showPopupSign)
  return (
     <div className={' hero relative'}>
      <img className='img-hero' src={img} alt="Image" />
      <div className='absolute top-73 left-65 z-10 w-max flex flex-col  '>
      <div className=' text-white flex flex-col items-center justify-center'>
        <h1 className='text-7xl font-normal'>{title}</h1>
        <p className={classParagraf}>{paragraf}</p>
      </div>
      <div className={classhome}>
       <div className='flex'>
        <button className='flex p-4 bg-white rounded-tl-xl text-lg  text-orange  items-center font-semibold'><img className='pr-2' src= {Public.src} alt="Public Tours" />Public Tours</button>
        <button className='flex p-4 bg-gray-2 rounded-tr-xl text-white text-lg  items-center font-semibold'><img className='pr-2' src= {Private.src} alt="Public Tours" />Private Tours</button>
       </div>
       <div className='bg-white flex'>
        {data.map((item,index)=>{return(<>
          <div key={index} className='w-max pl-7 pt-4 pb-4'>
         <div className='flex items-center'> 
        <img className='pr-p2' src={item.img.src} alt="img" />
         <p className='text-lg text-black-1 font-semibold'>{item.title}</p>
         </div>
          <p className='flex items-center pt-1.5 pl-5 text-lg font-normal text-black-1 opacity-80'>{item.select}<img className='pl-5' src={item.icon.src} alt="icon" /></p>
         </div> 
         <img className='pt-5 pb-5 pl-5 ' src={line.src} alt="line" />
         </>)})}
         <button className='flex items-center justify-center rounded-xl border-0  bg-orange mt-4 mb-4 mr-2 w-20 h-20'> <img src={search.src} alt="search" /></button>
       </div>
      </div>
      <div className={classabout}><button className='text-xl font-semibold flex justify-center items-center py-3.5 px-6 text-white border border-white rounded-50'>View our Tour Packages</button></div>
      </div>
      {showPopupSign=='true'?
      <SignUp title='Create Account' input=''  btn1='Sign Up' btn2='Sign Up with Google' id='SignUp' forget='hidden' p2='Log In'  dataSignUp={dataSignUp} classAgree='' classAll=''/>
      :
      <SignUp  classAll='hidden'classAgree='' input='' title='' btn1='' btn2='' id='' forget='' p2=''  dataSignUp={dataSignUp}/>
      }
        {showPopupLog=='true'?
      <SignUp title='Login'  btn1='Sign in' input='hidden' btn2='Sign in with Google' id='Signin' forget='' p2='Sign Up'  dataSignUp={dataSignUp} classAgree='hidden' classAll=''/>
      :
      <SignUp  classAll='hidden'classAgree='' input='hidden' title='' btn1='' btn2='' id='' forget='' p2=''  dataSignUp={dataSignUp}/>
      }
    </div>

  )
}

export default Header