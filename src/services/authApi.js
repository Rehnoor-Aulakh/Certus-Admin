import toast from "react-hot-toast";
import api from "./axios";

export async function googleLogin(credential) {
  try {
    // Decode the JWT token to extract user profile details
    const userInfo = JSON.parse(atob(credential.split(".")[1]));
    const googleUserData = {
      email: userInfo.email,
      name: userInfo.name,
      picture: userInfo.picture,
      google_id: userInfo.sub,
      email_verified: userInfo.email_verified,
      phone: userInfo.phone_number || userInfo.phone || "",
    };
    // send to backend for 2 stage verification
    const requestBody = {
      action: "google_login",
      credential: credential,
      role: "ROLE_ADMIN",
      user_data: googleUserData,
    };
    const response = await api.post("/auth/google-login", requestBody);
    console.log(response);
    return response.data;
  } catch (error) {
    toast.error("Google login failed. Please try again.", error);
    console.error("Error during Google login:", error);
    throw new Error("Google login failed. Please try again.", error);
  }
}
