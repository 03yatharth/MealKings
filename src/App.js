import React,{useState} from "react";
import ReactDOM  from "react-dom/client";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Header from "../src/Compenents/Header";
import Body from "../src/Compenents/Body";
import Footer from "../src/Compenents/Footer"
import About from "../src/Compenents/About"
import Contact from "../src/Compenents/Contact"
import Restaurant from "../src/Compenents/Restaurant";
import ThemeContext from "./Compenents/ThemeContext";

const AppLayout = ()=>{
    const [theme,setTheme]=useState({
        color1:"bg-yellow-100",
        color2: "bg-yellow-200"
    })
    return (<>
        <ThemeContext.Provider value={{theme:theme,setTheme:setTheme}}>
            <div className={ "p-0 m-0 "+theme.color2}>
            <Header />
            <Outlet />
            <Footer />
            </div>
        </ThemeContext.Provider>
    </>)
}
const router = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {path:"/",element:<Body />},
            {path:"/about",element:<About/>},
            {path:"/contact",element:<Contact/>},
            {path:"/restaurant/:resId",element:<Restaurant/>}
        ],
        
    },

])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
        <RouterProvider router={router}/>
    );