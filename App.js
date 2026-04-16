import  React from "react" ;
import ReactDOM from "react-dom/client";


/**
 * 
 * <div id ="parent">
 *   <div id = "child">
 *    <h1>i am h1 tag</h1>
 *    <h2>i am h2 tag</h1>
 * </div>
 * </div>
 * 
 */


//   const heading = React.createElement("div", {id : "parent"}, 
//                React.createElement("div", {id :"child"} , 
//                React.createElement("h1" , {} , "i am h1 tag")
//              )
//             );


const JsxHeading = () => ( 
  <h1 className = "heading" style={{backgroundColor :"green",}}>  this  syntd form react </h1>
);


// React Functional component 
// commponet compostion
const HedingFunction = () => (
        
        <div>
            <JsxHeading/>
             <h1>this functional component</h1>;
        </div>
       
);

// const Header = () => (
//     <div
//   id="container"
//   style={{
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between",
//     padding: "10px",
//   }}
// >
//   <img src="/ANL07074.jpg" alt="left-image" width="100" />

//   <input
//     type="search"
//     placeholder="Search..."
//     style={{
//       width: "300px",
//       padding: "10px",
//       borderRadius: "5px",
//     }}
//   />

//   <img src="/ANL07074.jpg" alt="right-image" width="100" />
// </div>
// );

const Header = () => {
    return (
        <div className="header" style={{display : "flex",  justifyContent: "space-between",  border: "1px solid black",
        padding: "2px",} }>
          <div className="logo">
            <img src="https://tse4.mm.bing.net/th/id/OIP.n3hjexLbsNVGL_tDooN77wHaFX?w=250&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
             style={{width : "90px"}}
            alt="rest logo"/>
          </div>
         
         <div className="nav-items" style={{ padding:"0px 30px"}}>
            <ul className="list-items" style={{display : "flex" , fontsize : "24px", listStyle: "none", gap: "30px", }} >
               <li>Home</li>
               <li>about us</li>
               <li>contact us</li>
               <li>cart</li>
            </ul>

         </div>

        </div>

    )
};

