import styled from "styled-components";
import { Link } from "react-router-dom";
import SocialIcons from "./SocialIcons";
import { Flex } from "../../styles/Flex.styled";
import { Container } from "../../styles/Container.styled";


export const StyledFooter = styled.footer`
background-color: ${({ theme }) => theme.colors.footer};
color: #fff;
padding: 100px 0 60px;


img {
    margin-left: 2.5rem;
}

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
                <img src="./src/assets/logotype_dark.svg" alt="" />
                <Flex>
                    <ul>
                        <li>
                        <ContactLink onClick={() => window.location.href = 'mailto:joanna.olofsson@gmail.com'}>Click to send me an email</ContactLink>
                        </li> 
                        <li> &copy; 2023 Joanna Olofsson - All rights reserverd</li>
                    </ul>
                    <SocialIcons />
                </Flex>
            </Container>
        </StyledFooter>
    );
}

export default Footer;