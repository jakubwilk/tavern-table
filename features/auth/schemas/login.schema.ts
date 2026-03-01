import type { TFunction } from 'i18next';
import { z } from 'zod';

export function createLoginSchema(t: TFunction) {
  return z.object({
    email: z
      .string()
      .min(1, t('validation.required'))
      .email(t('validation.invalidEmail')),
    password: z.string().min(1, t('validation.required')),
  });
}

export type LoginFormData = {
  email: string;
  password: string;
};
