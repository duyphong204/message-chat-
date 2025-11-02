import { z } from 'zod';

export const emailSchema = z.string().trim().email('invalid email address').min(1, 'email is required');
export const passwordSchema = z.string().trim().min(1, 'password is required');

export const registerSchema = z.object({
  name: z.string().trim().min(1, 'name is required'),
  email: emailSchema,
  password: passwordSchema,
  avatar: z.string().optional(),
});

export const loginSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

/* Kiểu TypeScript suy luận tự động từ Zod schema */
export type RegisterSchemaType = z.infer<typeof registerSchema>;
export type LoginSchemaType = z.infer<typeof loginSchema>;