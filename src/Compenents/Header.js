import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../Utils/ReduxStore/store";
import { addUser, removeUser } from "../Utils/ReduxStore/userSlice";
import ThemeContext from "../Utils/Context/ThemeContext";
import IsLogInContext from "../Utils/Context/IsLogInContext";
import { analytics, app } from "../Utils/firebase";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { isLogIn, setIsLogIn } = useContext(IsLogInContext);
  const [btn, setBtn] = useState("dark theme");
  const cartSlice = useSelector((store) => store.cart.items);
  const userSlice = useSelector((store) => store.loggedInUser.email);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    app;
    analytics;
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        dispatch(addUser(user.email))
        navigate("/home");
      } else {
        navigate("/");
      }

    });
  }, []);

  return (
    <>
      <div
        className={"flex mb-2 justify-between  items-center " + theme.color1}
      >
        <div className="flex">
          {(userSlice!==null) ? (
            <Link to={"/home"}>
              <button
                onClick={() => {
                  setIsLogIn(true);
                  const auth = getAuth();
                  signOut(auth)
                    .then(() => {
                      // Sign-out successful.
                    })
                    .catch((error) => {
                      // An error happened.
                    });
                  dispatch(removeUser());
                }}
                className="bg-slate-100  border border-black rounded px-3 py-1 mx-1"
              >
                Sign Out
              </button>
            </Link>
          ) : !isLogIn ? (
            <Link to={"/"}>
              <button
                onClick={() => setIsLogIn(!isLogIn)}
                className="bg-slate-100  border border-black rounded px-3 py-1 mx-1"
              >
                Log in
              </button>
            </Link>
          ) : (
            <Link to={"/"}>
              <button
                onClick={() => setIsLogIn(!isLogIn)}
                className="bg-slate-100  border border-black rounded px-3 py-1 mx-1"
              >
                Sign up
              </button>
            </Link>
          )}
          <button
            onClick={() => {
              btn === "dark theme"
                ? (setBtn("light theme"),
                  setTheme({
                    color1: "bg-gray-200",
                    color2: "bg-slate-400",
                  }))
                : (setBtn("dark theme"),
                  setTheme({
                    color1: "bg-yellow-100",
                    color2: "bg-yellow-200",
                  }));
            }}
            className="bg-slate-100 border border-black rounded px-3 py-1 mx-"
          >
            {btn}
          </button>
        </div>
        <div className="flex w-60 justify-center">
          <h1 className="text-2xl">MEAL KINGS</h1>
        </div>
        <div className="flex justify-evenly mr-4 ">
          <h2 className="p-2 text-xl  hover:text-orange-500">
            <Link to={"/home"}>HOME</Link>
          </h2>
          <h2 className="p-2 text-xl  hover:text-orange-500">
            <Link to={"/about"}>ABOUT</Link>
          </h2>
          <h2 className="p-2 text-xl  hover:text-orange-500">
            <Link to={"/cart"}>
              CART
              <p className="text-sm">{cartSlice.length} items</p>
            </Link>
          </h2>
        </div>
      </div>
    </>
  );
};
export default Header;
