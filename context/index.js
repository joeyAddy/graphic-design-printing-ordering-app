"use client";
import React, { useState, createContext, useEffect, useMemo } from "react";
import preloader from "@/assets/images/Pinwheel.gif";

export const Context = createContext();

export const ContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const [secret, setSecret] = useState("");
  const [isLoading, setIsLoading] = useState(true); // Introduce loading state

  const getUserFromLocalStorage = useMemo(() => {
    return () => {
      const userLoggedIn = localStorage.getItem("user");
      if (userLoggedIn) {
        setUser(JSON.parse(userLoggedIn));
        setIsLoading(false); // Set loading state to false when user data is available
      } else {
        setIsLoading(false); // Set loading state to false even if user data is not found
      }
    };
  }, []); // Empty dependency array ensures this function is created only once

  useEffect(() => {
    getUserFromLocalStorage();
  }, [getUserFromLocalStorage]);

  const value = {
    user,
    setUser,
    secret,
    setSecret,
  };

  return (
    <Context.Provider value={value}>
      {isLoading ? ( // Render loading state if isLoading is true
        <div className="h-screen w-screen flex items-center justify-center text-lg animate-pulse font-bold">
          <img src={preloader.src} alt="preloader" />
        </div> // Placeholder or loading indicator
      ) : (
        props.children // Render children when user data is available
      )}
    </Context.Provider>
  );
};
