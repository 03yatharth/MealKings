import { foods } from "../../src/Utils/Constant";
const Shimmer = () => {
    return (
    <>
      <div className="flex flex-col justify-items-center">
  
      <div className="m-auto" key={4}>
            <input
              type="search"
              placeholder="Search"
              className="border-black border-2 rounded-xl p-1"
              key={1}
            ></input>
            <input
              type="button"
              value={"Search"}
              className="border-black border-2 w-20 mx-2 rounded-xl p-1 bg-white"
              key={2}
            ></input>
          </div>
  
          <div className="flex p-2 m-2 overflow-scroll no-scrollbar h-40  " key={5}>
            {foods.map((e) => {
              {console.log(e)}
              return (
                <div key={e.id} className="foodCard flex-shrink-0 h-full">
                  <img
                    src={
                      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/" +
                      e.imageId
                    }
                    alt="text"
                    className="h-full object-cover shadow-lg "
                  ></img>
                </div>
              );
            })}
          </div>
          <div className="flex flex-wrap m-2 p-2 justify-evenly" key={6}>
          {
            Array(18).fill("").map((index)=>{
              return <div key = {index} className="w-48 h-44 object-cover m-2 bg-slate-200" ></div>
            })
          }
          </div>
          
      </div>
    </>);
  };
  export default Shimmer;