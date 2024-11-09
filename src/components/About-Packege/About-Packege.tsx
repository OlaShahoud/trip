import bg from '@/assets/img/bg-pink.png'
import map from '@/assets/img/iconmap.png'
import bestPrice from '@/assets/img/icon_best price.png'
import guide from '@/assets/img/icon_guide.png'
import experience from '@/assets/img/icon_experience.png'

const AboutPackege = () => {
    const data=[
    {img:map,
    title:"Complete Packages For All Your Wishes"
    },
    {img: experience,
    title:"Over 30 Years Of Experience"
    },
    {img:guide,
    title:"Expert Guides For You"
    },
    {img:bestPrice,
    title:"Guaranteed fun at the best price!"
    },
]
  return (
    <div className=''>
        <div className='relative  '>
            <img src={bg.src} alt="" />
            <div className=' px-250 py-120 w-full flex  justify-between items-center absolute top-1 left-0 '>
          {data.map((item,index)=>{return(<div className=' w-292 h-189 bg-pink-1 flex flex-col items-center justify-between p-30 rounded-3xl'>
            <img src={item.img.src} alt="image" />
            <p className='text-xl font-semibold'>{item.title}</p>
          </div>)})}
            </div>
        </div>
      
    </div>
  )
}

export default AboutPackege
