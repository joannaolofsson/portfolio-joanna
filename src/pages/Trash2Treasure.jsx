import styled from 'styled-components';
import skissImg from '../assets/Skisser.png';
import interviewImg from '../assets/Intervjuer.png';
import scanImg from '../assets/LoginScan.png';
import '../index.css';
import { Container, StyledHeader, StyledHeadline  } from '../styles/Containers';
import Back from '../components/Back/GoBack';
import { StyledH2, StyledH4, StyledP } from '../styles/Fonts.styled';


function Trash2treasure() {
    return(
        <>
            <Container>
                <StyledHeader>
                    <StyledHeadline id='case1'>   
                        <Back />
                        <StyledH2>Trash 2 Treasure</StyledH2>
                    </StyledHeadline>
                </StyledHeader>

      
                   <StyledT2TGridContainer>
                    <StyledBriefwrapper>
                        <StyledBrief>
                        <StyledH4>Brief</StyledH4>
                        <StyledP>During spring 2024, I was part a challenge at my school Chas Academy. My class UX / UI designer with frontend skills
                            was divided into teams with a few of the other classes, from DevOps to design. Our objective was to design an app
                            under de theme "Green tech".</StyledP> 
                            </StyledBrief>
                            </StyledBriefwrapper>
    
                            <StyledCaseRole>
                                <StyledTextRow><StyledH4>My role: </StyledH4>
                                <StyledP>UX designer & frontend developer</StyledP></StyledTextRow>
                                <StyledTextRow><StyledH4>Tools:</StyledH4>
                                <StyledP>Figma, Visual Studio Code</StyledP></StyledTextRow> 
                            </StyledCaseRole>
                        
                        
                        <StyledImgWrapper1><TrashImage src={interviewImg} alt="User research" className="ImageT2T"/></StyledImgWrapper1>

                    <StyledImgWrapper2>
                        <TrashImage src={skissImg} alt="Skisser projekt" className="ImageT2T"/></StyledImgWrapper2>

                    <StyledContent1wrapper>
                    <StyledContent1>
                        <StyledH4>Challenges</StyledH4>
                        <StyledTextRow>
                        <StyledP>The biggest challenge of the project was that the different classes had a different amout of time 
                            allocated to this project. For instance, had DevOps only a few weeks in the beginning of the project. 
                        </StyledP></StyledTextRow>
                        <StyledTextRow>
                        <StyledP>I struggled alot during this project, trying to get everyone to communicate. The most important
                            challenge was probably related to inexperience. Except for DevOps and user research, everyone wanted to be part of
                            all aspects of the project, which slowed us down. 
                           </StyledP>
                        </StyledTextRow>
                    </StyledContent1>
                    </StyledContent1wrapper>
                    
                    <StyledContent2wrapper>
                    <StyledContent2>
                        <StyledH4>Our solution</StyledH4>
                        <StyledP>I do not think that anyone in our team was happy with the result. For me the frustration came from 
                            the requirements for my course to do UX / UI and frontend work. So in the end I had to submit 
                            another design and coding work, to meet the requirements for this course.</StyledP>
                    </StyledContent2>
                    </StyledContent2wrapper>

                    <StyledImgWrapper3><TrashImage src={scanImg} alt="green sketch" className="ScanImg" /></StyledImgWrapper3>

                    <StyledContent3wrapper>
                    <StyledContent3>
                        <StyledH4>I learned so much</StyledH4>
                        <StyledP>This is probably the project from school that I learned the most from. I learned that I it's in my roll
                            as a UX/UI designer to make arguments for my design. I also learned that in such a short amout of
                            time it is important to make the scope small and set up clear rolls.                 
                        </StyledP>
                    </StyledContent3>
                    </StyledContent3wrapper>
            </StyledT2TGridContainer>
        </Container>
        </>
    );
}

export default Trash2treasure;

const StyledT2TGridContainer = styled.div`
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
        padding: 4rem 2rem 2rem 2rem;

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
        padding: 2rem;
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

const TrashImage = styled.img`
    max-width: 100%;
`;