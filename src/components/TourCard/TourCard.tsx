import React from 'react'
interface CardTour{
    image:string,
    title:string,
    paragraf:string,
    span:string,
    date:string,
    group:string,
    dateTitle:string,
    groupTitle:string,
    paragraf2:string,
    classdate:string,
    classparagraf:string,
    Card:string,
    
}
const TourCard = ({image,title,paragraf,span,date,group,dateTitle,groupTitle,paragraf2,classdate,classparagraf,Card}:CardTour) => {
  return (
    <div className={Card}>
      <div className='rounded-3xl'>
        <img src={image} alt="image" />
      </div>
      <h1 className=' mt-4 text-2xl font-bold text-black-1'>{title}</h1>
      <p className={classparagraf}> {paragraf}<span className='ml-2.5 text-2xl font-extrabold text-orange'>{span}</span></p>
      <div className='my-3 flex justify-between text-orange '>
       <div className={classdate}> 
        <img src={date} alt="Date" />
       <p className='ml-1.5 font-semibold text-base' >{dateTitle}</p>
       </div>
       <div className={classdate}>
       <img src={group} alt="Group" />
       <p className='ml-1.5 font-semibold text-base'>{groupTitle}</p>
       </div>
      </div>
      <p className='text-lg font-normal text-black-1'>{paragraf2}</p>
    </div>
  )
}

export default TourCard

