import api from "./axios";

export async function googleLogin(payload) {
  const { data } = await api.post("/auth/google-login", payload);
  if (!data.success) {
    throw new Error(data.message);
  }

  return data;
}
