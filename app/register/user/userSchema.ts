import { z } from "zod";

export const registerUserSchema = z
  .object({
    email: z.string().email().max(100),
    password: z
      .string()
      .min(6, { message: "حداقل 6 کاراکتر بزن!" })
      .max(63, { message: "چه خبرته کمترش کن!" }),
    password1: z.string(),
  })
  .superRefine(({ password1, password }, ctx) => {
    if (password1 !== password) {
      ctx.addIssue({
        code: "custom",
        message: "رمزا یکی نیست!",
      });
    }
  });
