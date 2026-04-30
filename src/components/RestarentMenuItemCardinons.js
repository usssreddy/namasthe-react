import { useState } from "react";
import ResMenuItemList from "./ResMenuItemList";


const RestarentMenuItemCardinons = ({menuData, showItems, setShowIndex})=>{

    // const [showItems,setShowItems ] = useState(showItems);
 
    const handledClick = ()=>{
        // setShowItems(!showItems);
        setShowIndex();
    
      }


    return(
          <div className="w-6/12 mx-auto my-4 text-center  bg-gray-50 shadow-lg p-4 ">
            <div  className=" flex justify-between cursor-pointer" onClick={handledClick}>
                <span>{menuData.card.card.title} ({menuData.card.card.itemCards.length}) </span>
                <span>⬇️</span>
            </div>
           { showItems && <ResMenuItemList items = {menuData.card.card.itemCards} />}

            </div>

    )
}

export default RestarentMenuItemCardinons;