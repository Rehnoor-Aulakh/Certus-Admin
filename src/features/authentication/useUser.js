import { useQuery } from "@tanstack/react-query";

function getStoredUser() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) return null;

  try {
    const payload = JSON.parse(atob(user.token.split(".")[1]));
    // check JWT expiration
    if (payload.exp && payload.exp * 1000 < Date.now()) {
      localStorage.removeItem("user");
      return null;
    }
    return user;
  } catch {
    localStorage.removeItem("user");
    return null;
  }
}

export default function useUser() {
  const { isLoading, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getStoredUser,
    staleTime: Infinity,
    gcTime: Infinity,
  });
  return {
    isLoading,
    user,
    isAuthenticated: !!user && user.role === "ROLE_ADMIN",
  };
}
