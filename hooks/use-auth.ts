import { useAuthContext } from "../providers/auth-provider";

export function useAuth() {
  const { user, isLoading, isAuthenticated, logout, refreshUser } =
    useAuthContext();

  return {
    user,
    isLoading,
    isAuthenticated,
    logout,
    refreshUser,
  };
}
