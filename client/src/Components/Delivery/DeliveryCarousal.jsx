import React from 'react'
import DeliveryCategory from './DeliveryCategory';
import Slider from 'react-slick';
import {SampleNextArrow, SamplePrevArrow } from '../Arrow';



function DeliveryCarousal() {

  const categories=[
    {
      image:"https://b.zmtcdn.com/data/o2_assets/2b5a5b533473aada22015966f668e30e1633434990.png",
      title:"Paratha",
    },
    {
      image:"https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png",
      title:"Paratha",
    },
    {
      image:"https://b.zmtcdn.com/data/pictures/chains/9/65279/336196dfdb8fc00175472a785007b9ea_o2_featured_v2.jpg?output-format=webp",
      title:"Paratha",
    },
    {
      image:"https://b.zmtcdn.com/data/o2_assets/2b5a5b533473aada22015966f668e30e1633434990.png",
      title:"Paratha",
    },
    {
      image:"https://b.zmtcdn.com/data/o2_assets/2b5a5b533473aada22015966f668e30e1633434990.png",
      title:"Paratha",
    },
    {
      image:"https://b.zmtcdn.com/data/o2_assets/2b5a5b533473aada22015966f668e30e1633434990.png",
      title:"Paratha",
    },
    {
      image:"https://b.zmtcdn.com/data/o2_assets/2b5a5b533473aada22015966f668e30e1633434990.png",
      title:"Paratha",
    },
  ]

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
     <h1 className='text-xl font-semibold'>Inspiration for your first Order</h1>
     <div className='lg:hidden flex flex-wrap justify-between gap-3 my-2 md:my-4'>
       {
         categories.map((category)=> (
           <DeliveryCategory {...category}/>
         ))
       }
         
     </div>
     
     <div className='hidden lg:block flex flex-wrap justify-between gap-3 my-2'>
        <Slider {...settings}>
          {
            categories.map((category)=> (
              <DeliveryCategory {...category}/>
            ))
          }
        </Slider>
     </div>
     
    </>
  );
}

export default DeliveryCarousal