import { Navigate } from "react-router";
import styled from "styled-components";
import Spinner from "../ui/Spinner";
import useUser from "../features/authentication/useUser";
const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function ProtectedRoute({ children }) {
  // 1. Load the authenticated user
  const { isLoading, isAuthenticated } = useUser();

  // 2. While loading, show the Spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner size="lg" />
      </FullPage>
    );

  // 3. If the user is not authenticated, redirect to the login page
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  if (isAuthenticated) return children;
}
