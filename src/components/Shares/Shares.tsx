import left from '@/assets/img/arrow-left.svg'
import right from '@/assets/img/arrow-right.svg'

const Shares = () => {
    const Shares=[{img:left},
        {img:right}]
  return (
    <div className='flex'>
        {Shares.map((element,index)=>
        {return(
            <button className={` w-50 h-50 flex items-center justify-center rounded-50 ${index==0?'mr-5 bg-gray-3 ':'bg-orange  '}`} key={index}><img src={element.img.src} alt="arrow" /></button>
        )})}
      
    </div>
  )
}

export default Shares
