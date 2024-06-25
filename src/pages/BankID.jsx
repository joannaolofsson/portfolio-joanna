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
                <StyledH2>
                    BankID login for swedish electricity company
                </StyledH2>   
            </StyledHeadline>
        </StyledHeader>

        <StyledBankIDGridContainer>
            <StyledBrief><StyledH4>Brief</StyledH4>
                <StyledP>
                In this project, I developed a login function for a company on the 
                electricity market. The acceptance criteria required the implementation 
                of two types of login: one using Swedish BankID and the other using email 
                and password. Additionally, the login needed to provide a good user 
                experience and include a cookie banner.
                </StyledP></StyledBrief>
            <StyledCaseRole>
                <div>
                    <StyledH5>My role: </StyledH5>
                    <StyledP>
                        UX designer & frontend developer
                    </StyledP>
                </div>
                <div>
                <h3>
                    Tools: 
                </h3>
                <StyledP>
                    Figma, Visual Studio Code
                </StyledP>
                </div> 
                </StyledCaseRole>
                        <StyledImgWrapper><img src={QrKod} alt="Image of a QR code"/></StyledImgWrapper>    
                <StyledContent1>
                        <h2>Challenges</h2>
                        <StyledP>One challenge was that this project was part of my education as a UX/UI 
                            designer with frontend skills. As the name suggests, it involved all these components: 
                            UX, UI, and frontend development. Additionally, there were various requirements 
                            specific to BankID, adjustments for security, and IT implementation at the company. 
                            Another challenge was that most of the user research had already been completed, so 
                            instead of conducting user interviews, I had to write a summary of the existing 
                            research.</StyledP>
                </StyledContent1>
                <StyledContent2><h2>Solutions</h2>
                <StyledP>More info soon</StyledP></StyledContent2>
                <StyledContent3></StyledContent3>
                <StyledContent4><h2>What I learned</h2>
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
        grid-template-columns: 1fr, 1fr;
        grid-template-rows: repeat(auto-fit, 1fr);   
    }
`;


const StyledBrief = styled.div`
    grid-area: 1 / 1 / 2 / 2;

    @media(min-width: ${({theme}) => theme.small}) {
        grid-area: 1 / 1 / 2 / 3;
    }
`;

const StyledCaseRole = styled.div`
    grid-area: 2 / 1 / 3 / 2;
    align-self: center;

    @media(min-width: ${({theme}) => theme.small}) {
        grid-area: 2 / 1 / 3 / 2;
    }
`;

const StyledImgWrapper = styled.div`
    grid-area: 3 / 1 / 4 / 2;
    justify-self: center;

    @media(min-width: ${({theme}) => theme.small}) {
        grid-area: 2 / 2 / 3 / 3;
    }
`;

const StyledContent1 = styled.div`
    grid-area: 4 / 1 / 5 / 2;

    @media(min-width: ${({theme}) => theme.small}) {
        grid-area: 3 / 1 / 4 / 3;
    }
`;

const StyledContent2 = styled.div`
    grid-area: 5 / 1 / 6 / 2;

    @media(min-width: ${({theme}) => theme.small}) {
        grid-area: 4 / 1 / 5 / 3;
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