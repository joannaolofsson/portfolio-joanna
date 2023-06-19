import React from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";

const Toggle = ({handleNavToggle}) => {
    return(
        <StyledToggle onClick={handleNavToggle} />
    )
}

export default Toggle;

const StyledToggle = styled(FaBars) `
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