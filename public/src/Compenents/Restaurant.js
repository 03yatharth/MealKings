import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../Utils/ReduxStore/cartSlice";
import { store } from "../Utils/ReduxStore/store";

const Restaurant = () => {
  const { resId } = useParams();
  const dispatch = useDispatch();
  const cartSlice = useSelector((store) => store.cart.items);
  const quantity = useSelector((store) => store.cart.quantity);
  const [restaurant, setRestaurant] = useState([]);
  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    menu();
  }, []);
  async function menu() {
    const str =
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.71700&lng=75.83370&restaurantId=" +
      resId +
      "&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER";
    const data = await fetch(str);
    const json = await data.json();
    setRestaurant(json);
    // console.log(json)
  }
  return restaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      {/* <ItemCountContext.Provider value={{itemCount:itemCount,setItemCount:setItemCount}}> */}
      <div className="flex flex-col justify-center m-auto py-4 mb-4">
        <div className="m-auto flex flex-col sm:flex-row w-2/3 justify-center rounded-lg bg-white ">
          {
            <img
              className="border border-black w-full h-[40vw] sm:w-96 sm:h-56 mr-4 object-cover"
              alt="image"
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                restaurant?.data?.cards[2].card.card.info.cloudinaryImageId
              }
            ></img>
          }
          <div className="px-2 py-1 sm:p-0">
            <p className="text-xl">
              {restaurant?.data?.cards[2]?.card?.card?.info?.name}
            </p>
            <p>
              Area : {restaurant?.data?.cards[2]?.card?.card?.info?.areaName}
            </p>
            <p>
              locality :{" "}
              {restaurant?.data?.cards[2]?.card?.card?.info?.locality}
            </p>
            <p>
              Rating {restaurant?.data?.cards[2]?.card?.card?.info?.avgRating}
            </p>
          </div>
        </div>
        <div className="flex flex-col  m-auto w-4/5 sm:w-3/5 mt-1 ">
          {restaurant?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map(
            (e) => {
              return (
                <>
                  <div
                    className="flex justify-between rounded-lg overflow-hidden  w-full h-max m-1 bg-white"  key={self.crypto.randomUUID()}
                  >
                    <div className=" pl-2 w-4/5 text-gray-500" key={self.crypto.randomUUID()}>
                      <p className="text-sm sm:text-xl text-[4vw] text-gray-600 bo font-semibold ">
                        {e?.card?.info?.name}
                      </p>
                      {e?.card?.info?.description?.length > 0 ? (
                        e?.card?.info?.description?.length > 173 ? (
                          <p className="text-[10px] sm:text-sm">
                            {e?.card?.info?.description.slice(0, 170)}...
                          </p>
                        ) : (
                          <p className="text-[10px] sm:text-sm">
                            {e?.card?.info?.description}
                          </p>)
                      ) : (
                        <></>
                      )}
                      {e?.card?.info?.ratings?.aggregatedRating?.rating > 0 ? (
                        <p className="text-[13px] sm:text-md text-green-600 font-medium">
                          Rating :{" "}
                          {e?.card?.info?.ratings?.aggregatedRating?.rating}
                        </p>
                      ) : (
                        <></>
                      )}
                      {e?.card?.info?.price > 0 ? (
                        <p className="text-[13px] sm:text-md font-medium text-gray-500">
                          {e?.card?.info?.price / 100} Rupees
                        </p>
                      ) : (
                        <></>
                      )}
                    </div>

                    <div className="w-28 rounded-lg">
                      <img
                        className="h-24 w-32"
                        src={
                          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                          e.card.info.imageId
                        }
                      ></img>
                      {/* {console.log(cartSlice)}
                                        {console.log(e)} */}
                      {!cartSlice.find(
                        (obj) => obj?.card?.info?.id === e?.card?.info?.id
                      ) ? (
                        <button
                          className=" bg-green-600 text-white  px-2 h-min w-full"
                          onClick={() => {
                            dispatch(addItem({ e, itemCount }));
                            setItemCount(itemCount + 1);
                          }}
                        >
                          Add Item
                        </button>
                      ) : (
                        <div className="flex justify-between">
                          <button
                            className="flex justify-center  bg-green-500 text-white h-min w-1/3"
                            onClick={() => {
                              setItemCount(itemCount - 1);
                              dispatch(removeItem(e));
                            }}
                          >
                            -
                          </button>
                          <p className="flex justify-center bg-green-600 text-white   h-min w-1/3">
                            {
                              cartSlice.filter(
                                (obj) => obj?.card?.info?.id === e.card.info.id
                              ).length
                            }
                          </p>
                          <button
                            className="flex justify-center bg-green-500 text-white   h-min w-1/3"
                            onClick={() => {
                              dispatch(addItem({ e, itemCount }));
                              setItemCount(itemCount + 1);
                            }}
                          >
                            +
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </>
              );
            }
          )}
        </div>
      </div>
    </>
  );
};
export default Restaurant;
