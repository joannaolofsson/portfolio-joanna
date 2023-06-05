import styled from "styled-components";
import { Container } from "../../styles/Container.styled";
import { Headline } from "../../styles/Headline.styled";
import { StyledHeader } from "../../styles/Header.styled";
import { Flex } from '../../styles/Flex.styled';
import caselist from "./caselist";
import Cases from "./Cases";
import { StyledLink } from "../../styles/Link.styled";


function Home() {
    return(
       <>
        <StyledHeader>
            <Container>
                <Flex>
                    <ProfilImage src='./src/assets/joanna_image.png' alt=''/>
                    <div>
                        
                        <StyledH1>UX/UI designer with frontend skills</StyledH1>
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

export const StyledH1 = styled.h1`
  font-weight: 400;

  @media screen and(max-width: ${({theme}) => theme.mobile }) {
    padding-right: 1rem;
  }
`;

export const StyledPHome = styled.p`
  padding: 0 0 1rem 1rem;
`;

export const ProfilImage = styled.img`
    max-width: 100%;
    margin-top: 2rem;
`;
