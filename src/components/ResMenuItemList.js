import { RESTAURANT_IMAGE } from "../utils/constants";


const ResMenuItemList = ({items}) =>{
    console.log("items", items)

    return(
        <div>
            {
                items.map((data)=> (
                    <div key={data.card.info.id} className="m-2 p-2 border border-gray-200 text-left flex justify-between">
                <div>
                    <span>{data.card.info.name}</span>
                    <br/>
                    <span>💵{data.card.info.price/100 || data.card.info.defaultPrice/100}</span>
                    <br/>
                    <span>⭐{data.card.info.ratings.aggregatedRating.rating}</span>
                    
                    <p>
                      {data.card.info.description}
                    </p>
                    </div>
                    
                    <div className="relative w-36">
                    <img src={RESTAURANT_IMAGE + data.card.info.imageId}  className="w-36 object-cover rounded-lg" />
                    <button  className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white text-green-600 px-4 py-1 rounded-lg shadow-md font-semibold">add</button>
                        </div>
    
                    </div>
                     
                    
                ))
            

            }
        </div>

    )
}
export default ResMenuItemList;