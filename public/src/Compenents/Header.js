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
        className={"max-w-full overflow-hidden flex mb-2 justify-between  items-center " + theme.color1}
      >
        <div className="flex items-center justify-center" >
          {(userSlice!==null) ? (
            <Link to={"/home"} >
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
                className="bg-slate-100  border border-black rounded w-max px-1 py-1 h-max mx-1 text-[10px] sm:px-3 sm:py-1 sm:mx-1 sm:text-xl "
              >
                Sign Out
              </button>
            </Link>
          ) : !isLogIn ? (
            <Link to={"/"}>
              <button
                onClick={() => setIsLogIn(!isLogIn)}
                className="bg-slate-100  border border-black rounded w-max px-1 py-1 h-max mx-1 text-[10px] sm:px-3 sm:py-1 sm:mx-1 sm:text-xl "
                >
                Log in
              </button>
            </Link>
          ) : (
            <Link to={"/"}>
              <button
                onClick={() => setIsLogIn(!isLogIn)}
                className="bg-slate-100  border border-black rounded w-max px-1 py-1 h-max mx-1 text-[10px] sm:px-3 sm:py-1 sm:mx-1 sm:text-xl "
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
            className="bg-slate-100 border border-black rounded w-max h-max mt-[3px] px-1 py-1 mx-1 text-[10px] sm:px-3 sm:py-1 sm:mx-1 sm:text-xl"
          >
            {btn}
          </button>
        </div>
        <div className="h-max flex w-60 justify-center">
          <h1 className="px-0 py-0 text-sm sm:text-2xl">MEAL KINGS</h1>
        </div>
        <div className="flex justify-evenly mr-1 sm:mr-4 ">
          <p className="px-1 py-0 h-min text-[10px] sm:p-2 sm:text-xl  hover:text-orange-500">
            <Link to={"/home"}>HOME</Link>
          </p>
          <p className="px-1 py-0 h-min text-[10px] sm:p-2 sm:text-xl  hover:text-orange-500">
            <Link to={"/about"}>ABOUT</Link>
          </p>
          <p className="px-1 py-0 h-min text-[10px] sm:p-2 sm:text-xl  hover:text-orange-500">
            <Link to={"/cart"}>
              CART
              <p className="py-0 text-[10px] sm:text-sm">{cartSlice.length} items</p>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};
export default Header;
