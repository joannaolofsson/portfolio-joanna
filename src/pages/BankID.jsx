/*import qrCode from '../assets/QRCodeBankID.png';*/
import Back from '../components/Back/GoBack';
import '../index.css';
import { Container, StyledHeader,  StyledHeadline  } from '../styles/Containers';
import { StyledH2, StyledP, StyledH4 } from '../styles/Fonts.styled';
import loginImg from '../assets/Login.png';
import loginQrImg from '../assets/loginQr.png';
import qrMiniImg from '../assets/QrMini.png';
import { BankImage } from '../styles/misc.styled';
import { StyledBankGridContainer, StyledBriefwrapper, StyledCaseRole, StyledContent1, 
    StyledContent2, StyledContent3, StyledContent1wrapper, StyledContent2wrapper, StyledContent3wrapper } from '../styles/Bankid.styled';

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
                    <BankImage src={qrMiniImg} alt="Image of Branding principles" />
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
                <StyledImgWrapper2>
                    <BankImage src={loginImg} alt="Image of Login" />
                </StyledImgWrapper2>

                <StyledImgWrapper3>
                    <BankImage src={loginQrImg} alt="Image of Login Qr" />
                </StyledImgWrapper3>

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
