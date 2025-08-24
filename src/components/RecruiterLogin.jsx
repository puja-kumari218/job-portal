import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const RecruiterLogin = () => {
  const [state, setState] = useState("Login");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(null);
  const [isTextDataSubmitted, setIsTextDataSubmitted] = useState(false);
  const {setShowRecruiterLogin} = useContext(AppContext);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (state === "Sign Up") {
      if (isTextDataSubmitted) {
        // Logic to create account with all data (name, email, password, image)
        console.log("Creating account with:", { name, email, password, image });
        // Here you would typically make an API call
      } else {
        // This is the "Next" button click
        setIsTextDataSubmitted(true);
      }
    } else {
      // Logic for login
      console.log("Logging in with:", { email, password });
      // Here you would typically make an API call
    }
  };
   useEffect(() => {
    document.body.style.overflow = 'hidden'; // Disable scrolling
    return () => {
      document.body.style.overflow = 'unset'; // Enable scrolling when component unmounts
    }

   },[])
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30  flex justify-center items-center">
      <form
        onSubmit={onSubmitHandler}
        className="relative bg-white p-8 rounded-lg text-slate-500"
      >
        <h1 className="text-center text-2xl text-neutral-700 font-medium">
          Recruiter {state}
        </h1>
        <p className="text-sm">Welcome back! Please sign in to continue</p>

        {state === "Sign Up" && isTextDataSubmitted ? (
          <>
            <div className="border  px-4 py-2 rounded-full flex items-center gap-2 mt-4">
              <label htmlFor="image" className="cursor-pointer">
                <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="upload icon" className="w-8 h-8"/>
                <input
                  onChange={(e) => setImage(e.target.files[0])}
                  type="file"
                  id="image"
                  hidden
                  required
                />
              </label>
              <p>
                Upload Company <br />
                logo
              </p>
            </div>
          </>
        ) : (
          <>
            {state !== "Login" && (
              <div className="border  px-4 py-2 rounded-full flex items-center gap-2 mt-4">
                <img src={assets.person_icon} alt="person icon" />
                <input
                  className="outline-none text-sm"
                  type="text"
                  placeholder="Company Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            )}
            <div className="border  px-4 py-2 rounded-full flex items-center gap-2 mt-4">
              <img src={assets.email_icon} alt="email icon" />
              <input
                className="outline-none text-sm"
                type="email"
                placeholder="Email Id"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="border  px-4 py-2 rounded-full flex items-center gap-2 mt-4">
              <img src={assets.lock_icon} alt="password icon" />
              <input
                className="outline-none text-sm"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <p className="text-sm text-blue-600 my-4 cursor-pointer">
              Forgot password?
            </p>
          </>
        )}
        <button
          type="submit"
          className="bg-blue-600 w-full text-white py-2 rounded-full mt-4"
        >
          {state === "Login"
            ? "Login"
            : isTextDataSubmitted
            ? "Create Account"
            : "Next"}
        </button>

        {state === "Login" ? (
          <p className="mt-5 text-center">
            Don't have an account?{" "}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => {
                setState("Sign Up");
                setIsTextDataSubmitted(false); // Reset on state change
              }}
            >
              Sign Up
            </span>
          </p>
        ) : (
          <p className="mt-5 text-center">
            Already have an account?{" "}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => setState("Login")}
            >
              Login
            </span>
          </p>
        )}
        <img onClick={() => setShowRecruiterLogin(false)} src={assets.cross_icon} alt="close icon" className=" absolute top-5 right-5 cursor-pointer" />
      </form>
    </div>
  );
};

export default RecruiterLogin;
