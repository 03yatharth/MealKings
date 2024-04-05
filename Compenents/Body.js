import { foods } from "../src/Constant";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const filterData = (inputText, allRestaurantData) => {
  return allRestaurantData.filter((allRestaurantData) =>
    allRestaurantData.info.name.includes(inputText)
  );
};



const Body = () => {
  const [inputText, SetInputText] = useState("");
  const [allRestaurantData, SetAllRestaurantData] = useState([]);
  const [fillteredRestaurantData, SetFillteredRestaurantData] = useState([]);

  useEffect(() => {
    getRestaurant();
  }, []);

  async function getRestaurant() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.71700&lng=75.83370&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const fetchRestaurant =
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
    SetAllRestaurantData(fetchRestaurant);
    SetFillteredRestaurantData(fetchRestaurant);
  }

  return (fillteredRestaurantData.length===0)?<Shimmer/> : (
    <>
      <div className="body">
        <div className="searchField">
          <input
            type="search"
            placeholder="Search"
            className="searchBar"
            value={inputText}
            onChange={(e) => {
              SetInputText(e.target.value);
            }}
          ></input>
          <input
            type="button"
            value={"Search"}
            className="searchBtn"
            onClick={(e) => {
              const data = filterData(inputText, allRestaurantData);
              SetFillteredRestaurantData(data);
            }}
          ></input>
        </div>

        <div className="meals">
          {foods.map((e) => {
            return (
              <div className="foodCard">
                <img
                  src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/" +
                    e.imageId
                  }
                  alt="text"
                ></img>
              </div>
            );
          })}
        </div>

        
        <div className="restaurant">
          {fillteredRestaurantData.map((e) => {
            return (
              <div className="restaurantCard">
                <img
                  src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                    e.info.cloudinaryImageId
                  }
                  alt="text"
                ></img>
                <h4>{e.info.name}</h4>
                <h5>{e.info.locality}</h5>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Body;
