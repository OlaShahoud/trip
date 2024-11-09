import React from 'react'
import bike from '@/assets/img/bike.png'
import guided from '@/assets/img/guided.png'
import bus from '@/assets/img/Bus.png'
import taxi from '@/assets/img/taxi.png'
import TourCard from '../TourCard/TourCard'


const Services = () => {
const dataServices=[{
        image:bike,
        title:"Bike and rickshaw rental",
        paragraf2:"Book your quality vehicle quickly for an hour or all day!",
    },
    {
        image:guided,
        title:"Guided tour of the countryside",
        paragraf2:"Live the real Lucchese experience by visiting the suburbs by bike!",
    },
    {
        image:bus,
        title:"Taxi and NCC service",
        paragraf2:"Do you need not only a bike but also a driver? Then you have found the right place!",
    },
    {
        image:taxi,
        title:"Bus Package",
        paragraf2:"Do you need not only a bike but also a driver? Then you have found the right place!",
    }]
  return (
    <div className='flex gap-4 px-250 pt-120 pb-8'>
      {dataServices.map((items,index)=>{return(
        <TourCard image={items.image.src}title={items.title} paragraf='' span='' date='@/assets/img//icons-date.svg' group='@/assets/img//icons-date.svg' dateTitle='' groupTitle='' paragraf2={items.paragraf2} classdate='hidden' classparagraf='hidden' Card='w-80 h-450' />
      )})}
    </div>
  )
}

export default Services
