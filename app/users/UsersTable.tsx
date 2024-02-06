"use client";
import React, { useState } from "react";
import { sort } from "fast-sort";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

interface Props {
  searchParams: { orderBy: string };
}

type User = {
  id: number;
  name: string;
  username: string;
  address: {};
  email: string;
};

const UsersTable = async ({ searchParams }: Props) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();

  const sortedUsers = sort(users).asc((user) =>
    searchParams.orderBy === "name"
      ? user.name
      : searchParams.orderBy === " email"
      ? user.email
      : user.id
  );

  return (
    <table className="table ">
      <thead>
        <tr className="text-lg">
          <th>
            <Link href={{ query: { orderBy: "name" } }}>Name</Link>
          </th>
          <th>
            <Link href={{ query: { orderBy: "email" } }}>Email</Link>
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedUsers.map((user, i) => (
          <tr key={i}>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UsersTable;
