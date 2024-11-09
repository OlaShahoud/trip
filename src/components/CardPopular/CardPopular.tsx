
interface CardPopular{
 image:string ,title:string, day:string ,city:string,support:string,map:string,titleDay:string,titleCity:string,titleSupport:string,titleMap:string,paragraf:string,span:string,span1:string,
}
const CardPopular = ({ image ,title, day ,city,support,map,titleDay,titleCity,titleSupport,titleMap,paragraf,span,span1,}:CardPopular) => {
  return (
    <div className="w-340 h-809 border border-EFEFEF rounded-3xl">
      <img src={image} alt="image" />
      <div className="p-6">
      <h1 className="text-xl font-extrabold text-black-1  pb-4">{title}</h1>
      <p className=" pl-4 relative font-bold text-5xl text-orange"><span className="absolute top-0 left-22 text-xl font-normal text-black-1">{span}</span>{paragraf}<span  className="text-black-1 font-normal text-lg pl-4">{span1}</span></p>
      <div className="flex pt-4 pb-8">
        <img src={day} alt="day" />
        <p className="pl-4 text-lg font-normal text-black-1">{titleDay}</p>
      </div>
      <div className="flex pb-8 ">
        <img src={map} alt="map" />
        <p className="pl-4 text-lg font-normal text-black-1">{titleMap}</p>
      </div>
      <div className="flex pb-8 ">
        <img src={city} alt="city" />
        <p className="pl-4 text-lg font-normal text-black-1">{titleCity}</p>
      </div>
      <div className="flex ">
        <img className="w-6 h-6" src={support} alt="support" />
        <p className="pl-4 text-lg font-normal text-black-1 pb-8">{titleSupport}</p>
      </div>
      <button className=' border border-orange h-50 w-290 flex items-center justify-center rounded-50 '>Book Now</button>
      </div>
    </div>
  )
}

export default CardPopular
