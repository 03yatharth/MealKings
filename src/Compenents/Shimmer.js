import { foods } from "../Constant";
const Shimmer = () => {
  // let uuid = self.crypto.randomUUID();
  // console.log(uuid);
    return (
    <>
      <div className="flex flex-col justify-items-center">
  
      <div className="m-auto">
            <input
              type="search"
              placeholder="Search"
              className="border-black border-2 rounded-xl p-1"
            ></input>
            <input
              type="button"
              value={"Search"}
              className="border-black border-2 w-20 mx-2 rounded-xl p-1"
            ></input>
          </div>
  
          <div className="flex p-2 ">
            {foods.map((e) => {
              return (
                <div key={self.crypto.randomUUID()} className="foodCard">
                  <img
                    src={
                      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/" +
                      e.imageId
                    }
                    alt="text"
                    className="h-24 w-48 object-cover shadow-lg"
                  ></img>
                </div>
              );
            })}
          </div>
          <div className="flex flex-wrap m-2 p-2 justify-evenly">
          {
            Array(18).fill("").map(()=>{
              return <div key = {self.crypto.randomUUID()} className="w-48 h-44 object-cover m-2 bg-slate-200" ></div>
            })
          }
          </div>
          
      </div>
    </>);
  };
  export default Shimmer;