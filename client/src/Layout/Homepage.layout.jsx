import React from 'react'

//Components
import Navbar from '../Components/Navbar';
import FoodTab from '../Components/FoodTab';
export default function HomeLayout({children}) {
  return (
      <>
      <Navbar/>
      <div className="container mx-auto px-4 lg:px-20">{children}</div>
      <FoodTab/>
      </>
  );
}
