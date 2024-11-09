import React from 'react'
import Shares from '../Shares/Shares'
import image from '@/assets/img/Ellipse 4.png'
import CardCustomers from '../CardCustomers/CardCustomers'
import { title } from 'process'


const Customers = () => {
    const dataCustomers=[{
        image:image,
        title:'Lyod Gomez',
        paragraf:'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure'},
        {image:image,
        title:'Lyod Gomez',
        paragraf:'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure'}
    ]
  return (
    <div className='w-full px-250 py-120'>
     <div className='flex justify-between'>
            <h1 className='text-3xl font-extrabold text-black-1'>Happy Customers Says </h1>
        <Shares/>
       </div>
       <div className='flex gap-5 mt-60'>
       {dataCustomers.map((items,index)=>{ return(
        <CardCustomers key={index} image={items.image.src } title={items.title} paragraf={items.paragraf}/>
       )})}
       </div>
    </div>
  )
}

export default Customers
