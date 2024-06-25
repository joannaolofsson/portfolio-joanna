import styled from "styled-components";
import { Container, StyledHeader, StyledHeadline  } from "../styles/Containers";
import { StyledP, StyledH4, StyledH2, StyledH5 } from "../styles/Fonts.styled";
import Back from "../components/Back/GoBack";
import BrandPrincipImg from '../assets/brand_principer.png';
import BrandTargetImg from '../assets/Brand_target.png';
import BrandCompImg from '../assets/brand_components.png';

function Brand() {
    return(
        <>
        <Container>
            <StyledHeader>
                <StyledHeadline id='case2'>
                <Back />
                    <StyledH2>Brand Style Guide</StyledH2>
                </StyledHeadline>
            </StyledHeader>
                
   
            <StyledBrandGridContainer>

                <StyledBrief>
                    <StyledH4>Case description</StyledH4>
                    <StyledP>An educational assignment to create a Brand style guide for a made up company</StyledP>
                </StyledBrief>
                <StyledCaseRole>

                    <StyledH4>My roll:</StyledH4>
                    <StyledP>UX/UI</StyledP>

                    <StyledH4>Tool:</StyledH4>
                    <StyledP>Figma</StyledP>
        
                </StyledCaseRole>
 
                <StyledImgWrapper1>
                    <BrandImage src={BrandPrincipImg} alt="Image of Branding principles" />
                </StyledImgWrapper1>

                    
                <StyledImgWrapper2>
                    <BrandImage src={BrandTargetImg} alt="Image of Branding target audience" />
                </StyledImgWrapper2>
                <StyledContent1wrapper>
                    <StyledContent1>
                <StyledH4>Challenges</StyledH4>
                    <StyledP>One of the challenges I faced was making color scheme decisions without conducting any user research. 
                        Early on, I found myself drawn to the idea of being a stylist, as if putting together a jigsaw puzzle. </StyledP>
                    </StyledContent1>
                </StyledContent1wrapper>

                <StyledContent2wrapper>
                <StyledContent2>
                <StyledH4>How I solved It</StyledH4>
                    <StyledP>To overcome the color choice dilemma, I decided to search for color combinations in style images, which 
                        helped me narrow down the decisions I needed to make. I opted to use a common puzzle piece icon to save 
                         time and made the decision to save the original idea for another opportunity. </StyledP></StyledContent2>
                         </StyledContent2wrapper>
                <StyledImgWrapper3>                   
                    <BrandImage src={BrandCompImg} alt="image solution" />
                </StyledImgWrapper3>


                <StyledContent3>  
                <StyledH4>What I learned</StyledH4>
                    <StyledP>I learned that with limited time and budget, I needed to make difficult choices. I wanted to to get 
                        Illustrator, but since it came with a cost and that creating my own images would take alot more time 
                        than choosing an icon from a plugin, I choose the latter. 
                    </StyledP></StyledContent3>   
            </StyledBrandGridContainer>
        </Container>
        </>
    );
}

export default Brand;

const StyledBrandGridContainer = styled.div`
    max-width: 100%;
    margin: 2rem;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(auto-fit, 1fr);
    gap: 2rem;

    @media(min-width: ${({theme}) => theme.small}) {
        grid-template-columns: 320px 1fr;   
        grid-template-rows: repeat(auto-fit, 1fr);   
    }
`;

const StyledBrief = styled.div`
    grid-area: 1 / 1 / 2 / 2;

    @media(min-width: ${({theme}) => theme.small}) {
        grid-area: 1 / 1 / 2 / 4;
    }
`;

const StyledCaseRole = styled.div`
    grid-area: 2 / 1 / 3 / 2;
    align-self: center;
    background-color: #e6e6e6;
    padding: 3rem 1rem;

    @media(min-width: ${({theme}) => theme.small}) {
        grid-area: 2 / 1 / 3 / 2;
    }
`;


const StyledImgWrapper1 = styled.div`
    grid-area: 3 / 1 / 4 / 2;

    @media(min-width: ${({theme}) => theme.small}) {
        grid-area: 2 / 2 / 3 / 4;

    }
`;


const StyledContent1wrapper = styled.div`
    grid-area: 4 / 1 / 5 / 2;


    @media(min-width: ${({theme}) => theme.small}) {
        grid-area: 3 / 1 / 4 / 2;
      
  
    }
`;

const StyledContent1 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background-color: #e6e6e6;
    padding: 3rem 1rem;

`;

const StyledImgWrapper2 = styled.div`
    grid-area: 5 / 1 / 6 / 2;

    @media(min-width: ${({theme}) => theme.small}) {
        grid-area: 3 / 2 / 4 / 4;
    }
`;


const StyledContent2wrapper = styled.div`
    grid-area: 6 / 1 / 7 / 2;
    


    @media(min-width: ${({theme}) => theme.small}) {
        grid-area: 4 / 1 / 5 / 2;
    }
`;

const StyledContent2 = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #e6e6e6;
    padding: 3rem 1rem;

    @media(min-width: ${({theme}) => theme.small}) {
        
    }
`;

const StyledImgWrapper3 = styled.div`
    grid-area: 7 / 1 / 8 / 2;

    @media(min-width: ${({theme}) => theme.small}) {
        grid-area: 4 / 2 / 5 / 4;
    }
`;

const StyledContent3 = styled.div`
    grid-area: 8 / 1 / 9 / 2;

    @media(min-width: ${({theme}) => theme.small}) {
        grid-area: 5 / 1 / 6 / 4;
    }
`;

const BrandImage = styled.img`
    max-width: 100%;
`;