import { useDispatch, useSelector } from "react-redux";
import { store } from "../Utils/store";
import { removeItem,clearItem } from "../Utils/cartSlice";

const Cart =()=>{
    const cartSlice = useSelector(store=>store.cart.items)
    const dispatch = useDispatch()
    return(
        <>
            <p className="text-3xl flex justify-center mb-2">Your favorite items are here </p>
            <button className="bg-slate-100 border border-black relative left-[90vw] w-24 -top-8" onClick={(e)=>{
                dispatch(clearItem())
            }}>Clear Cart</button>
            <div id={123}>
                {cartSlice.map((e)=>{
                    return (
                        <div key={self?.crypto?.randomUUID()} className="flex justify-between rounded-lg overflow-hidden  w-3/4 h-max m-auto mb-1 bg-white">
                            <div className=" pl-2 w-4/5 text-gray-500" >
                                <p className="text-xl text-gray-600 bo font-semibold ">{e?.card?.info?.name}</p>
                                {(e?.card?.info?.description.length>0)?((e?.card?.info?.description.length>173)?<p className="text-sm">{(e?.card?.info?.description.slice(0,170))}...</p>:<p className="text-sm">{(e?.card?.info?.description)}</p>):<></>}
                                {(e?.card?.info?.ratings?.aggregatedRating?.rating>0)?<p className="text-green-600 font-medium">Rating : {e?.card?.info?.ratings?.aggregatedRating?.rating}</p>:<></>}
                                {(e?.card?.info?.price>0)?<p className="font-medium text-gray-500">{(e?.card?.info?.price)/100} Rupees</p>:<></>}
                            </div>     
                            <div className="w-28 rounded-lg">
                                <img className="h-24 w-32" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+e.card.info.imageId} ></img>
                                <button className=" bg-green-600 text-white  px-2 h-min w-full" onClick={()=>{
                                    // let count=0
                                    // const indexIs =()=>{
                                    //     cartSlice.map((i)=>{
                                    //         // (i.id==e.name)?( count):count++
                                    //         (e.name==i.name)?console.log(count):count++
                                    //     })
                                    // }
                                    dispatch(removeItem(e))
                                }}>Remove Item</button>
                            </div>
                        </div>
                    )
                })}
            </div>

            
        </>
    )
}

export default Cart;