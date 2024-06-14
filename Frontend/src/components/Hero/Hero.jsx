import React from 'react'
import Slider from "react-slick";
import img1 from "../../assets/hero/headphone.png";
import img2 from "../../assets/category/macbook.png";
import img3 from "../../assets/category/vr.png";
import Button from "../../components/Shared/Button"

const HeroData=[
  {
    id:1,
    img:img1,
    subtitle:"Beats solo",
    title:"wireless",
    title2:"headphone",
  },
  {
    id:2,
    img:img2,
    subtitle:"Beats solo",
    title:"wireless",
    title2:"headphone",
    
  },
  {
    id:3,
    img:img3,
    subtitle:"Beats solo",
    title:"wireless",
    title2:"headphone",
    
  },
]

function Hero({handleOrderPopup}) {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className='container '>
        <div  className='overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] hero-bg-color flex justify-center items-center '>

          <div className='container ph-8 sm:pb-0'>
          {/*Hero section*/}
            <Slider {...settings}>
              {
                HeroData.map((data)=>(
                  <div key={data.id}>
                    <div className='grid grid-cols-1 sm:grid-cols-2'>
                      {/* Text content*/}
                      <div className='flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
                        <h1 data-aos="zoom-out"
                            data-aos-duration="500"
                            data-aos-once="true" className='text-2xl sm:text-6xl lg:text-2xl font-bold'>{data.subtitle}</h1>
         
                        <h1  data-aos="zoom-out"
                            data-aos-duration="500"
                            data-aos-once="true" className='text-5xl sm:text-6xl  lh:tet-7xl font-bold'>{data.title}</h1>

                        <h1 data-aos="fade-up"
                            data-aos-duration="500"
                            data-aos-once="true"  className='text-5xl uppercase text-white dark;text-white/5 sm:text-[80px]  md:text-[100px] xl:text-[150] font-bold'>{data.title2}</h1>

                        <div>
                          <Button text="Shop Now" bgColor="bg-primary" textColor="text-white" handleOrderPopup={handleOrderPopup} />
                        </div> 
                      </div>

                      {/* Image content*/}
                      <div className='order-1 sm:order-2'>
                        <div data-aos="zoom-in"
                            data-aos-once="true"
                            className=" relative z-10" >
                        <img src={data.img} alt=""  className='w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] sm:scale-105 lg:scale-110 object-contain mx-auto drop-shedow-[-8px_4px_6px_rgba(0,0,0,4)]'/>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                ))
              }
            </Slider>   
          </div>        
        </div>

    </div>
  )
}

export default Hero