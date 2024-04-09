import { Link } from "react-router-dom";
const Header =()=>{
    return(
        <>
            <div className="flex my-2 justify-between items-center  ">
                <div className="w-60">
                    <img className="w-28 h-28" src="https://th.bing.com/th/id/OIP.khpSr5IBo1NAqcyrZU1cJAHaHa?rs=1&pid=ImgDetMain" alt="logo"></img>
                </div>
                <div className="flex w-60 justify-center">
                    <h1 className="text-2xl">MEAL KINGS</h1>
                </div>
                <div className="flex justify-evenly mr-4  w-60">
                    <h2 className="p-2 text-xl  hover:text-orange-500"><Link to={"/"} >HOME</Link></h2>
                    <h2 className="p-2 text-xl  hover:text-orange-500"><Link to={"/about"} >ABOUT</Link></h2>
                    <h2 className="p-2 text-xl hover:text-orange-500"><Link to={"/contact"} >CONTACT</Link></h2>
                </div>
            </div>
        </>
    )
}
export default Header;