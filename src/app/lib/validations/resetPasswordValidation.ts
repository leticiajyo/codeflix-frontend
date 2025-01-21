import { z } from 'zod';

export const ResetPasswordValidation = z.object({
  email: z.string().email(),
});
