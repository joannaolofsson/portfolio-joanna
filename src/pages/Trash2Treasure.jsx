import styled from 'styled-components';
import SkissImg from '../assets/Skisser.png';
import InterviewImg from '../assets/Intervjuer.png';
import ScanImg from '../assets/LoginScan.png';
import '../index.css';
import { Container, StyledHeader, StyledHeadline  } from '../styles/Containers';
import Back from '../components/Back/GoBack';


function Trash2treasure() {
    return(
        <>
            <Container>
                <StyledHeader>
                    <StyledHeadline id='case1'>   
                        <Back />
                        <h1>Chas Challenge</h1>
                    </StyledHeadline>
                </StyledHeader>

      
                   <StyledT2TGridContainer>
                        <StyledBrief>
                        <h2>Brief</h2>
                        <p>During spring 2024, I was part a challenge at my school Chas Academy. My class UX / UI designer with frontend skills
                            was divided into teams with a few of the other classes, from DevOps to design. Our objective was to design an app
                            under de theme "Green tech".</p> 
                            </StyledBrief>
    
                        <StyledCaseRole>
                            <h2>Min roll</h2>
                            <p>UX / UI and frontend </p>
                            </StyledCaseRole>
                        
                        
                        <StyledImgWrapper1><TrashImage src={InterviewImg} alt="User research" className="ImageT2T"/></StyledImgWrapper1>

                    <StyledImgWrapper2>
                        <TrashImage src={SkissImg} alt="Skisser projekt" className="ImageT2T"/></StyledImgWrapper2>

                    <StyledContent1>
                        <h2>Challenges</h2>
                        <p>The biggest challenge of the project was that the different classes had a different amout of time 
                            allocated to this project. For instance, had DevOps only a few weeks in the beginning of the project. 
                        </p>
                        <p>I struggled alot during this project, trying to get everyone to communicate. The most important
                            challenge was though that I should ha pushed more for our group to decide on our rolls. Instead it
                            ended up with everyone wanting to make decisions on both design and coding in a very short amount 
                            of time and we lost time.</p>
                    </StyledContent1>
                    

                    <StyledContent2>
                        <h2>Our solution</h2>
                        <p>I do not think that anyone in our team was happy with the result. For me the frustration came from 
                            the requirements for my course to do UX / UI and frontend work. So in the end I had to submit 
                            extra design and coding work, for me to pass the cource.</p>
                    </StyledContent2>

                    <StyledImgWrapper3><TrashImage src={ScanImg} alt="Grön skiss" className="ScanImg" /></StyledImgWrapper3>

                    <StyledContent3>
                        <h2>I learned so much</h2>
                        <p>This is probably the project from school that I learned the most from. I learned that I it's in my roll
                            as a UX/UI designer to make arguments for my design. I also learned that in such a short amout of
                            time it is important to make the scope small and set up clear rolls.                 
                        </p>
                    </StyledContent3>
            </StyledT2TGridContainer>
        </Container>
        </>
    );
}

export default Trash2treasure;

const StyledT2TGridContainer = styled.div`
    max-width: 100%;
    margin: 2rem;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(auto-fit, 1fr);
    gap: 2rem;

    @media(min-width: ${({theme}) => theme.small}) {
        grid-template-columns: 1fr, 1fr, 1fr;
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

    @media(min-width: ${({theme}) => theme.small}) {
        grid-area: 2 / 1 / 3 / 2;
    }
`;

const StyledImgWrapper1 = styled.div`
    grid-area: 3 / 1 / 4 / 2;
    justify-self: center;

    @media(min-width: ${({theme}) => theme.small}) {
        grid-area: 2 / 2 / 3 / 4;
    }
`;

const StyledContent1 = styled.div`
    grid-area: 4 / 1 / 5 / 2;

    @media(min-width: ${({theme}) => theme.small}) {
        grid-area: 3 / 1 / 4 / 2;
    }
`;

const StyledImgWrapper2 = styled.div`
    grid-area: 5 / 1 / 6 / 2;

    @media(min-width: ${({theme}) => theme.small}) {
        grid-area: 3 / 2 / 4 / 4;
    }
`;



const StyledContent2 = styled.div`
    grid-area: 6 / 1 / 7 / 2;

    @media(min-width: ${({theme}) => theme.small}) {
        grid-area: 4 / 1 / 5 / 3;
    }
`;

const StyledImgWrapper3 = styled.div`
    grid-area: 7 / 1 / 8 / 2;

    @media(min-width: ${({theme}) => theme.small}) {
        grid-area: 4 / 3 / 5 / 4;
    }
`;

const StyledContent3 = styled.div`
    grid-area: 8 / 1 / 9 / 2;

    @media(min-width: ${({theme}) => theme.small}) {
        grid-area: 5 / 1 / 6 / 4;
    }
`;

const TrashImage = styled.img`
    max-width: 100%;
`;

