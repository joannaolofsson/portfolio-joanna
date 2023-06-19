import styled from "styled-components";
import { Container } from "../styles/Container.styled";
import { StyledText, StyledTextWord } from "../styles/Text.styled";
import { StyledHeader } from "../styles/Header.styled";
import { Headline } from "../styles/Headline.styled";
import { StyledH1, StyledP } from "../styles/Fonts.styled";
import Back from "../components/GoBack";
import CookwiseMiroImg from '../assets/cookwise-miro.svg';
import CookwisePersonaImg from '../assets/Persona-Helena.svg';
import CookwiseAppImg from '../assets/cookwise_app.svg';

const StyledImg = styled.img`
  max-width: 100%;
`;


function Cookwise() {
    return(
        <>
            <StyledHeader>
                <Headline id='case1'>   
                    <StyledH1>Cookwise</StyledH1>
                </Headline>
            </StyledHeader>
            <Container>
            <Back />
            <StyledText>
            <div>
            <h2>Brief</h2>
                    <StyledP>In this group assignment, our group task was to create a basic designsystem in Figma and design a 
                        responsive web app with styles and components.</StyledP> </div>
            </StyledText> 
            <StyledText>  
                <StyledTextWord>
            <h2>My role</h2>
                    <StyledP>Because from my background in CBT therapy, conducting user interviews and contributing to an effective 
                        communication within my team came naturally to me. Also to listen and to learn from more experienced 
                        team members, expecially when it came to the agile method. Viewing this project in hindsight, I 
                        remained consistently focused on the user's needs and our Persona throughout the entire design process.
                </StyledP>
                </StyledTextWord>
                    <div><StyledImg src={CookwiseMiroImg} alt="cookwise mirotavla"/></div>
                    </StyledText>

            <StyledText>
                <div>
            <StyledImg src={CookwisePersonaImg} alt="Image Persona" /></div>
            <StyledTextWord>
            <h2>Challenges</h2>
                <StyledP>Undertaking this project during the Christmas holiday presented both advantages and challenges. 
                    Conducting user research, juggling family commitments and synchronizing work schedules within the team 
                    proved to be challenging. Additionally, not being able to have frequent physical meetings required extensive 
                    communication efforts.</StyledP></StyledTextWord>
             </StyledText>

            <StyledText>
               <StyledTextWord>
               <h2>Solution</h2>
                <StyledP>Our solution to overcome these challenges was to have an open frequent communication within 
                    the team and relying on the solid groundwork we established during the initial sprint phase. This allowed 
                    us to avoid getting stuck, being overly ambitious and ensured that we always had a clear understanding 
                    of our next steps.
                </StyledP></StyledTextWord>
                <div> <StyledImg src={CookwiseAppImg} alt="Image app" /></div>
            </StyledText>
            <StyledText>
                <div><h2>What I learned</h2>
                <StyledP>After we completed our project, we as a team took some time to reflect on what we learned from it.  
                    Ironically, we all agreed on, that we could all benefit from being more assertive when discussing our own 
                    ideas within the group. Personally, I also discovered my strengths in communication and my interest for 
                    the agile method. I also learned that I want to enhance my skills in creating animations.                      
                </StyledP></div>

                </StyledText>
                </Container>
                </>
    );
}

export default Cookwise;