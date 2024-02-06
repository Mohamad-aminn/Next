import React from "react";

interface Props {
  params: { id: number; photoNumber: string };
}

const page = ({ params: { id, photoNumber } }: Props) => {
  return (
    <div className="flex justify-center items-center h-screen">
      user: {id} | photo: {photoNumber}
    </div>
  );
};

export default page;
