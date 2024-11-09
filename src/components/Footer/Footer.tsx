import React from 'react'
import logo from '@/assets/img/logo.png' 
import location from '@/assets/img/ci_location.png'
import phone from '@/assets/img/clarity_phone-handset-solid.png'
import mail from '@/assets/img/fluent_mail-16-filled.png'
import Twitter from '@/assets/img/twitter.png' 
import facebook from '@/assets/img/facebook.png'
import instagram from '@/assets/img/instagram.png'
const Footer = () => {
    const footer1=[
    'Bike and Rickshaw rental',
    'Guided Tours of Lucca',
    'Guided Bike Tour of Lucca',
    'Trip In The Tuscan Hills',
    'Transportation With Luxury Cars',
    'Wine Tours By Bus With Guide',
]
const footer2=['Home','About Us','Tour Packages']
const footer3=['Terms of Use','Provicy Policy']
const footer4=[
{
title:'Piazza Napoleone, Lucca, Tuscany',
img:location
},
{ title:'+39 346 368 5708',
    img:phone},
{ title:'italiainlimo@gmail.com',
   img:mail},
]

const footer5=[Twitter,facebook,instagram]
  return (
    <div className='w-full px-250 py-10 bg-black-1 text-white '>
      <div className='pb-33 w-full border-b border-white-1 '>
        <img src={logo.src} alt="logo" />
      </div>
      <div className='flex justify-between py-33 border-b border-white-1'>
        <div className=''>
            <h1 className='text-xl font-extrabold text-white'>Services</h1>
            <ul  className='font-semibold text-white text-lg '>
                {footer1.map((item,index)=>{return(<li key={index} className={index==0?"mt-5 mb-2.5": index==5?'':"mb-2.5"}>{item}</li>)})}
            </ul>
        </div>
        <div>
        <h1 className='text-xl font-extrabold text-white'>Home</h1>
        <ul className='font-semibold text-white text-lg gap-x-2.5'>
        {footer2.map((item,index)=>{return(<li className={index==0?"mt-5 mb-2.5": index==2?'':"mb-2.5"} key={index}>{item}</li>)})}
        </ul>
        </div>
        <div>
        <h1 className='text-xl font-extrabold text-white'>Help</h1>
        <ul className='font-semibold text-white text-lg'>
        {footer3.map((item,index)=>{return(<li className={index==0?"mt-5 mb-2.5": index==1?'':"mb-2.5"} key={index}>{item}</li>)})}
        </ul>
        </div>
        <div>
        <h1 className='text-xl font-extrabold text-white'>Contacts</h1>
        <ul className='font-semibold text-white text-lg'>
        {footer4.map((item,index)=>{return(<li className={index==0?" flex mt-5 mb-2.5 ": index==3?'flex ':" flex mb-2.5 "}  key={index}><img className='mr-2.5' src={item.img.src} alt="Contacts" />{item.title}</li>)})}
        </ul>
        </div>
        <div>
        <h1 className='text-xl font-extrabold text-white mb-5'>Social Media</h1>
        <ul className='flex gap-5 '>
        {footer5.map((item,index)=>{return(<li key={index}><img src={item.src} alt="Social Media" /></li>)})}
        </ul>
        </div>
      
      </div>
      <div className='w-full'><h2 className='text-white-1 font-normal text-base text-center pt-33'>Copyright © 2022.  All rights reserved.</h2></div>
    </div>
  )
}

export default Footer
