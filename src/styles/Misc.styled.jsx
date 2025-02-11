import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";

export const StyledImg = styled.img`
@media screen and  (min-width: 600px) {
    margin-left: 10px;
}
`;

/* Card image */ 
export const CardImage = styled.img`
    width: 100%;
`;

/* Image about me page */

export const JoannaImage = styled.img`
    max-width: 100%;
    margin-top: 1rem;
`;

/* BankID */
export const BankImage = styled.img`
    max-width: 100%;
`;

export const LogoFooter = styled.img`
    margin: 0 0 1rem 1rem;
    
    @media screen and  (min-width: 600px) {
    margin-left: 0;
    }`;


export const StyledIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    color: #ebd1eb;
  }
`;

export const StyledSocialIcons = styled.div`
display: flex;
align-items: center;
justify-content: center;

li {
    list-style: none;
}

a {
    color: #fff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    margin-top: 10px;
    height: 40px;
    width: 40px;
    text-decoration: none;
}
`;


export const StyledToggle = styled(FaBars) `
  position: fixed;
  top: 4%;
  right: 4%;
  color: #454545;
  background: #fff;
  padding: .75rem;
  border-radius: 50%;
  border: 2px solid #dadada;
  display: flex;
  place-items: center;
  font-size: 3rem;  
  cursor: pointer;
  z-index: 10;

  @media screen and (min-width: 768px) {
    display: none;
    
  }
`;

export const CloseToggle = styled(FaTimes)`
  position: Fixed;
  top: 4%;
  right: 4%;
  background-color: #ffffff;
  color: #bc64bc;
  padding: 0.6rem;
  border-radius: 20%;
  border: 2px solid #dadada;
  display: flex;
  place-items: center;
  font-size: 3rem;
  cursor: pointer;
`;


/* Back pilen */
export const StyledBackArrow = styled(FaArrowLeft)`
display: flex;
justify-content: center;
align-items: center;

`;