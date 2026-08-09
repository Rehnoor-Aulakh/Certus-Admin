import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  padding-left: 1.2rem;
`;

const HeaderText = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-grey-800);
  letter-spacing: -0.5px;
`;

export default function Sidebar() {
  return (
    <StyledSidebar>
      <HeaderContainer>
        <Logo imageStyle="rounded-lg" size="3.6rem" />
        <HeaderText>Certus Admin</HeaderText>
      </HeaderContainer>
      <hr style={{ borderColor: "var(--color-grey-300)" }} />
      {/* add a separation line slightly gray */}
      <MainNav />
    </StyledSidebar>
  );
}
