import { useDispatch, useSelector } from "react-redux";
import { useContext, useState } from "react";
import { store } from "../Utils/store";
import { addItem, removeItem, clearItem } from "../Utils/cartSlice";

const Cart = () => {
  const cartSlice = useSelector((store) => store.cart.items);
  const [itemCount, setItemCount] = useState(0);
  const dispatch = useDispatch();

  return (
    <>
      <p className="text-3xl flex justify-center mb-2 ">
        Items added to cart are here
      </p>
      <button
        className="bg-slate-100 border border-black relative left-[90vw] w-24 -top-8"
        onClick={(e) => {
          dispatch(clearItem());
        }}
      >
        Clear Cart
      </button>
      <div >
        {console.log(cartSlice)}
        {[...new Set(cartSlice)].map((e) => {
          return (
            <>
              {!cartSlice.find(
                (obj) => obj?.card?.info?.id === e?.card?.info?.id
              ) ? (
                <></>
              ) : (
                <div
                  key={self?.crypto?.randomUUID()}
                  className="flex justify-between shadow-2xl rounded-lg overflow-hidden w-3/4 h-max m-auto mb-1 bg-white"
                >
                  <div className=" pl-2 w-4/5  text-gray-500">
                    <p className="text-xl text-gray-600 bo font-semibold ">
                      {e?.card?.info?.name}
                    </p>
                    {e?.card?.info?.description?.length > 0 ? (
                      e?.card?.info?.description?.length > 215 ? (
                        <p className="text-sm">
                          {e?.card?.info?.description.slice(0, 215)+"..."} 
                          
                        </p>
                      ) : (
                        <p className="text-sm">{e?.card?.info?.description}</p>
                      )
                    ) : (
                      <></>
                    )}
                    {e?.card?.info?.ratings?.aggregatedRating?.rating > 0 ? (
                      <p className="text-green-600 font-medium">
                        Rating :{" "}
                        {e?.card?.info?.ratings?.aggregatedRating?.rating}
                      </p>
                    ) : (
                      <></>
                    )}
                    {e?.card?.info?.price > 0 ? (
                      <p className="font-medium text-gray-500">
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
                          dispatch(addItem({ e, itemCount })),
                            setItemCount(itemCount + 1);
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </>
          );
        })}
      </div>
    </>
  );
};

export default Cart;