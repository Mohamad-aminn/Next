"use client";
import React, { useState } from "react";

const page = () => {
  const [error, setError] = useState("");
  const [user, setUser] = useState({
    email: "",
    password: "",
    password1: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-40 flex justify-center items-center">
      <form onSubmit={handleSubmit}>
        {/* email */}
        <div>
          <label htmlFor="email">Email</label>
          <input
            className="py-3 w-full rounded-md px-2"
            onChange={handleChange}
            name="email"
            id="email"
          />
        </div>
        {/* password */}
        <div>
          <label htmlFor="password">Password</label>
          <input
            className="py-3 w-full  rounded-md px-2"
            onChange={handleChange}
            name="password"
            id="password"
            type="password"
          />
        </div>
        {/* repeat password */}
        <div className="mb-4">
          <label htmlFor="password1">Repeat Password</label>
          <input
            className="py-3 w-full rounded-md px-2"
            onChange={handleChange}
            name="password1"
            id="password1"
            type="password"
          />
        </div>
        <button type="submit" className="btn w-full btn-info">
          Sign up
        </button>
      </form>
    </div>
  );
};

export default page;
