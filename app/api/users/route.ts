import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import bcrypt from "bcrypt";
import { registerUserSchema } from "../../register/user/userSchema";
import { z } from "zod";

interface Body {
  email: string;
  password: string;
  password1: string;
}

export const userSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  followers: z.number().default(0),
  registeredAt: z.date().default(new Date()),
});

export const POST = async (req: NextRequest) => {
  const body: Body = await req.json();
  const { email, password } = body;

  //   checking user existing in db
  const isExist = await prisma.user.findUnique({ where: { email } });
  if (isExist) {
    return NextResponse.json(
      { error: "this email already exists!" },
      { status: 400 }
    );
  }

  //   validating user body
  const result = registerUserSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      { error: "این ایمیل ثبت نام کرده!" },
      { status: 400 }
    );
  }

  //   encrypting password
  const hashedPassword = await bcrypt.hash(password, 10);

  //   creating user
  await prisma.user.create({ data: { email, hashedPassword } });

  return NextResponse.json({}, { status: 201 });
};
