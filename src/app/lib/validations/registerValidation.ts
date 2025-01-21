import { z } from 'zod';

export const RegisterValidation = z
  .object({
    email: z.string().email(),
    password: z.string().min(8),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'The passwords did not match',
    path: ['confirm password'],
  });
