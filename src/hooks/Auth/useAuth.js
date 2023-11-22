import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Authenticate } from "../../components/Login/api/LoginQuery";
function useAuth() {
  const [errorState, setErrorState] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (window.localStorage.getItem("user_token")) {
      setIsLoggedIn(true);
      navigate("/dashboard");
    }
  }, [isLoggedIn]);

  async function handleLogin(username, password) {
    try {
      const userData = await Authenticate(username, password);
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
