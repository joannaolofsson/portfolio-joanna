import styled from "styled-components";
import { Container, StyledHeader, StyledHeadline  } from "../styles/Containers";
import { StyledP, StyledH4, StyledH2, StyledH5 } from "../styles/Fonts.styled";
import Back from "../components/Back/GoBack";
import brandPrincipImg from '../assets/brand_principer.png';
import brandTargetImg from '../assets/Brand_target.png';
import brandCompImg from '../assets/brand_components.png';

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
                <StyledBriefwrapper>
                <StyledBrief>
                    <StyledH4>Case description</StyledH4>
                    <StyledP>An educational assignment to create a Brand style guide for a made up company</StyledP>
                </StyledBrief>
                </StyledBriefwrapper>

                <StyledCaseRole>
                    <StyledTextRow><StyledH4>My role: </StyledH4>
                    <StyledP>UX / UI designer</StyledP></StyledTextRow>
                    <StyledTextRow><StyledH4>Tools:</StyledH4>
                    <StyledP>Figma</StyledP></StyledTextRow> 
                </StyledCaseRole>
 
                <StyledImgWrapper1>
                    <BrandImage src={brandPrincipImg} alt="Image of Branding principles" />
                </StyledImgWrapper1>

                    
                <StyledImgWrapper2>
                    <BrandImage src={brandTargetImg} alt="Image of Branding target audience" />
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
                        helped me narrow down the decisions I needed to make. </StyledP></StyledContent2>
                         </StyledContent2wrapper>
                <StyledImgWrapper3>                   
                    <BrandImage src={brandCompImg} alt="image solution" />
                </StyledImgWrapper3>

                <StyledContent3wrapper>
                <StyledContent3>  
                <StyledH4>What I learned</StyledH4>
                    <StyledP>I learned that with limited time and budget, I needed to choose to create my puzzle pieces from 
                        an icon instead of a more complex custome made one.
                    </StyledP>
                </StyledContent3>
                </StyledContent3wrapper>
            </StyledBrandGridContainer>
        </Container>
        </>
    );
}

export default Brand;

const StyledBrandGridContainer = styled.div`
    width: 1000px;
    max-width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(auto-fit, 1fr);
    gap: 2rem;

    @media screen and  (min-width: 768px) {
        grid-template-columns: 320px 1fr;   
        grid-template-rows: repeat(auto-fit, 1fr);   
        gap: 3rem;
    }
`;

const StyledBriefwrapper = styled.div`
    grid-area: 1 / 1 / 2 / 2;
    padding: 3rem 2rem 0 2rem;

    @media screen and  (min-width: 768px) {
        grid-area: 1 / 1 / 2 / 3;
        border-right: 1px solid #CCC;    
    }
`;

const StyledBrief = styled.div`

`;

const StyledCaseRole = styled.div`
    grid-area: 2 / 1 / 3 / 2;
    align-self: center;
    padding: 3rem 2rem 0 2rem;

    @media screen and  (min-width: 768px) {
        grid-area: 2 / 1 / 3 / 2;
        border-right: 1px solid #ccc;
    }
`;

const StyledTextRow = styled.div`
  padding-bottom: 1rem;
`;


const StyledImgWrapper1 = styled.div`
    grid-area: 3 / 1 / 4 / 2;
    padding: 0 2rem 2rem 2rem;

    @media screen and  (min-width: 768px) {
        grid-area: 2 / 2 / 3 / 3;

    }
`;


const StyledContent1wrapper = styled.div`
        grid-area: 4 / 1 / 5 / 2;

        @media screen and  (min-width: 768px) {
        grid-area: 3 / 1 / 4 / 2;
    
    }
`;

const StyledContent1 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0 2rem 2rem 2rem;

    @media screen and  (min-width: 768px) {
        border-right: 1px solid #ccc;
    }
`;

const StyledImgWrapper2 = styled.div`
    grid-area: 5 / 1 / 6 / 2;
    padding: 0 2rem 2rem 2rem;

    @media screen and  (min-width: 768px) {
        grid-area: 3 / 2 / 4 / 3;
    }
`;


const StyledContent2wrapper = styled.div`
    grid-area: 6 / 1 / 7 / 2;
    


    @media screen and  (min-width: 768px) {
        grid-area: 4 / 1 / 5 / 2;
    }
`;

const StyledContent2 = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 2rem 2rem 2rem;

    @media screen and  (min-width: 768px) {
        border-right: 1px solid #ccc;
    }
`;

const StyledImgWrapper3 = styled.div`
    grid-area: 7 / 1 / 8 / 2;
    padding: 0 2rem 2rem 2rem;



    @media screen and  (min-width: 768px) {
        grid-area: 4 / 2 / 5 / 3;
    }
`;

const StyledContent3wrapper = styled.div`
      grid-area: 8 / 1 / 9 / 2;
    


    @media screen and  (min-width: 768px) {
        grid-area: 5 / 1 / 6 / 3;
    }
`;

const StyledContent3 = styled.div`
  
    display: flex;
    flex-direction: column;
    padding: 0 2rem 2rem 2rem;


    @media screen and  (min-width: 768px) {
        border-right: 1px solid #ccc;
    }
`;

const BrandImage = styled.img`
    max-width: 100%;
`;