import { StyledLink } from "../../styles/Links.styled";
import FooterItems from "./FooterItems";
import { StyledSocialIcons } from "../../styles/misc.styled";



function SocialIcons() {
    return (
        <StyledSocialIcons>
            {FooterItems.map((item, index) => {
                return (
                    <li key={index}>
                    <StyledLink to={item.url} target="_blank">
                    {item.icon}</StyledLink>
                    </li>
                );
            })}
        </StyledSocialIcons>
    );
}

export default SocialIcons;
