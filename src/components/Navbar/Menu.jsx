import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { StyledMenuLink } from "../../styles/Links.styled";
import { StyledMenu } from "../../styles/Containers";

const Menu = ({handleNavToggle}) => {
  const handleLinkedInClick = () => {
        window.open('https://www.linkedin.com/in/joannaolofsson/', '_blank');
    };
    
    const handleGitHubClick = () => {
        window.open('https://www.github.com/joannaolofsson/', '_blank'); // Correct URL for GitHub profile
    };
  
    return(
        <StyledMenu handleNavToggle={handleNavToggle}>
            <StyledMenuLink to="/" onClick={handleNavToggle}>Home</StyledMenuLink>
            <StyledMenuLink to="/casepage" onClick={handleNavToggle}>Cases</StyledMenuLink>
            <StyledMenuLink to="/about" onClick={handleNavToggle}>About</StyledMenuLink>
            <StyledMenuLink to="/resume" onClick={handleNavToggle}>Resume</StyledMenuLink>
            <StyledMenuLink onClick={handleLinkedInClick} style={{ cursor: 'pointer' }}>
            <FaLinkedin size={32}/>
            </StyledMenuLink>  
            <StyledMenuLink onClick={handleGitHubClick} style={{ cursor: 'pointer' }}>
            <FaGithub size={32}/>
            </StyledMenuLink>  
            <CloseToggle onClick={handleNavToggle}/>
        </StyledMenu>
    )
}

export default Menu;