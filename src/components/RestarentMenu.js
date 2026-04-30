import {useState, useEffect } from "react";

import useRestraentMenu from "../utils/useRestraentMenu";

import RestarentMenuCard from "./RestarentMenuCard";
import { useParams } from "react-router-dom";


const RestarentMenu = ()=> {
    const parms = useParams()
    const {resId} = useParams();
    console.log("data");
    console.log(parms);
    
    const restarentMenuInfo = useRestraentMenu(resId);
   

    const [filterVegItem , setfilterVegItem]  = useState([])
    const[isVeg, setIsVeg] = useState(false)

     // ✅ Sync data when API/mock loads
     useEffect(() => {
        if (restarentMenuInfo) {
            setfilterVegItem(restarentMenuInfo);
        }
    }, [restarentMenuInfo]);

    

     // ✅ Toggle Veg Filter
     const filterVeg = () => {
        if (isVeg) {
            setfilterVegItem(restarentMenuInfo);
            setIsVeg(false);
        } else {
            const vegdata = restarentMenuInfo.filter(
                (item) => item?.card?.info?.isVeg === 1
            );
            setfilterVegItem(vegdata);
            setIsVeg(true);
        }
    };


    return(
        <div className="filter-veg-nonveg" style={{ margin:"auto"}}> 
<button
                onClick={filterVeg}
                style={{
                    width: "150px",
                    cursor: "pointer",
                    padding: "10px",
                    backgroundColor: isVeg ? "green" : ""
                }}
            >
                {isVeg ? "Show All" : "Filter Veg"}
            </button>           
        <div className="restarent-menu" > 
       
       {
            filterVegItem.map( (resdatamenu) => (
           < RestarentMenuCard  key={resdatamenu.card.info.id}  restdataitem = {resdatamenu.card.info} />)
            )
        };

        </div>
        </div>
    );
};

export default RestarentMenu;