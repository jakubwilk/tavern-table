import { useState } from 'react';

import { authService } from '../services/auth.service';

export function useLoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    if (!email || !password) return;
    setIsLoading(true);
    setError(null);
    try {
      await authService.login({ email, password });
      // TODO: store tokens, navigate to (tabs)
    } catch {
      setError('Login failed. Check your credentials and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return { email, setEmail, password, setPassword, isLoading, error, handleSubmit };
}
