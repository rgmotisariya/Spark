import React from 'react'
import img1 from "../../assets/category/earphone.png";
import img3 from "../../assets/category/macbook.png";
import img2 from "../../assets/category/watch.png";
import Button from '../Shared/Button';
function Category() {
  return (
    <div className='py-8 '>
        <div className='container '> 
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 '>
            {/* first col*/}
            <div className=' py-10 pl-5 bg-gradient-to-br from-black/90  to-black/70 text-white rounded-3xl relative h-[320px] flex  items-end '>
                <div>
                    <div className=' mb-4'>
                        <p className='mb-[2px]  text-gray-400'>Enjoy</p>
                        <p className='text-2xl  font-semibold mb-[2px]'>With</p>
                        <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Earphone</p>
                        <Button text="Browser" bgColor={"bg-primary"} textColor={"text-white"} />
                    </div>
                </div>
                    <img src={img1} alt="" className='w-[320px] absolute bottom-0'/>
            </div>
            {/* second col*/}
            <div className=' py-10 pl-5 bg-gradient-to-br from-tertiary/90  to-tertiary/90 text-white rounded-3xl relative h-[320px] flex  items-end '>
                <div>
                    <div className=' mb-4'>
                        <p className='mb-[2px]  text-gray-400'>Enjoy</p>
                        <p className='text-2xl  font-semibold mb-[2px]'>With</p>
                        <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Gadget</p>

                        <Button text="Browser" bgColor={"bg-white"} textColor={"text-tertiary"} />
                    </div>
                </div>
                    <img src={img2} alt="" className='w-[320px] absolute -right-9 lg:top-[40px]'/>
            </div>
            {/* third col*/}
            <div className=' sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-primary/90  to-primary/70 text-white rounded-3xl relative h-[320px] flex  items-end '>
                <div className='space-y-3'>
                    <div className=' mb-4'>
                        <p className=' text-'>Enjoy</p>
                        <p className='text-2xl  font-semibold mb-[2px]'>With</p>
                        <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'> Technology</p>
                        <Button text="Browser" bgColor={"bg-white"} textColor={"text-primary"} />
                    </div>
                </div>
                    <img src={img3} alt="" className='w-[320px] absolute top-1/2 -right-0 -translate-y-1/2 '/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Category