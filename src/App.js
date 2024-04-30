import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "../src/Compenents/Header";
import Body from "../src/Compenents/Body";
import Footer from "../src/Compenents/Footer";
import About from "../src/Compenents/About";
import Cart from "../src/Compenents/Cart";
import Restaurant from "../src/Compenents/Restaurant";
import ThemeContext from "./Utils/Context/ThemeContext";
import { store } from "./Utils/ReduxStore/store";
import { Provider } from "react-redux";
import Login from "./Compenents/Login";
import IsLogInContext from "./Utils/Context/IsLogInContext";

const AppLayout = () => {
  const [theme, setTheme] = useState({
    color1: "bg-yellow-100",
    color2: "bg-yellow-200",
  });
  const [isLogIn, setIsLogIn] = useState(true);

  return (
    <>
      <Provider store={store}>
        <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
          <IsLogInContext.Provider
            value={{ isLogIn: isLogIn, setIsLogIn: setIsLogIn }}
          >
            <div className={"p-0 m-0 " + theme.color2}>
              <Header />
              <Outlet />
              <Footer />
            </div>
          </IsLogInContext.Provider>
        </ThemeContext.Provider>
      </Provider>
    </>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/home", element: <Body /> },
      { path: "/", element: <Login /> },
      { path: "/about", element: <About /> },
      { path: "/Cart", element: <Cart /> },
      { path: "/restaurant/:resId", element: <Restaurant /> },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
