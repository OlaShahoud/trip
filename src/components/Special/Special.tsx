import image from '../../assets/img/bg-pink.png'
import about from '@/assets/img/stock-photo.png'
const Special = () => {
  return (
    <div className='bg-Special  relative'>
     <img src={image.src} alt="image" className='w-full' />
     <div className='  flex justify-between w-max  '>
        <div className='absolute top-7 left-0 mx-250 w-569 h-330 text-black z-10  flex flex-col items-center justify-between  bg-pink-1 rounded-3xl p-30'>
            <h1 className='text-32 font-extrabold text-black-1 text-center'>Get Special Offers for Organizations</h1>
            <p className='font-normal text-lg text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            <button className='bg-orange h-47 w-212 flex items-center justify-center rounded-50 '>Contact Us</button>
        </div>
        <div className='absolute bottom-bo right-0 w-max px-250 py-120'><img className=' w-427 h-600' src={about.src} alt="" /></div>
     </div>
    </div>
  )
}

export default Special
