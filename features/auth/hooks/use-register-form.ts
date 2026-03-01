import { zodResolver } from '@hookform/resolvers/zod';
import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { createRegisterSchema, type RegisterFormData } from '../schemas/register.schema';
import { useRegisterMutation } from './use-register-mutation';

export function useRegisterForm() {
  const { t } = useTranslation();
  const mutation = useRegisterMutation();
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const schema = useMemo(() => createRegisterSchema(t), [t]);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(schema),
    mode: 'onChange',
    defaultValues: { email: '', displayName: '', password: '' },
  });

  const onSubmit = handleSubmit((data) => {
    if (!acceptedTerms) return;
    mutation.mutate(data);
  });

  return { control, errors, isPending: mutation.isPending, acceptedTerms, setAcceptedTerms, onSubmit };
}
