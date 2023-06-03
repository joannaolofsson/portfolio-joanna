import { StyledLink } from '../Navbar/Navbar';
import styled from "styled-components";
import FooterItems from "./FooterItems";

export const StyledSocialIcons = styled.div`
display: flex;
align-items: center;
justify-content: center;

li {
    list-style: none;
}

a {
    border: 3px solid #fff;
    border-radius: 50%;
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

function SocialIcons() {
    return (
        <StyledSocialIcons>
            {FooterItems.map((item, index) => {
                return (
                    <li key={index}>
                    <StyledLink to={item.url}>
                    {item.icon}</StyledLink>
                    </li>
                );
            })}
        </StyledSocialIcons>
    );
}

export default SocialIcons;
