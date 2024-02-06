import React from "react";

interface Props {
  params: { slug: string[] };
}

const page = ({ params: { slug } }: Props) => {
  return <div>{slug}</div>;
};

export default page;
