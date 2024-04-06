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
            <div className="menu">
                    
                <div className="restaurantDetail">
                    
                       {
                        <img className="img" alt="image" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+restaurant?.data?.cards[2].card.card.info.cloudinaryImageId}></img>
                       }        
                        <div className="restaurantDetail">     
                            <h3>{restaurant?.data?.cards[2]?.card?.card?.info?.name}</h3>
                            <p>{restaurant?.data?.cards[2]?.card?.card?.info?.areaName}</p>
                            <p>{restaurant?.data?.cards[2]?.card?.card?.info?.locality}</p>
                            <p>{restaurant?.data?.cards[2]?.card?.card?.info?.avgRating}</p>
                        </div>
                </div>
                {
                    restaurant?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map((e)=>{
                        return (
                            <>
                                <div className="menuItem">
                                    <p>
                                        <li key={e?.card?.info?.id}>
                                            {e?.card?.info?.name}
                                        </li>
                                    </p>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}
export default Restaurant;


