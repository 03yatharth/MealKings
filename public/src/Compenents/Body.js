import { foods } from "../Utils/Constant";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import ThemeContext from "../Utils/Context/ThemeContext";

const filterData = (inputText, allRestaurantData) => {
  return allRestaurantData.filter((allRestaurantData) =>
    allRestaurantData.info.name.toLowerCase().includes(inputText.toLowerCase())
  );
};

const Body = () => {
  const [inputText, SetInputText] = useState("");
  const [allRestaurantData, SetAllRestaurantData] = useState([]);
  const [fillteredRestaurantData, SetFillteredRestaurantData] = useState([]);
  const {theme}=useContext(ThemeContext)

  useEffect(() => {
    getRestaurant();
  }, []);

  async function getRestaurant() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.71700&lng=75.83370&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const fetchRestaurant =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    SetAllRestaurantData(fetchRestaurant);
    SetFillteredRestaurantData(fetchRestaurant);
  }

  return (fillteredRestaurantData?.length===0)?<Shimmer/> : (
    <>
      <div className="flex flex-col justify-items-center">
        <div className="m-auto ">
          <input

            type="search"
            placeholder="Search"
            className="border-black border-2 rounded-xl p-1"
            value={inputText}
            onChange={(e) => {
              SetInputText(e.target.value);
            }}
          ></input>
          <input
            type="button"
            value={"Search"}
            className="border-black border-2 w-20 mx-2 rounded-xl p-1 bg-white m-2"
            onClick={(e) => {
              const data = filterData(inputText, allRestaurantData);
              SetFillteredRestaurantData(data);
            }}
          ></input>
        </div>
        

        <div className={" flex p-2 "+theme.color1}>
          {foods.map((e) => {
            return (
              <div  key={self.crypto.randomUUID()} >
                <img
                  src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/" +
                    e.imageId
                  }
                  className="h-full object-cover shadow-lg "
                  alt="text"
                ></img>
              </div>
            );
          })}
        </div>

        
        <div className="flex flex-wrap m-2 p-2 justify-evenly">
          {fillteredRestaurantData?.map((e) => {
            return (
              <div key={e.info.id}  className={"h-44 w-48 p-2 m-3 shadow-lg "+theme.color1}>
                
                <Link to = {"/restaurant/"+e.info.id} >
                <img
                  src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                    e?.info?.cloudinaryImageId
                  }
                  className="w-48 h-24 object-cover"
                  alt="image"
                ></img>
                </Link>
                
                <Link to = {"/restaurant/"+e.info.id}  className="link">
                <h4 className="text-md font-bol text-wrap">{e.info.name}</h4>
                <h5>{e.info.locality}</h5>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Body;
