import { RESTAURANT_IMAGE } from "../utils/constants";


const RestarentsCard = (props)=> {
    console.log(props)
    const {name, cloudinaryImageId, areaName, costForTwo
    ,cuisines, avgRating, totalRatingsString, sla
    } = props?.resData?.card?.card?.info;
    return(
       <div className="restarent-card p-4 border rounded-lg">
    
        {/* https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/az9ex7bhar9uwg5yhcdm */}
            <img src={RESTAURANT_IMAGE+cloudinaryImageId}
            alt="food image" className="w-full h-40 object-cover"/>
        <h3 className="font-bold">{name}</h3>
        <h4>{areaName}</h4>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla.deliveryTime} mins deliveryTime</h4>
        <h4>{avgRating} rating </h4>
        <h4>{totalRatingsString} ratings</h4>

       </div>
    )
};


export const withPrompotedRestarentCard = (RestarentsCard) =>{

    return (props)=>{
    
        return(
            <div>
            <label className="absolute m-4 p-1 content-center text-white bg-black rounded-xl">
                promted
            </label>
            <RestarentsCard {...props}/>
            </div>
        )

    }

};

export default RestarentsCard;