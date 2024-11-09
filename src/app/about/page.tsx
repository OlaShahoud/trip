import NavBar from '@/components/NavBar/NavBar'
import React from 'react'
import logo from "@/assets/img/logo.png"
import Header from '@/components/Header/Header'
import image from '@/assets/img/about-page.png'
import About from '@/components/About/About'
import aboutImage from '@/assets/img/About2.png'
import Customers from '@/components/Customers/Customers'
import Footer from '@/components/Footer/Footer'
import AboutPackege from '@/components/About-Packege/About-Packege'
const page = () => {
  const title='Our team cares about your full relax'
  const paragraf='But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.'
  const dataAbout=[
    {number:'20+',
    paragraf:'Years Experience'
    },
    {number:'100+',
    paragraf:'Happy Customer'
    },
    {number:'15+',
    paragraf:'Choice of Services'
    },
    {number:'10+',
    paragraf:'Professional Guides'
    },]
    const p1='WELCOME TO OUR SITE!'
    const t1='We Are The Center Of Lucca To Offer You The Best'
    const p2='We are right in the center of Lucca to offer you the real city life! With years of experience in practically every tourism sector, with us you can find complete packages at the lowest price, to travel and learn and have fun all without worries and without stress. What are you waiting for, book a bright evening, a trip to beautiful Tuscany or a personal tour for you!'
  return (
    <div>
   <header><NavBar logo={logo.src}/></header>
   <main> <Header img={image.src} title={title} paragraf={paragraf} classhome='hidden' classabout=' flex justify-center items-center ' classParagraf='w-734 font-bold text-2xl  mt-4 mb-16'/>
   <About image={aboutImage.src} dataabout={dataAbout} p1={p1} p2={p2} t1={t1} />
   <AboutPackege/>
   <Customers/>
   </main>
   <footer className=" w-full flex flex-wrap ">
    <Footer/>
   </footer>
    </div>
  )
}

export default page
