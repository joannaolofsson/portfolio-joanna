import React from "react";
import SocialIcons from "./SocialIcons";
import { Container, StyledContentwrapper} from "../../styles/Containers";
import FooterImg from '../../assets/logotypeDark.svg';
import { StyledP } from "../../styles/Fonts.styled";
import { StyledFooter } from "../../styles/Containers";
import { LogoFooter } from "../../styles/misc.styled";
import { ContactLink } from "../../styles/Links.styled";
import { StyledUl, StyledLi } from "../../styles/Semantic";


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