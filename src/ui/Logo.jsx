import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
  width: min(24rem, 72vw);
`;

const Image = styled.img`
  display: block;
  width: 100%;
  max-width: 100%;
  height: auto;
`;

export default function Logo({ className }) {
  return (
    <StyledLogo className={className}>
      <Image src="logo.svg" alt="Logo" />
    </StyledLogo>
  );
}