const RestarentsCard = (props)=> {
    console.log(props)
    const {name,cloudinaryImageId, areaName, costForTwo
    ,cuisines, avgRating, totalRatingsString, sla
    } = props?.resData?.card?.card?.info;
    return(
       <div className="restarent-card" style={{width: "200px" ,  border: "1px solid black" , 
       backgroundColor: "#f0f0f0"
       }}>
        <div className="food-imag">
        {/* https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/az9ex7bhar9uwg5yhcdm */}
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}
            alt="food image" style={{width:"190px" , height: "95px", padding:"10px"}}/>
        </div>
        <h3>{name}</h3>
        <h4>{areaName}</h4>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla.deliveryTime} mins deliveryTime</h4>
        <h4>{avgRating} rating </h4>
        <h4>{totalRatingsString} ratings</h4>

       </div>
    )
};






  const resDataList = {
    "data": {
        "statusMessage": "done successfully",
        "pageOffset": {
            "nextOffset": "CJpqEOskKIDw1qSgloTObTDIDjgD",
            "widgetOffset": {
                "restaurantCountWidget": "",
                "inlineFacetFilter": "",
                "collectionV5RestaurantListWidget_SimRestoRelevance_food": "36",
                "collectionV5MastheadWidget": ""
            }
        },
        "cards": [
            {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                        "info": {
                            "id": "603116",
                            "name": "Barbeque Nation",
                            "cloudinaryImageId": "az9ex7bhar9uwg5yhcdm",
                            "locality": "City Plaza",
                            "areaName": "ABIDS",
                            "costForTwo": "₹600 for two",
                            "cuisines": [
                                "North Indian",
                                "Barbecue",
                                "Kebabs",
                                "Biryani",
                                "Street Food",
                                "Snacks"
                            ],
                            "avgRating": 3.8,
                            "parentId": "2438",
                            "avgRatingString": "3.8",
                            "totalRatingsString": "1.0K+",
                            "promoted": true,
                            "adTrackingId": "cid=493cc066-1d8f-46f3-892a-7ca06f414d09~p=19~adgrpid=493cc066-1d8f-46f3-892a-7ca06f414d09#ag4~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=603116~plpr=COLLECTION~eid=78245ef4-b06c-4ca3-b50a-9365f628bc64~srvts=1776259341048~collid=83639",
                            "sla": {
                                "deliveryTime": 52,
                                "lastMileTravel": 1.9,
                                "serviceability": "SERVICEABLE",
                                "slaString": "50-60 mins",
                                "lastMileTravelString": "1.9 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextCloseTime": "2026-04-15 23:30:00",
                                "opened": true
                            },
                            "badges": {},
                            "isOpen": true,
                            "type": "F",
                            "badgesV2": {
                                "entityBadges": {
                                    "textBased": {},
                                    "imageBased": {},
                                    "textExtendedBadges": {}
                                }
                            },
                            "aggregatedDiscountInfoV3": {
                                "header": "60% OFF",
                                "subHeader": "UPTO ₹120"
                            },
                            "orderabilityCommunication": {
                                "title": {},
                                "subTitle": {},
                                "message": {},
                                "customIcon": {},
                                "commsStyling": {}
                            },
                            "differentiatedUi": {
                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                "differentiatedUiMediaDetails": {
                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                    "lottie": {},
                                    "video": {}
                                }
                            },
                            "reviewsSummary": {},
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {},
                            "externalRatings": {
                                "aggregatedRating": {
                                    "rating": "--"
                                }
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                            "campaignId": "493cc066-1d8f-46f3-892a-7ca06f414d09"
                        },
                        "analytics": {},
                        "cta": {
                            "link": "swiggy://menu?restaurant_id=603116&source=collection&query=Biryani",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                        },
                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
                    },
                    "relevance": {
                        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                        "sectionId": "MENU_RETURN_FOOD"
                    }
                }
            },
            {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                        "info": {
                            "id": "3324",
                            "name": "Srikanya",
                            "cloudinaryImageId": "buchh1zmqz5ag5q13mmo",
                            "locality": "Somajiguda",
                            "areaName": "Panjagutta",
                            "costForTwo": "₹250 for two",
                            "cuisines": [
                                "Biryani",
                                "Andhra",
                                "South Indian"
                            ],
                            "avgRating": 4.3,
                            "parentId": "7317",
                            "avgRatingString": "4.3",
                            "totalRatingsString": "93K+",
                            "sla": {
                                "deliveryTime": 63,
                                "lastMileTravel": 5.6,
                                "serviceability": "SERVICEABLE",
                                "slaString": "60-70 mins",
                                "lastMileTravelString": "5.6 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextCloseTime": "2026-04-15 22:45:00",
                                "opened": true
                            },
                            "badges": {},
                            "isOpen": true,
                            "type": "F",
                            "badgesV2": {
                                "entityBadges": {
                                    "imageBased": {},
                                    "textExtendedBadges": {},
                                    "textBased": {}
                                }
                            },
                            "aggregatedDiscountInfoV3": {
                                "header": "ITEMS",
                                "subHeader": "AT ₹95",
                                "logoCtx": {
                                    "text": "BENEFITS"
                                }
                            },
                            "orderabilityCommunication": {
                                "title": {},
                                "subTitle": {},
                                "message": {},
                                "customIcon": {},
                                "commsStyling": {}
                            },
                            "differentiatedUi": {
                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                "differentiatedUiMediaDetails": {
                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                    "lottie": {},
                                    "video": {}
                                }
                            },
                            "reviewsSummary": {},
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {},
                            "externalRatings": {
                                "aggregatedRating": {
                                    "rating": "4.1",
                                    "ratingCount": "3.1K+"
                                },
                                "source": "GOOGLE",
                                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                        },
                        "analytics": {},
                        "cta": {
                            "link": "swiggy://menu?restaurant_id=3324&source=collection&query=Biryani",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                        },
                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
                    },
                    "relevance": {
                        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                        "sectionId": "MENU_RETURN_FOOD"
                    }
                }
            },
            {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                        "info": {
                            "id": "233056",
                            "name": "The Biryani Life",
                            "cloudinaryImageId": "vz0cjakgfkiph7zgyiis",
                            "locality": "Beside Little Flower Primary school",
                            "areaName": "Abids",
                            "costForTwo": "₹250 for two",
                            "cuisines": [
                                "Biryani",
                                "Mughlai",
                                "Lucknowi",
                                "Hyderabadi",
                                "Kebabs",
                                "Desserts",
                                "Beverages"
                            ],
                            "avgRating": 3.8,
                            "parentId": "8496",
                            "avgRatingString": "3.8",
                            "totalRatingsString": "1.0K+",
                            "promoted": true,
                            "adTrackingId": "cid=6b7b72a2-8662-42fd-9220-f5efe194cdfb~p=21~adgrpid=6b7b72a2-8662-42fd-9220-f5efe194cdfb#ag3~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=233056~plpr=COLLECTION~eid=844f08e7-f16e-46b1-a809-9030e44dea81~srvts=1776259341048~collid=83639",
                            "sla": {
                                "deliveryTime": 44,
                                "lastMileTravel": 1.6,
                                "serviceability": "SERVICEABLE",
                                "slaString": "40-50 mins",
                                "lastMileTravelString": "1.6 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextCloseTime": "2026-04-15 23:59:00",
                                "opened": true
                            },
                            "badges": {},
                            "isOpen": true,
                            "type": "F",
                            "badgesV2": {
                                "entityBadges": {
                                    "textBased": {},
                                    "imageBased": {},
                                    "textExtendedBadges": {}
                                }
                            },
                            "aggregatedDiscountInfoV3": {
                                "header": "ITEMS",
                                "subHeader": "AT ₹99"
                            },
                            "orderabilityCommunication": {
                                "title": {},
                                "subTitle": {},
                                "message": {},
                                "customIcon": {},
                                "commsStyling": {}
                            },
                            "differentiatedUi": {
                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                "differentiatedUiMediaDetails": {
                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                    "lottie": {},
                                    "video": {}
                                }
                            },
                            "reviewsSummary": {},
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {},
                            "externalRatings": {
                                "aggregatedRating": {
                                    "rating": "--"
                                }
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                            "campaignId": "6b7b72a2-8662-42fd-9220-f5efe194cdfb"
                        },
                        "analytics": {},
                        "cta": {
                            "link": "swiggy://menu?restaurant_id=233056&source=collection&query=Biryani",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                        },
                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
                    },
                    "relevance": {
                        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                        "sectionId": "MENU_RETURN_FOOD"
                    }
                }
            },
            {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                        "info": {
                            "id": "33236",
                            "name": "Spice 6-The Arab Villagio",
                            "cloudinaryImageId": "li9e5m37vpburksmoe14",
                            "locality": "Banjara Hills",
                            "areaName": "Banjara Hills",
                            "costForTwo": "₹900 for two",
                            "cuisines": [
                                "Arabian",
                                "Indian",
                                "Tandoor",
                                "Chinese",
                                "Desserts"
                            ],
                            "avgRating": 4.4,
                            "parentId": "19225",
                            "avgRatingString": "4.4",
                            "totalRatingsString": "22K+",
                            "sla": {
                                "deliveryTime": 64,
                                "lastMileTravel": 5,
                                "serviceability": "SERVICEABLE",
                                "slaString": "60-70 mins",
                                "lastMileTravelString": "5.0 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextCloseTime": "2026-04-15 23:30:00",
                                "opened": true
                            },
                            "badges": {
                                "imageBadges": [
                                    {
                                        "imageId": "newg.png",
                                        "description": "Gourmet"
                                    }
                                ]
                            },
                            "isOpen": true,
                            "type": "F",
                            "badgesV2": {
                                "entityBadges": {
                                    "textExtendedBadges": {},
                                    "textBased": {},
                                    "imageBased": {
                                        "badgeObject": [
                                            {
                                                "attributes": {
                                                    "description": "Gourmet",
                                                    "theme": "",
                                                    "imageId": "newg.png"
                                                }
                                            }
                                        ]
                                    }
                                }
                            },
                            "aggregatedDiscountInfoV3": {
                                "header": "20% OFF",
                                "subHeader": "UPTO ₹50",
                                "logoCtx": {
                                    "text": "BENEFITS"
                                }
                            },
                            "orderabilityCommunication": {
                                "title": {},
                                "subTitle": {},
                                "message": {},
                                "customIcon": {},
                                "commsStyling": {}
                            },
                            "differentiatedUi": {
                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                "differentiatedUiMediaDetails": {
                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                    "lottie": {},
                                    "video": {}
                                }
                            },
                            "reviewsSummary": {},
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {},
                            "externalRatings": {
                                "aggregatedRating": {
                                    "rating": "4.2",
                                    "ratingCount": "7.4K+"
                                },
                                "source": "GOOGLE",
                                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                        },
                        "analytics": {},
                        "cta": {
                            "link": "swiggy://menu?restaurant_id=33236&source=collection&query=Biryani",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                        },
                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
                    },
                    "relevance": {
                        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                        "sectionId": "MENU_RETURN_FOOD"
                    }
                }
            },
            {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                        "info": {
                            "id": "1120976",
                            "name": "Chaitanya Food Court",
                            "cloudinaryImageId": "y4nzvmpofaplssjzpghf",
                            "locality": "Banjara Hills",
                            "areaName": "Banjara Hills",
                            "costForTwo": "₹600 for two",
                            "cuisines": [
                                "Biryani"
                            ],
                            "avgRating": 4.4,
                            "parentId": "1865",
                            "avgRatingString": "4.4",
                            "totalRatingsString": "2.6K+",
                            "promoted": true,
                            "adTrackingId": "cid=4e90c38f-8fef-4e64-8207-efc903c175d8~p=23~adgrpid=4e90c38f-8fef-4e64-8207-efc903c175d8#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1120976~plpr=COLLECTION~eid=4bc6e9f1-b865-4714-83c9-2e04182cd3d5~srvts=1776259341048~collid=83639",
                            "sla": {
                                "deliveryTime": 59,
                                "lastMileTravel": 6.3,
                                "serviceability": "SERVICEABLE",
                                "slaString": "55-65 mins",
                                "lastMileTravelString": "6.3 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextCloseTime": "2026-04-16 00:00:00",
                                "opened": true
                            },
                            "badges": {},
                            "isOpen": true,
                            "type": "F",
                            "badgesV2": {
                                "entityBadges": {
                                    "textExtendedBadges": {},
                                    "textBased": {},
                                    "imageBased": {}
                                }
                            },
                            "aggregatedDiscountInfoV3": {
                                "header": "₹100 OFF",
                                "subHeader": "ABOVE ₹349",
                                "discountTag": "FLAT DEAL",
                                "logoCtx": {
                                    "text": "BENEFITS"
                                }
                            },
                            "orderabilityCommunication": {
                                "title": {},
                                "subTitle": {},
                                "message": {},
                                "customIcon": {},
                                "commsStyling": {}
                            },
                            "differentiatedUi": {
                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                "differentiatedUiMediaDetails": {
                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                    "lottie": {},
                                    "video": {}
                                }
                            },
                            "reviewsSummary": {},
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {},
                            "externalRatings": {
                                "aggregatedRating": {
                                    "rating": "--"
                                }
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                            "campaignId": "4e90c38f-8fef-4e64-8207-efc903c175d8"
                        },
                        "analytics": {},
                        "cta": {
                            "link": "swiggy://menu?restaurant_id=1120976&source=collection&query=Biryani",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                        },
                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
                    },
                    "relevance": {
                        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                        "sectionId": "MENU_RETURN_FOOD"
                    }
                }
            },
            {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                        "info": {
                            "id": "654939",
                            "name": "Iqbal Cafe",
                            "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/6/21/8f7adc0c-0d06-4c3b-8959-022b2f1e0c19_b956d07c-33dc-44b0-a9a1-f02f0987a241.jpg_compressed",
                            "locality": "Charminar",
                            "areaName": "Charminar",
                            "costForTwo": "₹180 for two",
                            "cuisines": [
                                "Biryani"
                            ],
                            "avgRating": 4.4,
                            "parentId": "393946",
                            "avgRatingString": "4.4",
                            "totalRatingsString": "6.0K+",
                            "sla": {
                                "deliveryTime": 49,
                                "lastMileTravel": 4.9,
                                "serviceability": "SERVICEABLE",
                                "slaString": "45-50 mins",
                                "lastMileTravelString": "4.9 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextCloseTime": "2026-04-15 23:30:00",
                                "opened": true
                            },
                            "badges": {},
                            "isOpen": true,
                            "type": "F",
                            "badgesV2": {
                                "entityBadges": {
                                    "textBased": {},
                                    "imageBased": {},
                                    "textExtendedBadges": {}
                                }
                            },
                            "aggregatedDiscountInfoV3": {
                                "header": "ITEMS",
                                "subHeader": "AT ₹69",
                                "logoCtx": {
                                    "text": "BENEFITS"
                                }
                            },
                            "orderabilityCommunication": {
                                "title": {},
                                "subTitle": {},
                                "message": {},
                                "customIcon": {},
                                "commsStyling": {}
                            },
                            "differentiatedUi": {
                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                "differentiatedUiMediaDetails": {
                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                    "lottie": {},
                                    "video": {}
                                }
                            },
                            "reviewsSummary": {},
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {},
                            "externalRatings": {
                                "aggregatedRating": {
                                    "rating": "4.3",
                                    "ratingCount": "2.4K+"
                                },
                                "source": "GOOGLE",
                                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                        },
                        "analytics": {},
                        "cta": {
                            "link": "swiggy://menu?restaurant_id=654939&source=collection&query=Biryani",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                        },
                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
                    },
                    "relevance": {
                        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                        "sectionId": "MENU_RETURN_FOOD"
                    }
                }
            },
            {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                        "info": {
                            "id": "2933",
                            "name": "Fishland Restaurant",
                            "cloudinaryImageId": "2f56d68572144ce20f44b776c399d157",
                            "locality": "Banjara Hills",
                            "areaName": "Banjara Hills",
                            "costForTwo": "₹500 for two",
                            "cuisines": [
                                "Chinese",
                                "Andhra",
                                "Biryani",
                                "Seafood"
                            ],
                            "avgRating": 4,
                            "parentId": "19234",
                            "avgRatingString": "4.0",
                            "totalRatingsString": "52K+",
                            "promoted": true,
                            "adTrackingId": "cid=f4254f8c-7538-400a-b625-925d184e9524~p=25~adgrpid=f4254f8c-7538-400a-b625-925d184e9524#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=2933~plpr=COLLECTION~eid=ec3cc923-264f-4d09-bbab-300f45e75f1d~srvts=1776259341048~collid=83639",
                            "sla": {
                                "deliveryTime": 59,
                                "lastMileTravel": 6.2,
                                "serviceability": "SERVICEABLE",
                                "slaString": "55-65 mins",
                                "lastMileTravelString": "6.2 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextCloseTime": "2026-04-15 23:00:00",
                                "opened": true
                            },
                            "badges": {},
                            "isOpen": true,
                            "type": "F",
                            "badgesV2": {
                                "entityBadges": {
                                    "imageBased": {},
                                    "textExtendedBadges": {},
                                    "textBased": {}
                                }
                            },
                            "aggregatedDiscountInfoV3": {
                                "header": "ITEMS",
                                "subHeader": "AT ₹55",
                                "logoCtx": {
                                    "text": "BENEFITS"
                                }
                            },
                            "orderabilityCommunication": {
                                "title": {},
                                "subTitle": {},
                                "message": {},
                                "customIcon": {},
                                "commsStyling": {}
                            },
                            "differentiatedUi": {
                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                "differentiatedUiMediaDetails": {
                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                    "lottie": {},
                                    "video": {}
                                }
                            },
                            "reviewsSummary": {},
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {},
                            "externalRatings": {
                                "aggregatedRating": {
                                    "rating": "3.6",
                                    "ratingCount": "3.2K+"
                                },
                                "source": "GOOGLE",
                                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                            "campaignId": "f4254f8c-7538-400a-b625-925d184e9524"
                        },
                        "analytics": {},
                        "cta": {
                            "link": "swiggy://menu?restaurant_id=2933&source=collection&query=Biryani",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                        },
                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
                    },
                    "relevance": {
                        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                        "sectionId": "MENU_RETURN_FOOD"
                    }
                }
            },
            {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                        "info": {
                            "id": "1289642",
                            "name": "Arabian bites",
                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/26/1fdee833-05b4-4c31-a291-445af131019f_1289642.jpg",
                            "locality": "Mehdipatnam",
                            "areaName": "Mehdipatnam",
                            "costForTwo": "₹149 for two",
                            "cuisines": [
                                "Arabian",
                                "Tandoor",
                                "Salads",
                                "Snacks",
                                "Pizzas",
                                "Pastas",
                                "Healthy Food",
                                "Burgers"
                            ],
                            "avgRating": 2.6,
                            "parentId": "35378",
                            "avgRatingString": "2.6",
                            "totalRatingsString": "5",
                            "sla": {
                                "deliveryTime": 52,
                                "lastMileTravel": 2.3,
                                "serviceability": "SERVICEABLE",
                                "slaString": "50-60 mins",
                                "lastMileTravelString": "2.3 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextCloseTime": "2026-04-15 23:59:00",
                                "opened": true
                            },
                            "badges": {},
                            "isOpen": true,
                            "aggregatedDiscountInfoV2": {},
                            "type": "F",
                            "badgesV2": {
                                "entityBadges": {
                                    "imageBased": {},
                                    "textExtendedBadges": {},
                                    "textBased": {}
                                }
                            },
                            "orderabilityCommunication": {
                                "title": {},
                                "subTitle": {},
                                "message": {},
                                "customIcon": {},
                                "commsStyling": {}
                            },
                            "differentiatedUi": {
                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                "differentiatedUiMediaDetails": {
                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                    "lottie": {},
                                    "video": {}
                                }
                            },
                            "reviewsSummary": {},
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "isNewlyOnboarded": true,
                            "restaurantOfferPresentationInfo": {},
                            "externalRatings": {
                                "aggregatedRating": {
                                    "rating": "--"
                                }
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                        },
                        "analytics": {},
                        "cta": {
                            "link": "swiggy://menu?restaurant_id=1289642&source=collection&query=Biryani",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                        },
                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
                    },
                    "relevance": {
                        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                        "sectionId": "MENU_RETURN_FOOD"
                    }
                }
            },
            {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                        "info": {
                            "id": "1535",
                            "name": "Paradise Biryani",
                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/3/26/fcdfc743-5641-44c0-a39d-218df4738545_1535.JPG",
                            "locality": "Masab Tank",
                            "areaName": "Masab Tank",
                            "costForTwo": "₹400 for two",
                            "cuisines": [
                                "Biryani",
                                "Kebabs",
                                "North Indian",
                                "Hyderabadi"
                            ],
                            "avgRating": 4.2,
                            "parentId": "700",
                            "avgRatingString": "4.2",
                            "totalRatingsString": "95K+",
                            "promoted": true,
                            "adTrackingId": "cid=c39cc829-b83a-4ce2-a7b2-18de8a7c4aa2~p=27~adgrpid=c39cc829-b83a-4ce2-a7b2-18de8a7c4aa2#ag3~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1535~plpr=COLLECTION~eid=0c2aaa0f-84d5-4e58-a817-deb676ac3bf3~srvts=1776259341048~collid=83639",
                            "sla": {
                                "deliveryTime": 46,
                                "lastMileTravel": 3,
                                "serviceability": "SERVICEABLE",
                                "slaString": "45-50 mins",
                                "lastMileTravelString": "3.0 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextCloseTime": "2026-04-16 00:00:00",
                                "opened": true
                            },
                            "badges": {},
                            "isOpen": true,
                            "type": "F",
                            "badgesV2": {
                                "entityBadges": {
                                    "textBased": {},
                                    "imageBased": {},
                                    "textExtendedBadges": {}
                                }
                            },
                            "aggregatedDiscountInfoV3": {
                                "header": "ITEMS",
                                "subHeader": "AT ₹99",
                                "logoCtx": {
                                    "text": "BENEFITS"
                                }
                            },
                            "orderabilityCommunication": {
                                "title": {},
                                "subTitle": {},
                                "message": {},
                                "customIcon": {},
                                "commsStyling": {}
                            },
                            "differentiatedUi": {
                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                "differentiatedUiMediaDetails": {
                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                    "lottie": {},
                                    "video": {}
                                }
                            },
                            "reviewsSummary": {},
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {},
                            "externalRatings": {
                                "aggregatedRating": {
                                    "rating": "3.9",
                                    "ratingCount": "10K+"
                                },
                                "source": "GOOGLE",
                                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                            "campaignId": "c39cc829-b83a-4ce2-a7b2-18de8a7c4aa2"
                        },
                        "analytics": {},
                        "cta": {
                            "link": "swiggy://menu?restaurant_id=1535&source=collection&query=Biryani",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                        },
                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
                    },
                    "relevance": {
                        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                        "sectionId": "MENU_RETURN_FOOD"
                    }
                }
            },
            {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                        "info": {
                            "id": "181941",
                            "name": "Hotel Svm Grand",
                            "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/10/9/56be6d03-078c-4dd6-a88a-0d85aadc6b86_51949c3a-be1a-4a85-8290-e39d15d0ee9b.jpg",
                            "locality": "Koti",
                            "areaName": "Koti",
                            "costForTwo": "₹300 for two",
                            "cuisines": [
                                "South Indian",
                                "North Indian",
                                "Chinese"
                            ],
                            "avgRating": 4.3,
                            "parentId": "102877",
                            "avgRatingString": "4.3",
                            "totalRatingsString": "2.5K+",
                            "sla": {
                                "deliveryTime": 53,
                                "lastMileTravel": 2.7,
                                "serviceability": "SERVICEABLE",
                                "slaString": "50-60 mins",
                                "lastMileTravelString": "2.7 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextCloseTime": "2026-04-15 23:00:00",
                                "opened": true
                            },
                            "badges": {},
                            "isOpen": true,
                            "type": "F",
                            "badgesV2": {
                                "entityBadges": {
                                    "imageBased": {},
                                    "textExtendedBadges": {},
                                    "textBased": {}
                                }
                            },
                            "aggregatedDiscountInfoV3": {
                                "header": "ITEMS",
                                "subHeader": "AT ₹60"
                            },
                            "orderabilityCommunication": {
                                "title": {},
                                "subTitle": {},
                                "message": {},
                                "customIcon": {},
                                "commsStyling": {}
                            },
                            "differentiatedUi": {
                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                "differentiatedUiMediaDetails": {
                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                    "lottie": {},
                                    "video": {}
                                }
                            },
                            "reviewsSummary": {},
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {},
                            "externalRatings": {
                                "aggregatedRating": {
                                    "rating": "4.0",
                                    "ratingCount": "5.0K+"
                                },
                                "source": "GOOGLE",
                                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                        },
                        "analytics": {},
                        "cta": {
                            "link": "swiggy://menu?restaurant_id=181941&source=collection&query=Biryani",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                        },
                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
                    },
                    "relevance": {
                        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                        "sectionId": "MENU_RETURN_FOOD"
                    }
                }
            },
            {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                        "info": {
                            "id": "875398",
                            "name": "All Seasons Restaurant",
                            "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/1/9/cd66b2a5-f58b-4047-8aa5-adc1eab67fac_3b9fca6d-fc9a-44bf-b29c-5193bb1e4984.jpg",
                            "locality": "SBI Executive Enclave",
                            "areaName": "Banjara Hills",
                            "costForTwo": "₹1000 for two",
                            "cuisines": [
                                "North Indian",
                                "Chinese",
                                "Tandoor",
                                "Thai",
                                "Biryani",
                                "Arabian",
                                "Desserts",
                                "Kebabs"
                            ],
                            "avgRating": 4.3,
                            "parentId": "345761",
                            "avgRatingString": "4.3",
                            "totalRatingsString": "257",
                            "promoted": true,
                            "adTrackingId": "cid=edcc27f0-547c-4ae7-8ae1-11eab1433780~p=28~adgrpid=edcc27f0-547c-4ae7-8ae1-11eab1433780#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=875398~plpr=COLLECTION~eid=45a34eff-97cb-4f99-a613-1e2496779776~srvts=1776259341048~collid=83639",
                            "sla": {
                                "deliveryTime": 71,
                                "lastMileTravel": 6.3,
                                "serviceability": "SERVICEABLE",
                                "slaString": "70-80 mins",
                                "lastMileTravelString": "6.3 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextCloseTime": "2026-04-16 00:00:00",
                                "opened": true
                            },
                            "badges": {},
                            "isOpen": true,
                            "aggregatedDiscountInfoV2": {},
                            "type": "F",
                            "badgesV2": {
                                "entityBadges": {
                                    "imageBased": {},
                                    "textExtendedBadges": {},
                                    "textBased": {}
                                }
                            },
                            "orderabilityCommunication": {
                                "title": {},
                                "subTitle": {},
                                "message": {},
                                "customIcon": {},
                                "commsStyling": {}
                            },
                            "differentiatedUi": {
                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                "differentiatedUiMediaDetails": {
                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                    "lottie": {},
                                    "video": {}
                                }
                            },
                            "reviewsSummary": {},
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {},
                            "externalRatings": {
                                "aggregatedRating": {
                                    "rating": "--"
                                }
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                            "campaignId": "edcc27f0-547c-4ae7-8ae1-11eab1433780"
                        },
                        "analytics": {},
                        "cta": {
                            "link": "swiggy://menu?restaurant_id=875398&source=collection&query=Biryani",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                        },
                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
                    },
                    "relevance": {
                        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                        "sectionId": "MENU_RETURN_FOOD"
                    }
                }
            },
            {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                        "info": {
                            "id": "464416",
                            "name": "Mehfil",
                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/3/24/6f5a3fd0-dc15-4ebe-a5b3-f9a26ec8aaaa_464416.jpg",
                            "locality": "Kv Road No 12",
                            "areaName": "Banjara Hills",
                            "costForTwo": "₹300 for two",
                            "cuisines": [
                                "Biryani",
                                "Chinese",
                                "Kebabs",
                                "Tandoor"
                            ],
                            "avgRating": 4.4,
                            "parentId": "637",
                            "avgRatingString": "4.4",
                            "totalRatingsString": "53K+",
                            "sla": {
                                "deliveryTime": 48,
                                "lastMileTravel": 4.7,
                                "serviceability": "SERVICEABLE",
                                "slaString": "45-55 mins",
                                "lastMileTravelString": "4.7 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextCloseTime": "2026-04-15 23:59:00",
                                "opened": true
                            },
                            "badges": {
                                "imageBadges": [
                                    {
                                        "imageId": "brand_cards/Badges%202026/76_Best%20in%20Shawarma2026.png",
                                        "description": "Best in Shawarma"
                                    },
                                    {
                                        "imageId": "brand_cards/Badges%202026/87_Best%20in%20Hyderabadi%20Biryani2026.png",
                                        "description": "Best in Hyderabadi Biryani"
                                    },
                                    {
                                        "imageId": "brand_cards/Badges%202026/88_Best%20in%20Late%20Night2026.png",
                                        "description": "Best in Late Night"
                                    }
                                ]
                            },
                            "isOpen": true,
                            "type": "F",
                            "badgesV2": {
                                "entityBadges": {
                                    "textBased": {},
                                    "imageBased": {
                                        "badgeObject": [
                                            {
                                                "attributes": {
                                                    "theme": "",
                                                    "imageId": "brand_cards/Badges%202026/76_Best%20in%20Shawarma2026.png",
                                                    "description": "Best in Shawarma"
                                                }
                                            },
                                            {
                                                "attributes": {
                                                    "description": "Best in Hyderabadi Biryani",
                                                    "theme": "",
                                                    "imageId": "brand_cards/Badges%202026/87_Best%20in%20Hyderabadi%20Biryani2026.png"
                                                }
                                            },
                                            {
                                                "attributes": {
                                                    "imageId": "brand_cards/Badges%202026/88_Best%20in%20Late%20Night2026.png",
                                                    "description": "Best in Late Night",
                                                    "theme": ""
                                                }
                                            }
                                        ]
                                    },
                                    "textExtendedBadges": {}
                                }
                            },
                            "aggregatedDiscountInfoV3": {
                                "header": "ITEMS",
                                "subHeader": "AT ₹29",
                                "logoCtx": {
                                    "text": "BENEFITS"
                                }
                            },
                            "orderabilityCommunication": {
                                "title": {},
                                "subTitle": {},
                                "message": {},
                                "customIcon": {},
                                "commsStyling": {}
                            },
                            "differentiatedUi": {
                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                "differentiatedUiMediaDetails": {
                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                    "lottie": {},
                                    "video": {}
                                }
                            },
                            "reviewsSummary": {},
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {},
                            "externalRatings": {
                                "aggregatedRating": {
                                    "rating": "--"
                                }
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                        },
                        "analytics": {},
                        "cta": {
                            "link": "swiggy://menu?restaurant_id=464416&source=collection&query=Biryani",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                        },
                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
                    },
                    "relevance": {
                        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                        "sectionId": "MENU_RETURN_FOOD"
                    }
                }
            },
            {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                        "info": {
                            "id": "1030896",
                            "name": "Thalaiva Biryani",
                            "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/7/2/8bf3bbe1-bccf-4067-9340-4ef0ce3caf28_4928d658-b637-4deb-8c57-b975167aaf4e.jpeg",
                            "locality": "Beside Little Flower Primary school",
                            "areaName": "Abids",
                            "costForTwo": "₹400 for two",
                            "cuisines": [
                                "Biryani",
                                "Mughlai",
                                "Lucknowi",
                                "Hyderabadi",
                                "Kebabs",
                                "Desserts",
                                "Beverages"
                            ],
                            "avgRating": 3.6,
                            "parentId": "582792",
                            "avgRatingString": "3.6",
                            "totalRatingsString": "61",
                            "sla": {
                                "deliveryTime": 46,
                                "lastMileTravel": 1.6,
                                "serviceability": "SERVICEABLE",
                                "slaString": "45-50 mins",
                                "lastMileTravelString": "1.6 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextCloseTime": "2026-04-15 23:59:00",
                                "opened": true
                            },
                            "badges": {},
                            "isOpen": true,
                            "type": "F",
                            "badgesV2": {
                                "entityBadges": {
                                    "textBased": {},
                                    "imageBased": {},
                                    "textExtendedBadges": {}
                                }
                            },
                            "aggregatedDiscountInfoV3": {
                                "header": "ITEMS",
                                "subHeader": "AT ₹89",
                                "logoCtx": {
                                    "text": "BENEFITS"
                                }
                            },
                            "orderabilityCommunication": {
                                "title": {},
                                "subTitle": {},
                                "message": {},
                                "customIcon": {},
                                "commsStyling": {}
                            },
                            "differentiatedUi": {
                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                "differentiatedUiMediaDetails": {
                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                    "lottie": {},
                                    "video": {}
                                }
                            },
                            "reviewsSummary": {},
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {},
                            "externalRatings": {
                                "aggregatedRating": {
                                    "rating": "--"
                                }
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                        },
                        "analytics": {},
                        "cta": {
                            "link": "swiggy://menu?restaurant_id=1030896&source=collection&query=Biryani",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                        },
                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
                    },
                    "relevance": {
                        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                        "sectionId": "MENU_RETURN_FOOD"
                    }
                }
            },
            {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                        "info": {
                            "id": "721104",
                            "name": "Pista House Mandi",
                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/8/b1178975-ab86-4518-9909-9edf1057fe53_721104.jpg",
                            "locality": "King Koth",
                            "areaName": "Kachiguda",
                            "costForTwo": "₹500 for two",
                            "cuisines": [
                                "Biryani",
                                "Arabian"
                            ],
                            "avgRating": 4.3,
                            "parentId": "362056",
                            "avgRatingString": "4.3",
                            "totalRatingsString": "1.2K+",
                            "sla": {
                                "deliveryTime": 49,
                                "lastMileTravel": 2.8,
                                "serviceability": "SERVICEABLE",
                                "slaString": "45-50 mins",
                                "lastMileTravelString": "2.8 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextCloseTime": "2026-04-15 23:59:00",
                                "opened": true
                            },
                            "badges": {
                                "imageBadges": [
                                    {
                                        "imageId": "brand_cards/Badges%202026/63_Best%20in%20Mandi2026.png",
                                        "description": "Best in Mandi"
                                    }
                                ]
                            },
                            "isOpen": true,
                            "aggregatedDiscountInfoV2": {},
                            "type": "F",
                            "badgesV2": {
                                "entityBadges": {
                                    "imageBased": {
                                        "badgeObject": [
                                            {
                                                "attributes": {
                                                    "description": "Best in Mandi",
                                                    "theme": "",
                                                    "imageId": "brand_cards/Badges%202026/63_Best%20in%20Mandi2026.png"
                                                }
                                            }
                                        ]
                                    },
                                    "textExtendedBadges": {},
                                    "textBased": {}
                                }
                            },
                            "orderabilityCommunication": {
                                "title": {},
                                "subTitle": {},
                                "message": {},
                                "customIcon": {},
                                "commsStyling": {}
                            },
                            "differentiatedUi": {
                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                "differentiatedUiMediaDetails": {
                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                    "lottie": {},
                                    "video": {}
                                }
                            },
                            "reviewsSummary": {},
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {},
                            "externalRatings": {
                                "aggregatedRating": {
                                    "rating": "--"
                                }
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                        },
                        "analytics": {},
                        "cta": {
                            "link": "swiggy://menu?restaurant_id=721104&source=collection&query=Biryani",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                        },
                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
                    },
                    "relevance": {
                        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                        "sectionId": "MENU_RETURN_FOOD"
                    }
                }
            },
            {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                        "info": {
                            "id": "380609",
                            "name": "AB's - Absolute Barbecues",
                            "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/10/17/28aedf7d-8a2b-477b-9c4c-5214e04f6691_29b6410c-b033-402d-917b-d76e342f5961.jpg",
                            "locality": "Banjara Hills",
                            "areaName": "Banjara Hills",
                            "costForTwo": "₹500 for two",
                            "cuisines": [
                                "Barbecue",
                                "Kebabs",
                                "Biryani"
                            ],
                            "avgRating": 4.1,
                            "parentId": "387759",
                            "avgRatingString": "4.1",
                            "totalRatingsString": "1.4K+",
                            "sla": {
                                "deliveryTime": 60,
                                "lastMileTravel": 3.7,
                                "serviceability": "SERVICEABLE",
                                "slaString": "60-70 mins",
                                "lastMileTravelString": "3.7 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextCloseTime": "2026-04-15 23:00:00",
                                "opened": true
                            },
                            "badges": {},
                            "isOpen": true,
                            "type": "F",
                            "badgesV2": {
                                "entityBadges": {
                                    "textBased": {},
                                    "imageBased": {},
                                    "textExtendedBadges": {}
                                }
                            },
                            "aggregatedDiscountInfoV3": {
                                "header": "ITEMS",
                                "subHeader": "AT ₹19"
                            },
                            "orderabilityCommunication": {
                                "title": {},
                                "subTitle": {},
                                "message": {},
                                "customIcon": {},
                                "commsStyling": {}
                            },
                            "differentiatedUi": {
                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                "differentiatedUiMediaDetails": {
                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                    "lottie": {},
                                    "video": {}
                                }
                            },
                            "reviewsSummary": {},
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {},
                            "externalRatings": {
                                "aggregatedRating": {
                                    "rating": "4.3",
                                    "ratingCount": "17K+"
                                },
                                "source": "GOOGLE",
                                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                        },
                        "analytics": {},
                        "cta": {
                            "link": "swiggy://menu?restaurant_id=380609&source=collection&query=Biryani",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                        },
                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
                    },
                    "relevance": {
                        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                        "sectionId": "MENU_RETURN_FOOD"
                    }
                }
            }
        ],
        "nextFetch": 3
    },
    "tid": "adec88d4-9d2b-4365-b9f6-89b67ab8f137",
    "sid": "qt6f1627a0f-0add-4eb5-bdc7-4f5870884",
    "deviceId": "90a41d6b-9e30-a54e-b62b-0958bd673cdc",
    "csrfToken": null
}

const Body = () => {
    return (
        <div className="body">
            <div className="serarch">
                <h1>search</h1>
            </div>
            <div className="restarents" style={{display: "flex", flexWrap: "wrap", gap:"20px", marginLeft:"60px", padding: "10px" , cursor: "pointer",}} >
            {resDataList.data.cards.map((restaruant) => (
       <RestarentsCard key={restaruant.card.card.info.id} resData = {restaruant} />
          ) )}
            </div>

        </div>

    )
};

const Footer = () => {
    return(
       <div className="footer"  style={{
        textAlign: "center",
        padding: "15px",
        border: "1px solid black",
        marginTop: "20px",
      }}
    >
          <h4>© 2026 Your Company. All Rights Reserved</h4>
       </div>
    )
};


const AppLayout = () => (
    <div className="app">
            <Header />
            <Body />
            <Footer />
    </div>

);





// const heading =  React.createElement("h1", {id: "heading"} ,  "hello world form react!");

   const root =  ReactDOM.createRoot(document.getElementById("root"));

   root.render(<AppLayout/>);