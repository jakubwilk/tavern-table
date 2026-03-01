import type { TFunction } from 'i18next';
import { z } from 'zod';

export function createRegisterSchema(t: TFunction) {
  return z.object({
    email: z
      .string()
      .min(1, t('validation.required'))
      .email(t('validation.invalidEmail')),
    displayName: z.string().min(1, t('validation.required')),
    password: z.string().min(1, t('validation.required')),
  });
}

export type RegisterFormData = {
  email: string;
  displayName: string;
  password: string;
};
