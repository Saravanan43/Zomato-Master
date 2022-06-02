import React from 'react'
import {useParams} from 'react-router-dom';

//components
import Delivery from './Delivery';

function Master() {
    const {type}=useParams();
  return (
    <div className='py-4'>
      {
      (type=="delivery") && <Delivery/>
      }
    </div>
  )
}

export default Master;