import React from 'react'

import img6 from "../../assets/category/vr.png";
import img4 from "../../assets/category/speaker.png";
import img5 from "../../assets/category/gaming.png";

import Button from '../Shared/Button';
function Category2() {
  return (
    <div className='py-8 '>
        <div className='container '> 
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 '>
             {/* third col*/}
             <div className=' sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-600/90  to-gray-300/70 text-white rounded-3xl relative h-[320px] flex  items-end  '>
                <div className='space-y-3'>
                    <div className=' mb-4'>
                        <p className=' text-'>Enjoy</p>
                        <p className='text-2xl  font-semibold mb-[2px]'>With</p>
                        <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Gaming</p>
                        <Button text="Browser" bgColor={"bg-primary"} textColor={"text-white"} />
                    </div>
                </div>
                    <img src={img5} alt="" className='w-[320px] absolute top-1/2 -right-0 -translate-y-1/2 '/>
            </div>
            {/* first col*/}
            <div className=' py-10 pl-5 bg-gradient-to-br from-green-900/80  to-green-500/60 text-white rounded-3xl relative h-[320px] flex  items-start overflow-hidden '>
                <div>
                    <div className=' mb-4'>
                        <p className='mb-[2px]  text-gray-400'>Enjoy</p>
                        <p className='text-2xl  font-semibold mb-[2px]'>With</p>
                        <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Gadget</p>
                        <Button text="Browser" bgColor={"bg-white"} textColor={"text-green-600"} />
                    </div>
                </div>
                    <img src={img6} alt="" className='w-[300px] absolute bottom-0'/>
            </div>
            {/* second col*/}
            <div className=' py-10 pl-5 bg-gradient-to-br from-blue-900/90  to-blue-400/70 text-white rounded-3xl relative h-[320px] flex  items-start overflow-hidden  '>
                <div className=' mb-4'>
                    <div className=' mb-4'>
                        <p className='mb-[2px]  text-gray-400'>Enjoy</p>
                        <p className='text-2xl  font-semibold mb-[2px]'>With</p>
                        <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>music</p>

                        <Button text="Browser" bgColor={"bg-white"} textColor={"text-blue-600"} />
                    </div>
                </div>
                    <img src={img4} alt="" className='w-[300px] absolute bottom-0  '/>
            </div>
           
          </div>
        </div>
    </div>
  )
}

export default Category2