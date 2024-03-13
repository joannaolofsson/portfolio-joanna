import styled from "styled-components";
import caselist from "./caselist";
import Cases from "./Cases";
import ProfilImg from '../../assets/joanna_image.png';
import { Container } from "../../styles/Container.styled";
import { Headline } from "../../styles/Headline.styled";
import { StyledHeader } from "../../styles/Header.styled";
import { Flex } from '../../styles/Flex.styled';
import { StyledLink } from "../../styles/Link.styled";
import { StyledH1 } from "../../styles/Fonts.styled";


function Home() {
    return(
       <>
        <StyledHeader>
            <Container>
                <Flex>
                    <JoannaImage src={ProfilImg} alt='image_joanna'/>
                        <div>
                            <StyledH1>UX designer & frontend developer</StyledH1>
                            <StyledPHome>I'm Joanna, a former CBT therapist, who realized that I can help people in more ways</StyledPHome>
                            <StyledLink to="/about">About me</StyledLink>
                        </div>                   
                </Flex>
            </Container>
        </StyledHeader>
        <Headline id="cases">
            <StyledH1>Cases</StyledH1>
        </Headline>
        <Container>
            {caselist.map((item, index) => ( 
                <Cases key={index} item={item}/>
            ))}
        </Container>
        </>
    );
}

export default Home;

export const StyledPHome = styled.p`
  padding: 0 0 1rem 1rem;
`;

export const JoannaImage = styled.img`
    max-width: 100%;
    margin: 2rem 0 0 0rem;
`;
