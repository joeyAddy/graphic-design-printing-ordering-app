"use client";
import React, { useState, createContext, useEffect } from "react";

export const Context = createContext();

export const ContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const [secret, setSecret] = useState("");

  useEffect(() => {
    if (user === null) {
      const userLoggedIn = localStorage.getItem("user");

      if (userLoggedIn) {
        console.log(userLoggedIn, "user logged in");

        setUser(JSON.parse(userLoggedIn));
      }
    }
  }, []);

  const value = {
    user,
    setUser,
    secret,
    setSecret,
  };

  return <Context.Provider value={value}>{props.children}</Context.Provider>;
};
