import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'expo-router';

import type { LoginFormData } from '../schemas/login.schema';

// TODO: replace with authService.login(data) when the API is ready
function mockLogin(_data: LoginFormData): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

export function useLoginMutation() {
  const router = useRouter();

  return useMutation({
    mutationFn: mockLogin,
    onSuccess: () => {
      router.replace('/dashboard');
    },
  });
}
