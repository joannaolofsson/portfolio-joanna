import React from "react";
import styled from "styled-components";
import SocialIcons from "./SocialIcons";
import { Link } from "react-router-dom";
import { Container } from "../../styles/Containers";
import FooterImg from '../../assets/logotype_dark.svg';
import { StyledP } from "../../styles/Fonts.styled";


export function Footer() {
    return(
        <StyledFooter>
            <Container>
                <StyledContentwrapper>
                <LogoFooter src={FooterImg} alt="" />
                    <StyledUl>
                        <StyledLi><ContactLink label="Send me an email" onClick={() => window.location.href = 'mailto:joanna.olofsson@gmail.com'}><StyledP>Click to send me an email</StyledP></ContactLink>
                        </StyledLi> 
                        <StyledLi> &copy; 2024 Joanna Olofsson - All rights reserverd</StyledLi>
                    </StyledUl>
                    <SocialIcons />
                    </StyledContentwrapper>
            </Container>
        </StyledFooter>
    );
}

export default Footer;


const StyledFooter = styled.footer`
background-color: #121212;
color: #fff;
padding: 8rem 2rem 5rem;
`;

export const LogoFooter = styled.img`
    margin: 0 0 1rem 1rem;
    
    @media screen and  (min-width: 600px) {
    margin-left: 0;
    }`;

export const ContactLink = styled(Link)`
    color: white;
    font-size: 1.2rem;
    text-decoration: none;
    cursor: pointer;
`;


const StyledUl = styled.ul`
  list-style-type: none;
`;

const StyledLi = styled.li`
  line-height: 1.6;
  font-family: "Prompt", sans-serif;
`;

const StyledContentwrapper = styled.div`
  display: flex ;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;


@media screen and (min-width: 600px){
    margin: 0 0 0 5rem;
}
`;