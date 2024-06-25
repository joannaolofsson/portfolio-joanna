import React from "react";
import styled from "styled-components";
import SocialIcons from "./SocialIcons";
import { Link } from "react-router-dom";
import { Container } from "../../styles/Containers";
import FooterImg from '../../assets/logotype_dark.svg';


export const StyledFooter = styled.footer`
background-color: ${({ theme }) => theme.colors.footer};
color: #fff;
padding: 8rem 2rem 5rem;


ul {
    list-style-type: none;
}

ul li {
    margin-bottom: 20px;
}

p {
    text-align: right;
}

@media (max-width: ${({ theme }) => theme.mobile}) {
    text-align: center;
    ul {
        padding: 0;
    }
    p {
        text-align: center;
    }

    img {

        margin-left: 0;
    }
}
`;

export const LogoFooter = styled.img`
    margin: 0 0 1rem 1rem;
    
    @media screen and  (max-width: ${({ theme }) => theme.mobile}) {
    margin-left: 0;
    }`;

export const ContactLink = styled(Link)`
    color: white;
    font-size: 1.2rem;
    text-decoration: none;
    cursor: pointer;
`;

export function Footer() {
    return(
        <StyledFooter>
            <Container>
                <LogoFooter src={FooterImg} alt="" />
                    <ul>
                        <li>
                        <ContactLink label="Send me an email" onClick={() => window.location.href = 'mailto:joanna.olofsson@gmail.com'}>Click to send me an email</ContactLink>
                        </li> 
                        <li> &copy; 2024 Joanna Olofsson - All rights reserverd</li>
                    </ul>
                    <SocialIcons />
            </Container>
        </StyledFooter>
    );
}

export default Footer;