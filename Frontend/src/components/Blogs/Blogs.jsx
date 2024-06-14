import React from 'react'
import Heading from '../Shared/Heading'
import img1 from "../../assets/blogs/blog-1.jpg";
import img2 from "../../assets/blogs/blog-2.jpg";
import img3 from "../../assets/blogs/blog-3.jpg";
const BlogData=[
    {   id:1,
        title:"How to choose perfect smartwatch",
        img:img1,
        subtitle:"Look for a model that comes with an in-built Pedometer, Accelerometer, Heart Rate Monitor, etc. These features will help you measure and track activities like Steps Taken, Speed, Calories Burned, and Heart Rate.",
        published:"jan 20, 2024 by Dilshad ",
        aosDelay:"0",
    },
    {  id:2,
        title:"How to choose perfect laptop",
        img:img2,
        subtitle:"Look for a model that comes with an in-built Pedometer, Accelerometer,Heart Rate Monitor, etc. These features will help you measure and track activities like Steps Taken, Speed, Calories Burned, and Heart Rate.",
        published:"jan 20, 2024 by Dilshad ",
        aosDelay:"100",
    },
    {   id:3,
        title:"How to choose perfect gadgets",
        img:img3,
        subtitle:"Look for a model that comes with an in-built Pedometer, Accelerometer,Heart Rate Monitor, etc. These features will help you measure and track activities like Steps Taken, Speed, Calories Burned, and Heart Rate.",
        published:"jan 20, 2024 by Dilshad ",
        aosDelay:"200",
    }
]

function Blogs() {
  return (
    <div className="my-10">
        <div  className="container ">
            {/* heading section */}
            <Heading title="Recent News" subtitle=" Explore Our Blogs" />
            {/* Blog section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8  sm:gap-4 md:gap-7">
                {/* card section */}
                {
                    BlogData.map((data)=>(
                        <div data-aos="fade-up"
                               data-aos-delay={data.aosDelay} key={data.id} className="bg-white dark:bg-gray-900">

                            {/* image section */}
                            <div className=" overflow-hidden rounded-2xl mb-2">
                                <img src={data.img} alt="" className="w-full h-[220px]  object-cover rounded-2xl hover:scale-105 duration-500" />
                            </div>

                            {/* content section */}
                            <div className="spce-y-2">
                                <p className=" text-xs text-gray-500">{data.published}</p>
                                <p className="font-bold line-clamp-1">{data.title}</p>
                                <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-400">{data.subtitle}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Blogs