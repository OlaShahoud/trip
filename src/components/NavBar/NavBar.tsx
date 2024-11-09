"use client"
import React, { useEffect, useState } from 'react' 
import '@/components/NavBar/NavBar.css'
import Link from 'next/link'
import SignUp from '../SignUp/SignUp'

const NavBar = ({logo}:{logo:string}) => {
    const DataItem =[{name:'Home',href:''},{name:'About Us',href:'about'},{name:'Tour Packages',href:'Tour'},{name:'Contact Us',href:'contact'}]
    const select =['Eng','Arabic']
    const btn =['Login','Sign Up']
    const [showPopupSign, setShowPopupSign] = useState(false);
    const [showPopupLog, setShowPopupLog] = useState(false);
    const [bgColor,setBgColor]=useState(true)
    useEffect(() => {
      const  handlebg =()=>{
        if(window.scrollY>900){
          setBgColor(!bgColor)
        }
      }
    window.addEventListener('scroll', handlebg);
    window.addEventListener('click',handleClick);
    window.addEventListener('click',handleClick1);

      return 
    }, []);
    console.log(showPopupLog)
    localStorage.setItem('SignUp',`${showPopupSign}`)
    localStorage.setItem('login',`${showPopupLog}`)
    const handleClick=()=>{
      setShowPopupSign(!showPopupSign)
      localStorage.setItem('SignUp',`${showPopupSign}`)}
      const handleClick1=()=>{
        setShowPopupSign(!showPopupLog)
        localStorage.setItem('SignUp',`${showPopupLog}`)}

return (
    <div className={`fixed z-10  w-full px-250 py-5 flex justify-between items-center text-white ${bgColor?'bg-gray-1':'bg-black'} font-semibold text-xl`}>
        <img src={logo} alt="logo"/>
       <ul className='flex'>
        {DataItem.map((item,index)=>{return(<li  key={index}  className='m-10'><Link href={`/${item.href}`}>{item.name}</Link></li>)})}
       </ul>
       <div className=''>
        <select name="Eng" id="" className='bg-transparent '>
        {select.map((element,index)=>{return(<option className='bg-black ' key={index}>{element}</option>)})}
        </select>
        {btn.map((element, index)=>{return(<button className={index==0?'mx-2.5 ':'bg-orange rounded-50 py-2.5 px-6'} onClick={index==1?()=>handleClick():() => handleClick1()} key={index}>{element}</button>)})}
       </div>
      
    </div>
  )
}

export default NavBar
