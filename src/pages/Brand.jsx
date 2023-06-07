import styled from "styled-components";
import { Container } from "../styles/Container.styled";
import { StyledText } from "../styles/Text.styled";
import { StyledHeader } from "../styles/Header.styled";
import { Headline } from "../styles/Headline.styled";
import Back from "../components/GoBack";
import { StyledP } from "../styles/Fonts.styled";



const BrandImage = styled.img`
    max-width: 60%;
`;

function Brand() {
    return(
        <>
        <StyledHeader>
        <Headline id='case2'>
                    <h2>Brand Style Guide</h2>
 
                </Headline>
                </StyledHeader>
                
                <Container>
                <Back />
            <StyledText>


                <h2>Case description</h2>
                    <p>To create a Brand style guide for a made up company</p>
    
                <h2>My roll</h2>
                <StyledP>UX/UI</StyledP>
                    <BrandImage src='../../src/assets/Brand_principer.svg' alt="" />
                    
    
                <h2>Challanges</h2>
                <BrandImage src='../../src/assets/Brand_target.svg' alt="" />
                    <StyledP>One of the challenges I faced was making color scheme decisions without conducting any user research. 
                        Early on, I found myself drawn to the idea of being a stylist, as if putting together a jigsaw puzzle. 
                        I came across an image of a flower created as a puzzle, but with a unique twist that differed from 
                        regular puzzle pieces. Unfortunately, I couldn't find a matching icon or image among the available 
                        plugins, and I even considered creating one myself using Illustrator.</StyledP>
    
                <h2>How I solved It</h2>
                    <BrandImage src='../../src/assets/Brand_components.svg' alt="" />
                    <StyledP>To overcome the color choice dilemma, I decided to search for color combinations in style images, which 
                        helped me narrow down the decisions I needed to make. I opted to use a common puzzle piece icon to save 
                        time and made the decision to save the original idea for another opportunity. </StyledP>
                    
                <h2>What I learned</h2>
                    <StyledP>I learned that with limited time and budget, I needed to make difficult choices. I wanted to to get 
                        Illustrator, but since it came with a cost and that creating my own images would take alot more time 
                        than choosing an icon from a plugin, I choose the latter. 
                    </StyledP>
                    </StyledText>
        </Container>
        </>
    );
}

export default Brand;