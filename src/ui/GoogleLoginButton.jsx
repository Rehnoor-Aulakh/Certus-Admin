import { GoogleLogin } from "@react-oauth/google";
import useLogin from "../features/authentication/useLogin";
import toast from "react-hot-toast";

export default function GoogleLoginButton() {
  const { login } = useLogin();

  const handleGoogleSuccess = (credentialResponse) => {
    const credential = credentialResponse.credential;
    if (credential) {
      console.log("Google login successful, credential received: ", credential);
      login(credential);
    } else {
      console.error("Google login failed: No credential received.");
      toast.error("Google login failed. Please try again.");
    }
  };

  const handleGoogleError = (error) => {
    console.error("Google login error:", error);
    toast.error("Google login failed. Please try again.", error);
  };

  return (
    <div className="google-signin-container">
      <GoogleLogin
        onSuccess={handleGoogleSuccess}
        onError={handleGoogleError}
        size="large"
        text="signin_with"
        shape="rectangular"
        width="300"
        theme="filled_blue"
        auto_select={true}
      />
    </div>
  );
}
