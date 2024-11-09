import React from 'react'
import day from '@/assets/img/icon_one day.png'
import map from '@/assets/img/icon_map.png'
import city from '@/assets/img/icon_city map.png'
import support from '@/assets/img/icon_support.png'
import CardPopular from '../CardPopular/CardPopular'
import bike1 from '@/assets/img/bike1.png'
import bike2 from '@/assets/img/bike2.png'
import bike3 from '@/assets/img/bike3.png'
import taxi from '@/assets/img/taxi.png' 

const Popular = () => {
    const dataPopular=[{
        image:bike1,
        title:'BIKE / RICKSHAW',
        day:day,
        city:city,
        support:support,
        map:map,
        titleDate:"Your bike for a day",
        titleCity:"Discount on Rickshaw",
        titleSupport:'Guaranteed Support',
        titleMap:'City App',
        paragraf:'10',
        span:"€",
        span1:"/day",
    },
    {
        image:bike1,
        title:'BIKE / RICKSHAW',
        day:day,
        city:city,
        support:support,
        map:map,
        titleDate:"Your bike for a day",
        titleCity:"Discount on Rickshaw",
        titleSupport:'Guaranteed Support',
        titleMap:'City App',
        paragraf:'10',
        span:"€",
        span1:"/day",
    },
    {
        image:bike1,
        title:'BIKE / RICKSHAW',
        day:day,
        city:city,
        support:support,
        map:map,
        titleDate:"Your bike for a day",
        titleCity:"Discount on Rickshaw",
        titleSupport:'Guaranteed Support',
        titleMap:'City App',
        paragraf:'10',
        span:"€",
        span1:"/day",
    },
    {
        image:bike1,
        title:'BIKE / RICKSHAW',
        day:day,
        city:city,
        support:support,
        map:map,
        titleDate:"Your bike for a day",
        titleCity:"Discount on Rickshaw",
        titleSupport:'Guaranteed Support',
        titleMap:'City App',
        paragraf:'10',
        span:"€",
        span1:"/day",
    },]
  return (
    <div className='w-full px-250 py-120'>
      <h1 className='text-32 font-extrabold text-black-1'>The Most Popular Packages</h1>
      <div className='mt-60 flex gap-5'>
        {dataPopular.map((item,index)=>{return(
            <CardPopular key={index} image={item.image.src} title={item.title} day={item.day.src} city={item.city.src} support={item.support.src} map={item.map.src} titleDay={item.titleDate} titleCity={item.titleCity} titleSupport={item.titleSupport} titleMap={item.titleMap} paragraf={item.paragraf} span={item.span} span1={item.span1}   />)})}
      </div>
    </div>
  )
}

export default Popular
