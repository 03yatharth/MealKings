import { foods } from "../src/Constant";
import { restaurant } from "../src/Constant";
import { useState } from "react";

const filterData = (inputText, restaurantData) => {
  return restaurant.filter((restaurantData) =>
    restaurantData.info.name.includes(inputText)
  );
};

const Body = () => {
  const [inputText, SetInputText] = useState("");
  const [restaurantData, SetRestaurantData] = useState(restaurant);
  return (
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
              const data = filterData(inputText, restaurantData);
              SetRestaurantData(data);
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
          {restaurantData.map((e) => {
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
