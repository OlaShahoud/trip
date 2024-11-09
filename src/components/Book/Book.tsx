import React from 'react'
import bg from '@/assets/img/bg.png'
import bike from '@/assets/img/bike picture.png'
import down from'@/assets/img/chevron-down.png'
import time from '@/assets/img/time.png'

const Book = () => {
    const dataForm=[{lable:'Name and Surname',
        input:"Enter your name and surname",
        type:"text",
       lable1:' Email Address',
       input1:'Enter your email address',
       type1:"text",
    },
    {lable:'Telephone Number',
        input:"Enter your telephone number",
        type:"text",
        lable1:' Service Type',
         input1:'Select the service types',
         type1:"text",
         icon:down
    },
    {lable:'Date',
        input:"Select the date",
        type:"date",
        lable1:' Time',
        input1:'Select the time',
        type1:"text",
        icon:time
    },
]
  return (
    <div className=' relative'>
      <img src={bg.src} alt="bg" className='w-full' />
      <div className='  flex justify-between w-max  '>
      <div className='absolute top-7 left-0 mx-250 '>
            <h1 className='text-32 font-extrabold text-black-1'>Book Now Bike</h1>
            <div className='  rounded-3xl p-30 bg-pink-1 flex  flex-col items-center'>
                <form className=' '>
                  {dataForm.map((item,index)=>{return(<>
                  <div className='flex gap-2.5 mb-3'>
                <div key={index} className='flex flex-col'>
                  <label className='text-black-1 text-lg font-semibold pb-2' htmlFor={item.input}>{item.lable}</label>
                  <input className='w-318 px-6 h-50 rounded-lg text-base text-black-1 font-normal' id={item.input} type={item.type} placeholder={item.input} />
                  </div> 
                  <div className=' relative flex flex-col w-6/12 '>
                  <label className='text-black-1 text-lg font-semibold pb-2' htmlFor={item.input1}>{item.lable1}</label>
                  <input className='  w-318 px-6 h-50 rounded-lg text-base text-black-1 font-normal' id={item.input1} type={item.type1} placeholder={item.input1} />
                  <img  className={index==0?'':' text-black-1 absolute right-6 top-51  w-4 h-4'} src={item.icon?item.icon.src:''} alt="" />
                  </div>
                  </div>
                  </>)})}
                </form>
            <button className='bg-orange h-47 w-212 flex items-center justify-center rounded-50 '>Book Now</button>
            </div>
        </div>
        <div className='absolute bottom-bo right-0 w-max px-250 py-120'><img className=' w-724 h-542' src={bike.src} alt="" /></div>
      </div>
     
    </div>
  )
}

export default Book
