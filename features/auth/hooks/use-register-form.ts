import { useState } from 'react';

import { authService } from '../services/auth.service';

export function useRegisterForm() {
  const [email, setEmail] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [password, setPassword] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    if (!email || !displayName || !password || !acceptedTerms) return;
    setIsLoading(true);
    setError(null);
    try {
      await authService.register({ email, displayName, password });
      // TODO: store tokens, navigate to (tabs)
    } catch {
      setError('Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    email,
    setEmail,
    displayName,
    setDisplayName,
    password,
    setPassword,
    acceptedTerms,
    setAcceptedTerms,
    isLoading,
    error,
    handleSubmit,
  };
}
