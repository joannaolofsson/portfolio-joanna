import styled from "styled-components";

export const StyledH1 = styled.h1`
  font-size: 50px;
  font-weight: 600;

  @media screen and(max-width: ${({theme}) => theme.mobile }) {
    font-size: 72px;
  }
`;

export const StyledH2 = styled.h2`
  font-size: 40px;
  font-weight: 500;
`;

export const StyledH3 = styled.h3`
font-size: 32px;
  font-weight: 600;
`;

export const StyledH4 = styled.h4`
font-size: 24px;
  font-weight: 600;
`;

export const StyledH5 = styled.h4`
font-size: 20px;
  font-weight: 600;
`;

export const StyledP = styled.p`
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.5;
`;

export const StyledPHome = styled.p`
  font-size: 1.6rem;

`;

export const StyledLi = styled.li`
  font-weight: 500;
  list-style-type: none;
`;

export const StyledBulletLi = styled.li`
font-weight: 500;
`;