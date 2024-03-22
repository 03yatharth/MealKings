import React from "react";
import ReactDOM  from "react-dom/client";

const Container = ()=>{
    return (<>
        <Header/>
    </>)
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Container/>);