import React,{useState,useEffect} from "react";
import { RiShoppingBag3Line } from "react-icons/ri";
import { IoFastFoodOutline, IoNutritionOutline } from "react-icons/io5";
import { BiDrink } from "react-icons/bi";
import { useParams,Link } from "react-router-dom";

const MobileTab = () =>{
  const [allTypes, setAllTypes] = useState([
    {
      id: "delivery",
      icon: <RiShoppingBag3Line />,
      name: "Delivery",
      isActive: false,
    },
    {
      id: "dining",
      icon: <IoFastFoodOutline />,
      name: "Dining Out",
      isActive: false,
    },
    {
      id: `night`,
      icon: <BiDrink />,
      name: "Night life",
      isActive: false,
    },
    {
      id: `nutri`,
      icon: <IoNutritionOutline />,
      name: "Nutrition",
      isActive: false,
    },
  ]);
  
  const {type}=useParams();

  useEffect( ()=>{
      if(type)
      {
        const updatetype= allTypes.map((item)=>{
          if(item.id===type)
          {
            return {...item,isActive:true};
          }
          else
          {
            return {...item,isActive:false};
          }
          return item;
        });
        setAllTypes(updatetype);
      }
  },[type]);
  return (
    <>
      <div className="lg:hidden bg-white shadow-lg p-3 fixed bottom-0 z-10 w-full flex items-center justify-between md:justify-evenly text-gray-500 border">
        {allTypes.map((items) => (
          <Link to={`/${items.id}`}>
            <div
              className={items.isActive?"flex flex-col relative items-center text-xl text-zomato-400":"flex flex-col items-center text-xl"}>
              <div className={
                  items.isActive &&
                  "absolute -top-3 w-full h-2 border-t-2 border-zomato-400"
                }
              />
              {items.icon}
              <h5 className="text-sm">{items.name}</h5>
            </div>
          </Link>  
        ))}
      </div>
    </>
  );
}

const LargeTab = () =>{
  const [allTypes, setAllTypes] = useState([
    {
      id: "delivery",
      imageDefault:
        "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png",
      imageActive:
        "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png",
      name: "Delivery",
      activeColor: "yellow",
    },
    {
      id: "dining",
      imageDefault:
        "https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png",
      imageActive:
        "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
      activeColor: "blue",

      name: "Dining Out",
    },
    {
      id: `night`,
      imageDefault:
        "https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png",
      imageActive:
        "https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png",
      activeColor: "purple",

      name: "Night life",
    },
    {
      id: `nutri`,
      imageDefault:
        "https://b.zmtcdn.com/data/o2_assets/54cad8274d3c3ec7129e0808a13b27c31616582882.png",
      imageActive:
        "https://b.zmtcdn.com/data/o2_assets/0f6dcb1aef93fa03ea3f91f37918f3bc1616649503.png",
      activeColor: "yellow",

      name: "Nutrition",
    },
  ]);

   const {type}=useParams();

  return(
     <>
     <div className="hidden lg:flex container mx-auto gap-14 px-20">
        {allTypes.map((item) =>(
          <Link to={`/${item.id}`}>
          <div className="flex items-center gap-3">
           <div className={`w-12 h-12  bg-${item.id === type ? "blue" : "gray"}-100 rounded-full p-2 `}>
             <img src={ item.id===type?item.imageActive:item.imageDefault} 
             alt="delivery" className="w-full h-full"/>
           </div>
           <h4 className={type===item.id ?"text-xl text-zomato-400":"text-xl text-gray-400"}>{item.name}</h4>
           </div>
           </Link>
        )
        )
        }
       
       
     </div>
     </>
   );
}

function FoodTab() {
  return (
    <div>
        <MobileTab/>
        <LargeTab/>
    </div>
  )
}
export default FoodTab;