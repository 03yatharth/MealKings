import { Link } from "react-router-dom";
const Header =()=>{
    return(
        <>
            <div className="header">
                <div className="topLeft">
                    <img src="https://th.bing.com/th/id/OIP.khpSr5IBo1NAqcyrZU1cJAHaHa?rs=1&pid=ImgDetMain" alt="logo"></img>
                </div>
                <div className="topCenter">
                    <h1>MEAL KINGS</h1>
                </div>
                <div className="topRight">
                    {/* <h2></h2>
                    <h2></h2>
                    <h2></h2>
                     */}
                    <h2><Link to={"/"} className="link">HOME</Link></h2>
                    <h2><Link to={"/about"} className="link">ABOUT</Link></h2>
                    <h2><Link to={"/contact"} className="link">CONTACT</Link></h2>
                </div>
            </div>
        </>
    )
}
export default Header;