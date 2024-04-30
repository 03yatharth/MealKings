import React, { useContext, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/ReduxStore/userSlice";
import IsLogInContext from "../Utils/Context/IsLogInContext";
import { checkValid } from "../Utils/validate";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { analytics, app, firebaseConfig } from "../Utils/firebase";


const Login = () => {

  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch()
  const { isLogIn, setIsLogIn } = useContext(IsLogInContext)
  const [errorMessage, setErrMessage] = useState("");
  handleOnClick = () => {
    checkValid(email, password) !== null
      ? setErrMessage(checkValid(email, password))
      : setErrMessage("");
    app;
    analytics;
    const auth = getAuth();
    // Signed up
    if (isLogIn === false) {
      createUserWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          dispatch(addUser(user.email));
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage("Email ID already exist !!");
        });
    } else {
      // Signed in
      signInWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          dispatch(addUser(user.email));
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage("Email ID and Password is not matched.");
        });
    }
  };
  return (
    <div className="flex justify-center items-center bg-gradient-to-tl from-purple-900 to-blue-700 min-h-max w-full p-10 ">
      <div className="rounded-lg flex flex-col items-center justify-evenly  bg-gradient-to-tl from-yellow-400 to-orange-400 shadow-lg m-auto  w-1/3 min-h-max p-6">
        {isLogIn ? (
          <p className="font-bold text-3xl  text-white">This is login page</p>
        ) : (
          <p className="font-bold text-3xl text-white">This is sign up page</p>
        )}

        <div className="my-5  flex flex-col items-center">
          <input
            ref={email}
            className="my-1 bg-gradient-to-tl to-yellow-200 from-yellow-300 p-2"
            type="text"
            placeholder="username"
          ></input>
          <input
            ref={password}
            className="my-1 bg-gradient-to-tl to-yellow-200 from-yellow-300 p-2"
            type="text"
            placeholder="password"
          ></input>
          <button
            className="my-3 bg-gradient-to-tl to-yellow-200 from-yellow-300 rounded w-20 border border-black"
            onClick={(e) => {
              handleOnClick();
            }}
          >
            Submit
          </button>
          <p className="text-[#ff0000] font-semibold">{errorMessage}</p>
        </div>
        {!isLogIn ? (
          <div>
            <p>Already have a account?</p>
            <button
              className="font-semibold"
              onClick={() => {
                setIsLogIn(true);
              }}
            >
              log In
            </button>
          </div>
        ) : (
          <div>
            <p>Don't have a account?</p>
            <button
              className="font-semibold"
              onClick={() => {
                setIsLogIn(false);
              }}
            >
              Sign up now
            </button>
          </div>
        )}
      </div>
    </div>
  );

};

export default Login;
