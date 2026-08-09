import styled from "styled-components";
import { NavLink } from "react-router";
import { IoHomeOutline, IoPersonOutline, IoExitOutline } from "react-icons/io5";
import { GrTest } from "react-icons/gr";
import { TbReportSearch } from "react-icons/tb";
import useLogout from "../features/authentication/useLogout";

const NavContainer = styled.nav`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const NavList = styled.ul`
  display: flex;
  gap: 0.8rem;
  flex-direction: column;
  height: 100%;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-brand-700);
    background-color: var(--color-brand-50);
    border-radius: var(--border-radius-md);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-700);
  }
`;

export default function MainNav() {
  const { logout } = useLogout();
  return (
    <NavContainer>
      <NavList>
        <li>
          <StyledNavLink to="/">
            <IoHomeOutline />
            <span>Dashboard</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/patients">
            <IoPersonOutline />
            <span>Patients</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/reports">
            <TbReportSearch />
            <span>Reports</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/packages">
            <GrTest />
            <span>Test Packages</span>
          </StyledNavLink>
        </li>
        <li style={{ marginTop: "auto" }}>
          <StyledNavLink
            as="button"
            onClick={logout}
            style={{ width: "100%", background: "none", border: "none" }}
          >
            <IoExitOutline />
            <span>Logout</span>
          </StyledNavLink>
        </li>
      </NavList>
    </NavContainer>
  );
}
