"use client";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { data, status } = useSession();

  return (
    <div className="p-5 bg-blue-400 text-gray-800 font-semibold flex justify-between px-20 items-center">
      <div className="flex justify-around gap-4">
        {status === "loading" ? (
          <span className="loading loading-spinner"></span>
        ) : status === "unauthenticated" ? (
          <>
            <Link href="/api/auth/signin">Login</Link>
            <Link href="/register/user">Sign up</Link>
          </>
        ) : (
          <div className="flex items-center gap-3">
            <img
              src={data!.user?.image || undefined}
              alt="user's google image"
              className="rounded-full h-12"
            />
            <p>Welcome</p>
            <span className="font-bold text-lg">{data?.user?.name}</span>
          </div>
        )}
      </div>
      {/* sign out button */}
      {status === "authenticated" && (
        <Link href={"/api/auth/signout"} className="btn glass">
          <button type="button">Sign out</button>
        </Link>
      )}
    </div>
  );
};

export default Navbar;
