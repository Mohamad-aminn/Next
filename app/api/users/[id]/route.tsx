import { NextRequest, NextResponse } from "next/server";
import { users } from "./users";
import { userSchema } from "../../validation/users";
import prisma from "@/prisma/client";

interface Props {
  params: {
    id: string;
  };
}

export const GET = async (request: NextRequest, { params: { id } }: Props) => {
  const specificUser = await prisma.user.findFirst({
    where: { id: parseInt(id) },
  });
  return NextResponse.json(specificUser, { status: 200 });
};

export const PUT = async (request: NextRequest, { params: { id } }: Props) => {
  const body = await request.json();

  const result = userSchema.safeParse(body);

  if (result.success) {
    const updateUser = await prisma.user.update({
      where: { id: parseInt(id) },
      data: { ...body },
    });
    return NextResponse.json(updateUser, { status: 200 });
  } else {
    return NextResponse.json(result.error.issues[0].message, { status: 400 });
  }
};

export const DELETE = async (
  request: NextRequest,
  { params: { id } }: Props
) => {
  try {
    const specificUser = await prisma.user.delete({
      where: { id: parseInt(id) },
    });
    return NextResponse.json({}, { status: 200 });
  } catch (error) {
    return NextResponse.json(error);
  }
};
