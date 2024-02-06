import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: { id: string };
}

const page = ({ params: { id } }: Props) => {
  if (Number(id) > 10) return notFound();

  return <div className="flex justify-center items-center h-screen">{id}</div>;
};

export default page;
