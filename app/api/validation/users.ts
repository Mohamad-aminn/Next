import { z } from "zod";

export const loginUser = z.object({
  email: z.string().email().max(100),
  password: z.string().min(5).max(63),
});
