import React from 'react'

const DeliverySmCard = (props) =>{
    return (
        <>
        <div className='lg:hidden bg-white shadow rounded-md w-24 md:w-48'>
          <div className='w-full h-24 '>
              <img src={props.image}
               alt="food" className='w-full h-full object-cover rounded-t-md'/>
          </div>
          <h3 className='text-sm font-light text-center my-1'>{props.title}</h3>
        </div>
        </>
    
  )
}

const DeliveryLgCard = ({image,title})=>{
    return (
        <>
        <div className='hidden lg:block w-64 h-52 rounded-md'>
          <div className='w-full h-full '>
              <img src={image}
               alt="food" className='w-full h-full object-cover rounded-md'/>
          </div>
          <h3 className='text-lg font-medium text-center my-1'>{title}</h3>
        </div>
        </>
    
  )
}

function DeliveryCategory(props) {
  return (
        <>
         <DeliverySmCard {...props}/>
         <DeliveryLgCard {...props}/>
        </>
    
  )
}

export default DeliveryCategory;