"use client";
import React, { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Handle login functionality
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center overflow-hidden px-2">
      {/* Login */}
      <div
        style={{ backgroundColor: "var(--foreground)" }}
        className="relative flex w-96 flex-col space-y-5 rounded-lg border px-5 py-10 shadow-xl sm:mx-auto"
      >
        {/* Background decoration */}
        <div
          style={{ backgroundColor: "var(--accent)" }}
          className="-z-10 absolute top-4 left-1/2 h-full w-5/6 -translate-x-1/2 rounded-lg sm:-right-10 sm:top-auto sm:left-auto sm:w-full sm:translate-x-0"
        ></div>

        {/* Header */}
        <div className="mx-auto mb-2 space-y-3">
          <Typography
            variant="h4"
            className="text-center font-bold text-gray-700"
          >
            Sign in
          </Typography>
          <Typography variant="body2" className="text-center text-gray-500">
            Sign in to access your account
          </Typography>
        </div>

        {/* Email Input */}
        <div>
          <div className="relative mt-2 w-full">
            <input
              type="text"
              id="email"
              value={email}
              placeholder=" "
              onChange={(e) => setEmail(e.target.value)}
              className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 px-2.5 pt-4 pb-2.5 text-sm focus:border-blue-600 focus:outline-none focus:ring-0"
              style={{ color: "var(--background)", backgroundColor: "var(--foreground)" }}
            />
            <label
              htmlFor="email"
              style={{ color: "var(--background)", backgroundColor: "var(--foreground)" }}
              className="origin-[0] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none px-2 text-sm duration-300"
            >
              {" "}
              Enter Your Email{" "}
            </label>
          </div>
        </div>

        {/* Password Input */}
        <div>
          <div className="relative mt-2 w-full">
            <input
              type="password"
              id="password"
              value={email}
              placeholder=" "
              onChange={(e) => setPassword(e.target.value)}
              className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 px-2.5 pt-4 pb-2.5 text-sm focus:border-blue-600 focus:outline-none focus:ring-0"
              style={{ color: "var(--background)", backgroundColor: "var(--foreground)" }}
            />
            <label
              htmlFor="password"
              style={{ color: "var(--background)", backgroundColor: "var(--foreground)" }}
              className="origin-[0] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none px-2 text-sm duration-300"
            >
              {" "}
              Enter Your Password{" "}
            </label>
          </div>
        </div>

        {/* Login Button and Forgot Password */}
        <div className="flex w-full items-center space-x-4">
          <Button
            onClick={handleLogin}
            variant="contained"
            style={{ backgroundColor: "var(--accent)", color: "var(--text)" }}
            className="w-36 font-bold"
          >
            Login
          </Button>
          <a
            href="#"
            className="w-full text-center text-sm font-medium text-gray-600 hover:underline"
          >
            Forgot your password?
          </a>
        </div>

        {/* Sign Up Prompt */}
        <Typography className="text-center text-gray-600">
          Don't have an account?
          <a
            href="#"
            style={{ color: "var(--accent)" }}
            className="whitespace-nowrap font-semibold hover:underline"
          >
            Sign up
          </a>
        </Typography>
      </div>
      {/* /Login */}
    </div>
  );
}
