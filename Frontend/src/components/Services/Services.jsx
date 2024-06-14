import React from 'react'
import {FaCarSide,FaHeadphonesAlt,FaWallet,FaCheckCircle} from "react-icons/fa";

const ServiceData=[
  {
    id:1,
    icon:<FaCarSide className="text-4xl md:text-5xl text-primary"/>,
    title:"Free Shipping",
    description:"Free Shipping on All Order",
  },
  {
    id:2,
    icon:<FaHeadphonesAlt className="text-4xl md:text-5xl text-primary"/>,
    title:"SafE Mony",
    description:"30 Days Mony Back",
    },
  {
    id:3,
    icon:<FaWallet className="text-4xl md:text-5xl text-primary"/>,
    title:"Secure Payment",
    description:"All Payment Secure",
  },
  {
    id:4,
    icon:<FaCheckCircle className="text-4xl md:text-5xl text-primary"/>,
    title:"24/7 Support",
    description:"Technical Support 24/7",
  }
]

function services() {
  return (
    <div>
      <div className='container mt-10 md:mt-10'>
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8'>
             { ServiceData.map ((data)=>(
                 <div className=' flex flex-col items-start sm:flex-row gap-4  '>
                  {data.icon}
                  <div>
                  <h1 className='lg:text-xl  font-bold dark:text-white duration-200 '>{data.title}</h1>
                  <h1 className='text-gray-500 text-sm'>{data.description}</h1>
                  </div>
                 </div>
             ))
             }    
          </div>
      </div>
    </div>
  )
}

export default services