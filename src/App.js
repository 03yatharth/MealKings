import React from "react";
import ReactDOM  from "react-dom/client";
import Header from "../Compenents/Header";
import Body from "../Compenents/Body";
import Footer from "../Compenents/Footer"
const Container = ()=>{
    return (<>
        <Header/>
        <Body/>
        <Footer/>
    </>)
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Container/>);