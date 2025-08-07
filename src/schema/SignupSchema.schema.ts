import { z } from "zod";

const SignupSchema = z.object({
  username: z.string().min(3).max(20),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }),
});

export default SignupSchema;
