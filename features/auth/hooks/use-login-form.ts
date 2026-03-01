import { zodResolver } from '@hookform/resolvers/zod';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { createLoginSchema, type LoginFormData } from '../schemas/login.schema';
import { useLoginMutation } from './use-login-mutation';

export function useLoginForm() {
  const { t } = useTranslation();
  const mutation = useLoginMutation();

  const schema = useMemo(() => createLoginSchema(t), [t]);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(schema),
    mode: 'onChange',
    defaultValues: { email: '', password: '' },
  });

  const onSubmit = handleSubmit((data) => mutation.mutate(data));

  return { control, errors, isPending: mutation.isPending, onSubmit };
}
