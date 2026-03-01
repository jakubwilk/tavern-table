import api from '@/lib/api';

import { AuthResponse, LoginPayload, RegisterPayload } from '../types';

export const authService = {
  login: (payload: LoginPayload) => api.post<AuthResponse>('/auth/login', payload),

  register: (payload: RegisterPayload) => api.post<AuthResponse>('/auth/register', payload),

  forgotPassword: (email: string) => api.post('/auth/forgot-password', { email }),

  refreshToken: (refreshToken: string) =>
    api.post<Pick<AuthResponse, 'accessToken'>>('/auth/refresh', { refreshToken }),
};
