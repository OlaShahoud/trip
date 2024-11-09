import aboutImage from '@/assets/img/about picture.png'


const About = ({image,dataabout,p1,t1,p2}:{image:string,dataabout:Array<string|object|any>,p1:string,t1:string,p2:string}) => {
  let dataAbout = dataabout
  return (
    <div className='flex w-full px-250 py-120 justify-between items-center'>
      <div className='w-450'>
        <img src={image} alt="aboutImage" />
      </div>
      <div className='w-700 '>
      <p className='text-black-1 text-base font-semibold'>{p1}</p>
      <h1 className='text-black-1 font-extrabold text-32 mt-1.5 mb-8'>{t1}</h1>
      <p className='text-lg font-normal text-black-1 mb-8'>{p2}</p>
      <div className='flex gap-12'>
       {dataAbout.map((item,index)=>{return(
        <div key={index} className='w-min'>
        <p className='font-bold text-xl text-orange'>{item.number}</p>
        <p className='font-normal text-base text-black-1'>{item.paragraf}</p>
       </div>)})}
      </div>
      </div>
    </div>
  )
}

export default About
