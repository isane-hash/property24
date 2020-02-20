import React, { useContext } from "react";
import UserProvider from "../context/UserContext.js";
import Login from "../components/LoginRegister";

export default function LoginHoc() {
  return (
    <UserProvider>
      <Login />
    </UserProvider>
  );
}
