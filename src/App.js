import React from "react";
import ReactDOM  from "react-dom/client";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Header from "../src/Compenents/Header";
import Body from "../src/Compenents/Body";
import Footer from "../src/Compenents/Footer"
import About from "../src/Compenents/About"
import Contact from "../src/Compenents/Contact"
import Restaurant from "../src/Compenents/Restaurant";

const AppLayout = ()=>{
    return (<>
        <Header/>
        <Outlet/>
        <Footer/>
    </>)
}
const router = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {path:"/",element:<Body/>},
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