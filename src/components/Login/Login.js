import React, { useState } from "react";
import useAuth from "../../hooks/Auth/useAuth";
function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const { handleLogin, errorState } = useAuth();
  return (
    <div className="text-white w-[600px]">
      <h1 className="text-Heading flex justify-center font-semibold">
        Venue Admin Login
      </h1>
      <div className="flex flex-col gap-5 mt-10">
        <input
          onChange={(e) => setUsername(e.target.value)}
          className="rounded-2xl bg-dark border border-white outline-none p-4 text-small"
          type="text"
          placeholder="Username"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          className="rounded-2xl bg-dark border border-white outline-none text-small p-4"
          type="password"
          placeholder="Password"
        />
        {errorState && (
          <span className="text-small text-[red] flex justify-center">
            {errorState}
          </span>
        )}
        <button
          onClick={() => handleLogin(username, password)}
          className="bg-purple text-small rounded-xl mt-6 p-4 font-semibold "
        >
          Sign-in
        </button>
        <h5 className="text-small flex justify-center font-thin">
          New Registration?
        </h5>
      </div>
    </div>
  );
}

export default Login;
