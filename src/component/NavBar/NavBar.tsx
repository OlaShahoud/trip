import Image from "next/image";
import'../NavBar/NavBar.css'
const NavBar = ({logo}:{logo:string}) =>  {
    const itemNav= ["Home","About Us","Tour Packages","Contact Us"]
    const language=["Eng","Arabic"]
  return (
   <>
    <div className=' Navbar flex justify-between items-center w-screen'>
    <div className=""> 
    <Image
            aria-hidden
            src ={logo}
            alt="File icon"
            width={80}
            height={16}

          />
    </div>
    <ul className=" flex ">{itemNav.map((element,index)=>{return(<li className="margin m-2 gap-y-1.5"  key={index}>{element}</li>)})}
    </ul>
    <div className=" flex-auto w-64">
    <select name="Eng" id="" className="w-3/12">
    {language.map((item,index)=>{return(<option key={index} value={item}>{item}</option>)})}
    </select>
    </div>
</div>

    </>
  )
}

export default NavBar
