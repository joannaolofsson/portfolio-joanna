import styled from 'styled-components';
import QrKod from '../assets/QRCodeBankID.png';
import Back from '../components/Back/GoBack';
import '../index.css';
import { Container, StyledHeader,  StyledHeadline  } from '../styles/Containers';
import { StyledH2, StyledP, StyledH4, StyledH5 } from '../styles/Fonts.styled';


function BankID() {
    return(
        <>
        <Container>
            <StyledHeader>
                <StyledHeadline>
                    <Back />
                <StyledH2>BankID login for swedish electricity company</StyledH2>   
            </StyledHeadline>
        </StyledHeader>

        <StyledBankIDGridContainer>
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

            <StyledImgWrapper><img src={QrKod} alt="Image of a QR code"/></StyledImgWrapper>
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
                <StyledContent2><StyledH4>Solutions</StyledH4>
                <StyledP>More info soon</StyledP></StyledContent2>
            </StyledContent2wrapper>

            <StyledContent3></StyledContent3>
                <StyledContent4><StyledH4>What I learned</StyledH4>
                <StyledP>More info soon</StyledP></StyledContent4>
                
            <StyledContent5></StyledContent5>
                </StyledBankIDGridContainer>
                </Container>
        </>
    );
}

export default BankID;

const StyledBankIDGridContainer = styled.div`
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

const StyledBriefwrapper = styled.div`
        grid-area: 1 / 1 / 2 / 2;

    @media(min-width: ${({theme}) => theme.small}) {
        grid-area: 1 / 1 / 2 / 3;
    }
`;

const StyledBrief = styled.div`
    display: flex;
    flex-direction: column;
    padding: 3rem 1rem 3rem 0;

    @media(min-width: ${({theme}) => theme.small}) {
        border-right: 1px solid #ccc;
    }
`;

const StyledTextRow = styled.div`
  padding-bottom: 1rem;
`;

const StyledCaseRole = styled.div`
    grid-area: 2 / 1 / 3 / 2;
    align-self: center;
    padding: 3rem 1rem 3rem 0;


    @media(min-width: ${({theme}) => theme.small}) {
        grid-area: 2 / 1 / 3 / 2;
        border-right: 1px solid #ccc;
    }
`;

const StyledImgWrapper = styled.div`
    grid-area: 3 / 1 / 4 / 2;
    justify-self: center;

    @media(min-width: ${({theme}) => theme.small}) {
        grid-area: 2 / 2 / 3 / 3;
    }
`;

const StyledContent1wrapper = styled.div`
    grid-area: 4 / 1 / 5 / 2;


    @media(min-width: ${({theme}) => theme.small}) {
        grid-area: 3 / 1 / 4 / 3;    

    }
`;


const StyledContent1 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 3rem 1rem 1rem 0;

    @media(min-width: ${({theme}) => theme.small}) {
        border-right: 1px solid #ccc;
    }
`;

const StyledContent2wrapper = styled.div`
   grid-area: 5 / 1 / 6 / 2;


    @media(min-width: ${({theme}) => theme.small}) {
        grid-area: 4 / 1 / 5 / 3; 

    }
`;


const StyledContent2 = styled.div`
    display: flex;
    flex-direction: column;
    padding: 3rem 1rem 3rem 0;

    @media(min-width: ${({theme}) => theme.small}) {
        
    }
`;

const StyledContent3 = styled.div`
    grid-area: 6 / 1 / 7 / 2;

    @media(min-width: ${({theme}) => theme.small}) {
        grid-area: 5 / 1 / 6 / 3;
    }
`;

const StyledContent4 = styled.div`
    grid-area: 7 / 1 / 8 / 2;

    @media(min-width: ${({theme}) => theme.small}) {
        grid-area: 6 / 1 / 7 / 3;
    }
`;

const StyledContent5 = styled.div`
    grid-area: 8 / 1 / 9 / 2;

    @media(min-width: ${({theme}) => theme.small}) {
        grid-area: 7 / 1 / 8 / 3;
    }
`;