import React from "react";
import Logo from '../../assets/logotype.svg';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { StyledIcon, StyledImg} from "../../styles/misc.styled";
import { StyledLinkwrapper, StyledNav } from "../../styles/Containers";
import { StyledLink, StyledLogoLink } from "../../styles/Links.styled";

import links from "./Links";


function Navbar() {
    const handleLinkedInClick = () => {
        window.open('https://www.linkedin.com/in/joannaolofsson/', '_blank');
    };
    
    const handleGitHubClick = () => {
        window.open('https://www.github.com/joannaolofsson/', '_blank'); // Correct URL for GitHub profile
    };

    return (
        <>  
            <StyledNav>
                <StyledLogoLink to="/">
                    <StyledImg src={Logo} alt="Logo" /> 
                </StyledLogoLink>
                <StyledLinkwrapper>
                    {links.map(link => <StyledLink to={link.to} key={link.id}>{link.text}</StyledLink>)}
                    <StyledIcon onClick={handleLinkedInClick} style={{ cursor: 'pointer' }}>
                        <FaLinkedin size={32} />
                    </StyledIcon>  
                    <StyledIcon onClick={handleGitHubClick} style={{ cursor: 'pointer' }}>
                        <FaGithub />
                    </StyledIcon>  
                </StyledLinkwrapper>  
            </StyledNav>
        </>
    );
}

export default Navbar;
