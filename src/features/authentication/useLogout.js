import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";

export default function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: logout, isPending } = useMutation({
    mutationFn: async () => {
      localStorage.removeItem("user");
    },
    onSuccess: () => {
      queryClient.removeQueries(["user"]);
      navigate("/login", { replace: true });
    },
  });
  return { logout, isPending };
}
