import React from 'react'
import Heading from '../Shared/Heading';
import ProductCard from './ProductCard';
import img1 from "../../assets/product/p-1.jpg";
import img2 from "../../assets/product/p-2.jpg";
import img3 from "../../assets/product/p-3.jpg";
import img4 from "../../assets/product/p-4.jpg";
import img5 from "../../assets/product/p-5.jpg";
import img6 from "../../assets/product/p-7.jpg";
import img7 from "../../assets/product/p-9.jpg";
import img8 from "../../assets/product/p-4.jpg";
const ProductData=[
    {
        id:1,
        img:img1,
        title:"Boat HeadPhone",
        price:"$150",
        aosDelay:"0",
    },
    {
        id:2,
        img:img2,
        title:"Boat HeadPhone",
        price:"$130",
        aosDelay:"200",
    },
    {
        id:3,
        img:img3,
        title:"Boat HeadPhone",
        price:"$160",
        aosDelay:"400",
    },
    {
        id:4,
        img:img4,
        title:"Boat HeadPhone",
        price:"$120",
        aosDelay:"600",
    }

]

const ProductData2=[
    {
        id:5,
        img:img5,
        title:"Boat HeadPhone",
        price:"$100",
        aosDelay:"800",
    },
    {
        id:6,
        img:img6,
        title:"Boat HeadPhone",
        price:"$200",
        aosDelay:"1000",
    },
    {
        id:7,
        img:img7,
        title:"Boat HeadPhone",
        price:"$150",
        aosDelay:"1200",
    },
    {
        id:8,
        img:img8,
        title:"Boat HeadPhone",
        price:"$170",
        aosDelay:"1400",
    }
]
function Products() {
  return (
    <div>
        {/*product Head section*/}
        <Heading title="Our Products" subtitle={"Explore Our Products"}/>

        {/*Body section*/}
        <ProductCard data={ProductData}/>
        <ProductCard data={ProductData2}/>
    </div>
  )
}

export default Products