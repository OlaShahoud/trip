import React from 'react'
interface Customers{
    image:string,title:string,paragraf:string
}
const CardCustomers = ({image,title,paragraf}:Customers) => {
  return (
    <div className=' border border-EFEFEF rounded-3xl px-30'>
        <div className='flex items-center justify-center pt-30'><img src={image} alt="image" /></div>
        <h1 className='text-center pb-30 pt-15 text-lg font-normal text-black-1'>{title}</h1>
        <p className='pb-30 text-lg font-normal text-black-1'>{paragraf}</p>
    </div>
  )
}

export default CardCustomers
