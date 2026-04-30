import RestarentsCard , {withPrompotedRestarentCard } from "./RestarentsCard";

import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import OfflineGame from "../utils/OfflineGame";


const Body = () => {
    // resDataList.data.cards
const [listofRestarents , setListofRestarents] = useState([]) 
const[filterRestarents, setFilterRestarents] = useState([])
const[searchText, setSearchText] = useState("");
const onStatus = useOnlineStatus();
  const RestarentPromtedCard =   withPrompotedRestarentCard(RestarentsCard);

useEffect( ()=>{
fetchData();
}, []);

const fetchData =  async ()=>{
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3924982&lng=78.46796379999999&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
  const json = await data.json();
  console.log(json.data.cards)
  // optaional chaning
  setListofRestarents(json?.data?.cards?.slice(3))
  setFilterRestarents(json?.data?.cards?.slice(3))
}
 
// // condtional renderning
// if(listofRestarents.length === 0){
//     return 
// }

// ❌ Offline → show game
if (!onStatus) {
    return <OfflineGame />;
}


    return  (listofRestarents.length === 0) ? <Shimmer/> : (
        <div className="body">
            
               <div className="flex gap-4 ml-4 mt-4 mb-4" > 
               <input type="text" className="px-3 py-2 border border-gray-300 rounded-md shadow-sm 
             focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
             text-gray-900"
              value={searchText}
               onChange={(e)=>{
                setSearchText(e.target.value);
               }}
               />
               <button className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-semibold py-2 px-4 rounded"
                onClick={ ()=>{

                     const filterData1 = listofRestarents.filter((res) =>
                         res.card.card.info.name.toLowerCase().includes(searchText.toLowerCase())
                             );

                 
                             setFilterRestarents(filterData1);
       

                

               }} >search</button>
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"    
                onClick={
                    ()=>{
                         const  filterData = listofRestarents.filter((restarent)=> 
                            restarent.card.card.info.avgRating > 4
                        
                
                         );
                         setFilterRestarents(filterData);
                    
                    }
                }>
                    get above 4 ratings restraents
                </button>
                
            </div>
            <div className="restarents grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" >
            {filterRestarents.map((restaruant) => (
                
                <Link key={restaruant.card.card.info.id} to={"/restarnetmenu/"+restaruant.card.card.info.id}>
                  
                  {/* higher order component */}
                  { restaruant.card.card.info.promoted ? (<RestarentPromtedCard resData = {restaruant}/>) : 
                  ( <RestarentsCard  resData = {restaruant} />)}
                    
                
                     
                      </Link>
          ) )}
            </div>

        </div>

    )
};

export default Body;