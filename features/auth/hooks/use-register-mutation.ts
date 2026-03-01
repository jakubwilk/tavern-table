import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'expo-router';

import type { RegisterFormData } from '../schemas/register.schema';

// TODO: replace with authService.register(data) when the API is ready
function mockRegister(_data: RegisterFormData): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

export function useRegisterMutation() {
  const router = useRouter();

  return useMutation({
    mutationFn: mockRegister,
    onSuccess: () => {
      router.replace('/dashboard');
    },
  });
}
