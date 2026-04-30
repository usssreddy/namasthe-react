import { RESTAURANT_IMAGE } from "../utils/constants";

const RestarentMenuCard = (props)=>{

    const {name, imageId, price, ratings,finalPrice} = props.restdataitem;

    return(
        <div className="res-menu-card " style={{display: "flex", justifyContent: "space-between", width:"700px", marginLeft:"auto" , marginRight: "auto",  border: "1px solid black" , 
        backgroundColor: "#f0f0f0", margin: "10px"}}>
        
           <div>
           <h3>{name}</h3>
           <h3>Price: {"\u20B9"} {finalPrice/100}</h3>
           <h3>{ratings.aggregatedRating.rating}</h3>
           </div>

           <div className="item-img"> 
           <img src={RESTAURANT_IMAGE + imageId} alt="item image" style={{width: "200px" , height: "100px", objectFit:"cover"}} />
           </div>
          


        </div>

    )
};

export default RestarentMenuCard;