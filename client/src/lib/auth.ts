import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Simple user interface that matches the backend response
interface AuthUser {
  id: string;
  email: string;
  type: string;
  firstName?: string;
  lastName?: string;
  name?: string;
}

interface AuthState {
  user: AuthUser | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: any) => Promise<void>;
  logout: () => void;
  setUser: (user: AuthUser) => void;
  validateSession: () => Promise<void>;
  clearAuthCache: () => void;
  forceReAuthenticate: () => Promise<void>;
}

export const useAuth = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      
      login: async (email: string, password: string) => {
        try {
          const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
            credentials: 'include',
          });
          
          if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message);
          }
          
          const data = await response.json();
          const { token, user } = data;
          
          if (token && typeof token === 'string' && token.length > 10) {
            localStorage.setItem('auth_token', token);
          } else {
            throw new Error('Authentication failed - invalid token received');
          }
          
          set({ user, isAuthenticated: true });
        } catch (error) {
          console.error('Login error:', error);
          throw error;
        }
      },
      
      register: async (userData: any) => {
        const response = await fetch('/api/auth/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(userData),
        });
        
        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.message);
        }
        
        const user = await response.json();
        set({ user, isAuthenticated: true });
      },
      
      logout: async () => {
        try {
          await fetch('/api/auth/logout', {
            method: 'POST',
            credentials: 'include',
          });
        } catch (error) {
          console.error('Logout error:', error);
        }
        
        localStorage.removeItem('auth_token');
        set({ user: null, isAuthenticated: false });
        window.location.href = '/portal';
      },
      
      setUser: (user: AuthUser) => {
        set({ user, isAuthenticated: true });
      },

      clearAuthCache: () => {
        localStorage.removeItem('auth_token');
        localStorage.removeItem('auth-storage');
        sessionStorage.clear();
        set({ user: null, isAuthenticated: false });
      },

      forceReAuthenticate: async () => {
        try {
          get().clearAuthCache();
          
          const response = await fetch('/api/auth/me', {
            method: 'GET',
            credentials: 'include',
          });
          
          if (response.ok) {
            const data = await response.json();
            if (data.token && data.user) {
              localStorage.setItem('auth_token', data.token);
              set({ user: data.user, isAuthenticated: true });
              return;
            }
          }
          
          window.location.href = '/auth';
        } catch (error) {
          console.error('Force re-authentication failed:', error);
          window.location.href = '/auth';
        }
      },
      
      validateSession: async () => {
        try {
          const token = localStorage.getItem('auth_token');
          
          if (!token) {
            set({ user: null, isAuthenticated: false });
            return;
          }
          
          const response = await fetch('/api/auth/me', {
            method: 'GET',
            credentials: 'include',
            headers: { 'Authorization': `Bearer ${token}` },
          });
          
          if (response.ok) {
            const data = await response.json();
            
            if (data.token) {
              localStorage.setItem('auth_token', data.token);
            }
            
            const user = data.user || data;
            set({ user, isAuthenticated: true });
          } else {
            localStorage.removeItem('auth_token');
            set({ user: null, isAuthenticated: false });
          }
        } catch (error) {
          console.error('Session validation failed:', error);
          localStorage.removeItem('auth_token');
          set({ user: null, isAuthenticated: false });
        }
      },
    }),
    {
      name: 'auth-storage',
    }
  )
);
