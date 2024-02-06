import { NextRequest, NextResponse } from "next/server";
import { productsSchema } from "../../validation/products";
import prisma from "@/prisma/client";

interface Props {
  params: { id: string };
}

export const PUT = async (request: NextRequest, { params: { id } }: Props) => {
  try {
    const body = await request.json();
    const res = await prisma.product.update({
      where: { id: parseInt(id) },
      data: body,
    });

    return NextResponse.json({}, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 404 });
  }
};
