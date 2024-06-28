import styled from 'styled-components';
import qrCode from '../assets/QRCodeBankID.png';
import Back from '../components/Back/GoBack';
import '../index.css';
import { Container, StyledHeader,  StyledHeadline  } from '../styles/Containers';
import { StyledH2, StyledP, StyledH4 } from '../styles/Fonts.styled';

function BankID() {
    return(
        <>
        <Container>
            <StyledHeader>
                <StyledHeadline id='case2'>
                <Back />
                <StyledH2>BankID login for swedish electricity company</StyledH2>   
                </StyledHeadline>
            </StyledHeader>
                
   
            <StyledBankGridContainer>
                <StyledBriefwrapper>
                <StyledBrief>
                    <StyledH4>Brief</StyledH4>
                    <StyledP>In this project, I developed a login function for a company on the 
                    electricity market. The acceptance criteria required the implementation 
                    of two types of login: one using Swedish BankID and the other using email 
                    and password. Additionally, the login needed to provide a good user 
                    experience and include a cookie banner.</StyledP>
                </StyledBrief>
                </StyledBriefwrapper>

                <StyledCaseRole>
                    <StyledTextRow><StyledH4>My role: </StyledH4>
                    <StyledP>UX designer & frontend developer</StyledP></StyledTextRow>
                    <StyledTextRow><StyledH4>Tools:</StyledH4>
                    <StyledP>Figma, Visual Studio Code</StyledP></StyledTextRow> 
                </StyledCaseRole>
 
                <StyledImgWrapper1>
                    <BankImage src={qrCode} alt="Image of Branding principles" />
                </StyledImgWrapper1>

                    
 
                <StyledContent1wrapper>
                    <StyledContent1>
                        <StyledH4>Challenges</StyledH4>
                        <StyledP>One challenge was that this project was part of my education as a UX/UI 
                                designer with frontend skills. As the name suggests, it involved all these components: 
                                UX, UI, and frontend development. Additionally, there were various requirements 
                                specific to BankID, adjustments for security, and IT implementation at the company. 
                                Another challenge was that most of the user research had already been completed, so 
                                instead of conducting user interviews, I had to write a summary of the existing 
                                research.</StyledP>
                    </StyledContent1>
                </StyledContent1wrapper>

                <StyledContent2wrapper>
                <StyledContent2>
                <StyledH4>How I solved It</StyledH4>
                    <StyledP>More information soon</StyledP></StyledContent2>
                         </StyledContent2wrapper>


                <StyledContent3wrapper>
                <StyledContent3>  
                <StyledH4>What I learned</StyledH4>
                    <StyledP>More information soon
                    </StyledP>
                </StyledContent3>
                </StyledContent3wrapper>
            </StyledBankGridContainer>
        </Container>
        </>
    );
}

export default BankID;

const StyledBankGridContainer = styled.div`
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
        grid-area: 3 / 1 / 4 / 3;
    
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


const StyledContent2wrapper = styled.div`
    grid-area: 5 / 1 / 6 / 2;
    


    @media screen and  (min-width: 768px) {
        grid-area: 4 / 1 / 5 / 3;
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


const StyledContent3wrapper = styled.div`
      grid-area: 6 / 1 / 7 / 2;
    


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

const BankImage = styled.img`
    max-width: 100%;
`;