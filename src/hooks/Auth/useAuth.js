import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Auth } from "../../components/Auth/AuthContext";
import { Authenticate } from "../../components/Login/api/LoginQuery";
function useAuth() {
  const [errorState, setErrorState] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  console.log(isLoggedIn);
  useEffect(() => {
    if (window.localStorage.getItem("user_token")) {
      setIsLoggedIn(true);
      navigate("/dashboard");
    }
  }, [isLoggedIn]);

  async function handleLogin() {
    try {
      const userData = await Authenticate("DJ@4", "Dhunjam@2023");
      window.localStorage.setItem("user_token", userData.data.token);
      setIsLoggedIn(true);
      setErrorState("");
    } catch (err) {
      setErrorState(err.response.data?.ui_err_msg);
    }
  }
  return { handleLogin, errorState, isLoggedIn };
}

export default useAuth;
