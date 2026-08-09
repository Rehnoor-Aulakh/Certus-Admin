import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
  width: ${({ $size }) => $size};
`;

const Image = styled.img`
  display: block;
  width: 100%;
  max-width: 100%;
  height: auto;
`;

export default function Logo({ size = "min(24rem,72vw)", imageStyle }) {
  return (
    <StyledLogo $size={size}>
      <Image src="logo.svg" alt="Logo" className={imageStyle} />
    </StyledLogo>
  );
}
