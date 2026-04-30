import { useState , useEffect} from "react";
import { resMenuDataList } from "../utils/mockdata";

// const useRestraentMenu = (resId)=>{


//     const [restarentMenuInfo, setRestarentMenuInfo] = useState();

//     useEffect(()=>{ 
//         fetchMenuData();
//     }, []);

//     const fetchMenuData = async () => {
//         // const data = await fetch("https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.3924982&lng=78.46796379999999&restaurantId=142670&catalog_qa=undefined&query=Biryani&submitAction=ENTER");

//         // const datajson = await data.json();
//         // console.log(datajson);

//         // Filter only ItemCategory records




//         const itemCategories = resMenuDataList?.data?.cards;
//         console.log("data")
//         console.log(itemCategories);

// //         filter((restmenu) =>
// //     restmenu?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
// // );
// //         console.log(itemCategories);
// //         console.log("data added");


//         // const json = resMenuDataList?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card.card.itemCards;
//         //  setRestarentMenuInfo(json)
//         //  console.log(resId);
//         //  console.log(restarentMenuInfo);

//         setRestarentMenuInfo(itemCategories);

        
//     };
//     return restarentMenuInfo;
// }; export default useRestraentMenu;



const useRestraentMenu = (resId) => {

    const [restarentMenuInfo, setRestarentMenuInfo] = useState(null);

    useEffect(() => {
        fetchMenuData();
    }, []);

    const fetchMenuData = async () => {
        const itemCategories = resMenuDataList?.data?.cards;
        console.log("data", itemCategories);
        setRestarentMenuInfo(itemCategories);
    };

    return restarentMenuInfo;
};

export default useRestraentMenu;