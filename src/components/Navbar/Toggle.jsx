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
  color: darkgray;
  background: #fff;
  box-shadow: 0 0 10px rgba(0,0,0,0.15);;
  padding: .75rem;
  border-radius: 20%;
  display: flex;
  place-items: center;
  font-size: 3rem;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    display: none;
    
  }
`;