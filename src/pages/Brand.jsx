import styled from "styled-components";
import { Container } from "../styles/Container.styled";
import { StyledText, StyledTextWord } from "../styles/Text.styled";
import { StyledHeader } from "../styles/Header.styled";
import { Headline } from "../styles/Headline.styled";
import { StyledP, StyledH1 } from "../styles/Fonts.styled";
import Back from "../components/GoBack";
import BrandPrincipImg from '../assets/brand_principer.svg';
import BrandTargetImg from '../assets/Brand_target.svg';
import BrandCompImg from '../assets/brand_components.svg';

function Brand() {
    return(
        <>
        <StyledHeader>
            <Headline id='case2'>
                <StyledH1>Brand Style Guide</StyledH1>
            </Headline>
                </StyledHeader>
                
                <Container>
                    <Back />
        
            <StyledText>
                <StyledTextWord>
                <h2>Case description</h2>
                <p>To create a Brand style guide for a made up company</p>
                <h2>My roll</h2>
                <StyledP>
                    UX/UI
                </StyledP>
                </StyledTextWord>
                <div>
                    <BrandImage src={BrandPrincipImg} alt="Image of Branding principles" />
                </div>
                </StyledText>
                    
            <StyledText>
                <div>
                    <BrandImage src={BrandTargetImg} alt="Image of Branding target audience" />
                </div>
                <StyledTextWord>
                <h2>Challenges</h2>
                    <StyledP>One of the challenges I faced was making color scheme decisions without conducting any user research. 
                        Early on, I found myself drawn to the idea of being a stylist, as if putting together a jigsaw puzzle. </StyledP>
                    <StyledP>
                        I came across an image of a flower created as a puzzle, but with a unique twist that differed from 
                        regular puzzle pieces. Unfortunately, I couldn't find a matching icon or image among the available 
                        plugins, and I even considered creating one myself using Illustrator.</StyledP>
                </StyledTextWord>
            </StyledText>

            <StyledText>
                <StyledTextWord>
                <h2>How I solved It</h2>
                    <StyledP>To overcome the color choice dilemma, I decided to search for color combinations in style images, which 
                        helped me narrow down the decisions I needed to make. I opted to use a common puzzle piece icon to save 
                        time and made the decision to save the original idea for another opportunity. </StyledP></StyledTextWord>
                <div>                   
                    <BrandImage src={BrandCompImg} alt="image solution" />
                </div>

            </StyledText>
            <StyledText>
                <div>     
                <h2>What I learned</h2>
                    <StyledP>I learned that with limited time and budget, I needed to make difficult choices. I wanted to to get 
                        Illustrator, but since it came with a cost and that creating my own images would take alot more time 
                        than choosing an icon from a plugin, I choose the latter. 
                    </StyledP></div>
            </StyledText>
        </Container>
        </>
    );
}

export default Brand;

const BrandImage = styled.img`
    max-width: 100%;
`;