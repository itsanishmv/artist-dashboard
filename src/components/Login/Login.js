import React from "react";

function Login() {
  return (
    <div className="text-white w-[600px]">
      <h1 className="text-Heading flex justify-center font-semibold">
        Venue Admin Login
      </h1>
      <div className="flex flex-col gap-5 mt-10">
        <input
          className="rounded-2xl bg-dark border border-white outline-none p-4 text-small"
          type="text"
          placeholder="Username"
        />
        <input
          className="rounded-2xl bg-dark border border-white outline-none text-small p-4"
          type="password"
          placeholder="Password"
        />
        <button className="bg-purple text-small rounded-xl mt-6 p-4 font-semibold ">
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
