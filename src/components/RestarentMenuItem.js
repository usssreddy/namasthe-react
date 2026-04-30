import useRestraentMenu from "../utils/useRestraentMenu";
import { useParams } from "react-router-dom";
import RestarentMenuItemCardinons from "./RestarentMenuItemCardinons";
import { useState, useEffect } from "react";


// const RestarentMenuItem = ()=>{

// //     const itemCategories = resMenuDataList?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((restmenu) =>
// //     restmenu?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
// // );
// //         console.log(itemCategories);
// //         console.log("data added");

// const [resMenuCardData , setResMenuCardData]  = useState([])
    
// const resId = useParams();
//     const restCategoeries = useRestraentMenu(resId);

//     console.log(restCategoeries);

//     if (!restCategoeries) {
//         return <Shimmer />;
//     }
    
//     //  // ✅ Sync data when API/mock loads
//     //  useEffect(() => {
//     //     if (resMenuCardData) {
//     //         setResMenuCardData(restCategoeries);
//     //         console.log(restCategoeries);
//     //     }
//     // }, [resMenuCardData]);
//     const resName = restCategoeries[0].card.card.text;

    
//     // const itemCategoriesData = resMenuCardData[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((restmenu) =>
//     //      restmenu?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
// // )


//     return(
//         <div>
//             <h3 className="m-4 font-bold text-center">{ resName}</h3>
//             <div className="rest-menu-cards">
//                 {/* {
//                     itemCategoriesData.map((itemsCardions)=>  <RestarentMenuItemCardinons menuData = {itemsCardions} />)
//                 } */}

//             </div>


//         </div>

//     )
// };

// export default RestarentMenuItem;

const RestarentMenuItem = () => {

    const [showIndex, setShowIndex]  = useState(0)

    const resId = useParams();
    const restCategoeries = useRestraentMenu(resId);

    console.log(restCategoeries);

    // ✅ Fix — wait for data to load before accessing
    if (!restCategoeries) {
        return <h3>Loading...</h3>;
    }

    const resName = restCategoeries[0]?.card?.card?.text;

    const itemCategoriesData = restCategoeries[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((restmenu) =>
        restmenu?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    console.log("itemCategoriesData", itemCategoriesData);

    return (
        <div className="text-center">
            <h3 className="font-bold">{resName}</h3>
                {itemCategoriesData?.map((itemsCardions, index) =>
                    <RestarentMenuItemCardinons key={index} menuData={itemsCardions}
                    showItems ={ index === showIndex ? true :false}
                    setShowIndex = {()=>setShowIndex(index)}
                    />
                )}
            
        </div>
    );
};

export default RestarentMenuItem;