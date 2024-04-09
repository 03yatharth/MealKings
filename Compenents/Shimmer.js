import { foods } from "../src/Constant";
const Shimmer = () => {
  // let uuid = self.crypto.randomUUID();
  // console.log(uuid);
    return (
    <>
      <div className="shimmer">
  
      <div className="searchField">
            <input
              type="search"
              placeholder="Search"
              className="searchBar"
            ></input>
            <input
              type="button"
              value={"Search"}
              className="searchBtn"
            ></input>
          </div>
  
          <div className="meals">
            {foods.map((e) => {
              return (
                <div key={self.crypto.randomUUID()} className="foodCard">
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
          
          {
            Array(18).fill("").map(()=>{
              return <div key = {self.crypto.randomUUID()} className="shimmerCard"></div>
            })
          }
          
      </div>
    </>);
  };
  export default Shimmer;