import useUser from "../features/authentication/useUser";
import Logo from "../ui/Logo";
import styled from "styled-components";
import Heading from "../ui/Heading";
import GoogleLoginButton from "../ui/GoogleLoginButton";
import Footer from "../ui/Footer";
import Spinner from "../ui/Spinner";
import { Navigate } from "react-router";
const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  justify-content: center;
  align-items: center;
  padding: 2.4rem;
  background-color: var(--color-certus-blue);
  color: var(--color-certus-white);
`;

const LoginCard = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.4rem;
  width: min(100%, 48rem);
  text-align: center;
`;

const LogoWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const HeadingWrap = styled.div`
  max-width: 34rem;
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export default function Login() {
  const { isLoading, isAuthenticated } = useUser();

  if (isLoading) {
    return <Spinner size="lg" color="border-t-white-600" />;
  }
  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  // otherwise, show the login page
  return (
    <LoginLayout>
      <LoginCard>
        <LogoWrap>
          <Logo />
        </LogoWrap>
        <HeadingWrap>
          <Heading as="h1">Login Using Your Registered Google Account</Heading>
        </HeadingWrap>
        <ButtonWrap>
          <GoogleLoginButton />
        </ButtonWrap>
      </LoginCard>
      <Footer />
    </LoginLayout>
  );
}
