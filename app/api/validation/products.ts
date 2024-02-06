import { z } from "zod";

export const productsSchema = z.object({
  title: z.string().min(2).max(300).trim(),
  description: z.string().min(20).max(300).trim(),
  price: z.number().nonnegative().max(999),
  createdAt: z.date().default(new Date()),
});
