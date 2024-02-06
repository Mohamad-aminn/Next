import { NextRequest, NextResponse } from "next/server";
import { productsSchema } from "../validation/products";
import prisma from "@/prisma/client";

export const products = [
  { id: 1, name: "Milk", price: 2 },
  { id: 2, name: "Bread", price: 3.5 },
];

export const GET = async (request: NextRequest) => {
  const products = await prisma.product.findMany();
  console.log(products);

  return NextResponse.json(products, { status: 200 });
};

export const POST = async (request: NextRequest) => {
  try {
    const body = await request.json();
    const res = productsSchema.safeParse(body);
    console.log(res);

    if (res.success) {
      await prisma.product.create({ data: body });
      return NextResponse.json("created", { status: 201 });
    } else if (!res.success) {
      return NextResponse.json(res.error.errors, { status: 400 });
    } else {
      return NextResponse.json("unexpected error!", { status: 500 });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json(error, { status: 400 });
  }
};
