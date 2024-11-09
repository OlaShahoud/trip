
import NavBar from "@/components/NavBar/NavBar";
import Image from "next/image";
import logo from "@/assets/img/logo.png"
import Header from "@/components/Header/Header";
import image from '@/assets/img/homeImage.png'
import Explore from "@/components/Explore/Explore";
import About from "@/components/About/About";
import Special from "@/components/Special/Special";
import Services from "@/components/Services/Services";
import Book from "@/components/Book/Book";
import Popular from "@/components/Popular/Popular";
import Customers from "@/components/Customers/Customers";
import Footer from "@/components/Footer/Footer";
import aboutImage from '@/assets/img/about picture.png'
export default function Home() {
  const title='Enjoy in the best way!'
  const paragraf='Enjoy our services for your trip anytime'
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
    const t1='We are the best company for your visit'
    const p2='After decades of experience, and a whole life in Lucca, we offer you the most complete tourism service in the city. In addition to having bikes and rickshaws to have as much fun as you want, you have the choice of tour guides with whom to tour and drivers for your every need! We offer packages in the way that you get the most at the lowest price. Book with us and we will always be available for you!'
  return (
    <div className="">
      <header><NavBar logo={logo.src} /></header>
      <main className="">
      <Header img={image.src} title={title} paragraf={paragraf} classhome="bg-gray-1 p-5" classabout='hidden' classParagraf="font-bold text-2xl  mt-4 mb-16"/>
      <Explore/>
      <About image={aboutImage.src} dataabout={dataAbout} p1={p1} p2={p2} t1={t1} />
      <Special/>
      <Services/>
      <Book/>
      <Popular/>
      <Customers/>
      </main>
      <footer className=" w-full flex flex-wrap ">
        <Footer/>
      </footer>
    </div>
  );
}
