import { useEffect,useState } from "react";
import {useParams} from "react-router-dom"
import Shimmer from "./Shimmer";

const Restaurant =()=>{

    const {resId} = useParams()

    const [restaurant,setRestaurant]=useState([])
    useEffect(()=>{
        menu();
    },[])

     async function menu(){
        const str = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.71700&lng=75.83370&restaurantId="+resId+"&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER"
        const data = await fetch(str);
        const json = await data.json()
        setRestaurant(json);
        {console.log(json)}
    }
    return (restaurant.length===0)?(<Shimmer/>):(
        <>
            <div className="flex justify-evenly m-auto border-orange-500 border-b-2 border-t-2 py-4 mb-4">
                    
                <div className="mr-4">
                    
                       {
                        <img className="w-96 h-56 object-cover" alt="image" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+restaurant?.data?.cards[2].card.card.info.cloudinaryImageId}></img>
                       }        
                        <div className="restaurantDetail">     
                            <p className="text-xl">{restaurant?.data?.cards[2]?.card?.card?.info?.name}</p>
                            <p>Area : {restaurant?.data?.cards[2]?.card?.card?.info?.areaName}</p>
                            <p>locality : {restaurant?.data?.cards[2]?.card?.card?.info?.locality}</p>
                            <p>Rating {restaurant?.data?.cards[2]?.card?.card?.info?.avgRating}</p>
                        </div>
                </div>
                <div className="flex flex-col ml-4">
                {
                    restaurant?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map((e)=>{
                        return (
                            <>
                                    <p>
                                        <li key={e?.card?.info?.id}>
                                            {e?.card?.info?.name}
                                        </li>
                                    </p>
                            </>
                        )
                    })
                }
                </div>
            </div>
        </>
    )
}
export default Restaurant;


