import * as z from "zod";

export const signUpSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name is too long")
    .trim(),
  email: z.email("Please enter a valid email address").toLowerCase().trim(),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(100, "Password is too long"),
});

type SignUpValues = z.infer<typeof signUpSchema>;