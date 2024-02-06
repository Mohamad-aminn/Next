import React, { Suspense } from "react";
import LoadingUsers from "../LoadingUsers";
import UsersTable from "./UsersTable";

const page = ({ searchParams }: { orderBy: string } | any) => {
  console.log(searchParams);

  return (
    <Suspense fallback={<LoadingUsers />}>
      <UsersTable searchParams={searchParams} />
    </Suspense>
  );
};

export default page;
