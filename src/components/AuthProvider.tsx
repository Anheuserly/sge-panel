// components/AuthProvider.tsx
"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { authService } from '../lib/appwrite';

// Interface based on your Appwrite ANALYSTS collection attributes
interface Analyst {
  $id: string;
  phone_number: string;
  name: string;
  role: string;
  department: string;
  is_active: boolean;
  last_login?: string;
  is_logged_in?: boolean;
  session_token?: string;
  session_expiry?: string;
  login_attempts?: number;
  permissions?: string[];
  profile_image?: string;
  timezone?: string;
  language?: string;
  created_at?: string;
  updated_at?: string;
}

interface AuthContextType {
  user: Analyst | null;
  loading: boolean;
  login: (phoneNumber: string, password: string) => Promise<{session: any; analyst: Analyst}>;
  logout: () => Promise<void>;
  isAuthenticated: boolean;
  error: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<Analyst | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const analyst = await authService.getCurrentUser();
      if (analyst) {
        // Map DefaultDocument to Analyst type
        const mappedAnalyst: Analyst = {
          $id: analyst.$id,
          phone_number: analyst.phone_number ?? '',
          name: analyst.name ?? '',
          role: analyst.role ?? '',
          department: analyst.department ?? '',
          is_active: analyst.is_active ?? false,
          last_login: analyst.last_login,
          is_logged_in: analyst.is_logged_in,
          session_token: analyst.session_token,
          session_expiry: analyst.session_expiry,
          login_attempts: analyst.login_attempts,
          permissions: analyst.permissions,
          profile_image: analyst.profile_image,
          timezone: analyst.timezone,
          language: analyst.language,
          created_at: analyst.created_at,
          updated_at: analyst.updated_at,
        };
        setUser(mappedAnalyst);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error('Auth check failed:', error);
      setUser(null);
      // Don't set error here as it's a silent check
    } finally {
      setLoading(false);
    }
  };

  const login = async (phoneNumber: string, password: string): Promise<{session: any; analyst: Analyst}> => {
    try {
      setLoading(true);
      setError(null);

      const result = await authService.loginWithPhone(phoneNumber, password);
      // Map DefaultDocument to Analyst type
      const mappedAnalyst: Analyst = {
        $id: result.analyst.$id,
        phone_number: result.analyst.phone_number ?? '',
        name: result.analyst.name ?? '',
        role: result.analyst.role ?? '',
        department: result.analyst.department ?? '',
        is_active: result.analyst.is_active ?? false,
        last_login: result.analyst.last_login,
        is_logged_in: result.analyst.is_logged_in,
        session_token: result.analyst.session_token,
        session_expiry: result.analyst.session_expiry,
        login_attempts: result.analyst.login_attempts,
        permissions: result.analyst.permissions,
        profile_image: result.analyst.profile_image,
        timezone: result.analyst.timezone,
        language: result.analyst.language,
        created_at: result.analyst.created_at,
        updated_at: result.analyst.updated_at,
      };
      setUser(mappedAnalyst);

      return { session: result.session, analyst: mappedAnalyst };
    } catch (err: any) {
      setError(err.message || 'Login failed. Please try again.');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const logout = async (): Promise<void> => {
    try {
      setLoading(true);
      await authService.logout();
      setUser(null);
      setError(null);
    } catch (err: any) {
      setError(err.message || 'Logout failed. Please try again.');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const value: AuthContextType = {
    user,
    loading,
    login,
    logout,
    isAuthenticated: !!user,
    error
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};