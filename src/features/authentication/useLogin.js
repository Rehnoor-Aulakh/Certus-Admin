import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { googleLogin } from "../../services/authApi";
import toast from "react-hot-toast";
export default function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: login, isPending } = useMutation({
    mutationFn: googleLogin,
    onSuccess: (data) => {
      const user = data.admin;
      // Persist only the JWT
      localStorage.setItem("user", JSON.stringify(user));
      queryClient.setQueryData(["user"], user);
      navigate("/", { replace: true });
    },
    onError: (error) => {
      console.log(error);
      toast.error(error.message || "Login failed. Please try again.");
    },
  });
  return { login, isPending };
}
