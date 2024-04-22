import { useEffect,useState } from "react";
import {useParams} from "react-router-dom"
import Shimmer from "./Shimmer";
import { useDispatch } from "react-redux";
import { addItem } from "../Utils/cartSlice";

const Restaurant =()=>{

    const {resId} = useParams()
    const dispatch = useDispatch()

    const [restaurant,setRestaurant]=useState([])
    useEffect(()=>{
        menu();
    },[])

     async function menu(){
        const str = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.71700&lng=75.83370&restaurantId="+resId+"&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER"
        const data = await fetch(str);
        const json = await data.json()
        setRestaurant(json);
        // {console.log(json)}
    }
    return (restaurant.length===0)?(<Shimmer/>):(
        <>
            <div className="flex flex-col justify-center m-auto py-4 mb-4">
                    
                <div className="m-auto flex w-2/3 justify-center rounded-lg bg-white ">
                    
                       {
                        <img className="border border-black w-96 h-56 mr-4 object-cover" alt="image" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+restaurant?.data?.cards[2].card.card.info.cloudinaryImageId}></img>
                       }        
                        <div className="restaurantDetail">     
                            <p className="text-xl">{restaurant?.data?.cards[2]?.card?.card?.info?.name}</p>
                            <p>Area : {restaurant?.data?.cards[2]?.card?.card?.info?.areaName}</p>
                            <p>locality : {restaurant?.data?.cards[2]?.card?.card?.info?.locality}</p>
                            <p>Rating {restaurant?.data?.cards[2]?.card?.card?.info?.avgRating}</p>
                        </div>
                </div>
                <div className="flex flex-col  m-auto w-3/5 mt-1 ">
                {
                    restaurant?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map((e)=>{
                        return (
                            <>
                                <div className="flex justify-between rounded-lg overflow-hidden  w-full h-max m-1 bg-white" key={self.crypto.randomUUID()}>
                                    <div className=" pl-2 w-4/5 text-gray-500" >
                                        <p className="text-xl text-gray-600 bo font-semibold ">{e?.card?.info?.name}</p>
                                        {(e?.card?.info?.description.length>0)?((e?.card?.info?.description.length>173)?<p className="text-sm">{(e?.card?.info?.description.slice(0,170))}...</p>:<p className="text-sm">{(e?.card?.info?.description)}</p>):<></>}
                                        {(e?.card?.info?.ratings?.aggregatedRating?.rating>0)?<p className="text-green-600 font-medium">Rating : {e?.card?.info?.ratings?.aggregatedRating?.rating}</p>:<></>}
                                        {(e?.card?.info?.price>0)?<p className="font-medium text-gray-500">{(e?.card?.info?.price)/100} Rupees</p>:<></>}
                                    </div>

                                    
                                        
                                    <div className="w-28 rounded-lg">
                                        <img className="h-24 w-32" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+e.card.info.imageId} ></img>
                                        <button className=" bg-green-600 text-white  px-2 h-min w-full" onClick={()=>{
                                            dispatch(addItem(e))
                                        }}>Add Item</button>
                                    </div>
                                </div>
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


