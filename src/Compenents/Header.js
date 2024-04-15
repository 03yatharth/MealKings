import { Link } from "react-router-dom";
import ThemeContext from "./ThemeContext";
import { useContext, useState } from "react";

const Header =()=>{
    const {theme,setTheme}=useContext(ThemeContext)
    const [btn,setBtn]=useState("dark theme")
    return(
        <>
            <div className={"flex mb-2 justify-between items-center "+theme.color1 }>
                <div className="flex">
                    <p className="bg-slate-100  border border-black rounded px-3 py-1 mx-1">Log in</p>                
                    <button onClick={()=>{ 
                        (btn==="dark theme")?
                        (setBtn("light theme"),
                        setTheme({
                            color1:"bg-gray-200",
                            color2:"bg-slate-400"
                        })
                    )
                        :
                        (setBtn("dark theme"),
                        setTheme({
                            color1:"bg-yellow-100",
                            color2:"bg-yellow-200"
                        }))
                            
                    }} className="bg-slate-100 border border-black rounded px-3 py-1 mx-">{btn}</button>                
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