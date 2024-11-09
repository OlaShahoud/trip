import React from 'react'
import Shares from '../Shares/Shares'
import image from '@/assets/img/Lucca.png'
import date from '@/assets/img//icons-date.svg'
import group from '@/assets/img/icon_private tour.svg'
import TourCard from '../TourCard/TourCard'
import wine from '@/assets/img/Wine.png'

const Explore = () => {
    const CardTour=[{
        image:image,
        title:"Lucca Bike Tour",
        paragraf:"from",
        span:"34 €",
        date:date,
        group:group,
        dateTitle:"EVERY DAY",
        groupTitle:"3-10 PP",
        paragraf2:"A tour of the city and its surroundings led by a professional guide ...",
    },
    {
        image:wine,
        title:"Wine tasting In Tuscany",
        paragraf:"from",
        span:"34 €",
        date:date,
        group:group,
        dateTitle:"MONDAY",
        groupTitle:"10-30 PP",
        paragraf2:"The real magic is here where you can enjoy the best Tuscan wine and eat ...",
    },
    {
        image:image,
        title:"Cinque Terre Tour",
        paragraf:"from",
        span:"34 €",
        date:date,
        group:group,
        dateTitle:"TO BE DECIDED",
        groupTitle:"10-50 PP",
        paragraf2:"Visiting the 5 Terre is a must, and you can never go there enough ...",
    },
    {
        image:image,
        title:"Siena and Surroundings",
        paragraf:"from",
        span:"34 €",
        date:date,
        group:group,
        dateTitle:"TO BE DECIDED",
        groupTitle:"5-10 PP",
        paragraf2:"Visit the beautiful Siena and the cities that surround it to experience ...",
    }]
  return (
    <div className='w-full px-250 py-120 '>
        <div className='flex justify-between'>
            <h1 className='text-3xl font-extrabold text-black-1'>Explore Our Popular Destinantions </h1>
        <Shares/>
        </div>
        <div className='flex gap-x-4 mt-60'>
        {CardTour.map((item,index)=>{return(
            <TourCard key={index} image={item.image.src} title={item.title} paragraf={item.paragraf} span={item.span} date={item.date.src} group={item.group.src} dateTitle={item.dateTitle} groupTitle={item.groupTitle}  paragraf2={item.paragraf2} classdate='flex' classparagraf=' mt-3 font-semibold text-lg text-black-1' Card='w-80 h-592' />)})
        }
        </div>
    
    </div>
  )
}

export default Explore
