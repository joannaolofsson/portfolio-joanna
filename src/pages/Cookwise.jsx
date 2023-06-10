import styled from "styled-components";
import { Container } from "../styles/Container.styled";
import { StyledText } from "../styles/Text.styled";
import { StyledHeader } from "../styles/Header.styled";
import { Headline } from "../styles/Headline.styled";
import { StyledP } from "../styles/Fonts.styled";
import Back from "../components/GoBack";
import CookwiseMiroImg from '../assets/cookwise-miro.svg';
import CookwisePersonaImg from '../assets/Persona-Helena.svg';
import CookwiseAppImg from '../assets/cookwise_app.svg';

const StyledImg = styled.img`
  max-width: 60%;
`;


function Cookwise() {
    return(
        <>
            <StyledHeader>
                <Headline id='case1'>   
                    <h2 >Cookwise</h2>
                </Headline>
            </StyledHeader>
            <Container>
            <Back />
            <StyledText>
            <h2>Brief</h2>
                    <StyledP>In this group assignment, our group task was to create a basic designsystem in Figma and design a 
                        responsive web app with styles and components.</StyledP>
            </StyledText>          
            <StyledText>
    
                <h2>My role</h2>
                    <StyledImg src={CookwiseMiroImg} alt="cookwise mirotavla"/>
                    <StyledP>Because from my background in CBT therapy, conducting user interviews and contributing to an effective 
                        communication within my team came naturally to me. Also to listen and to learn from more experienced 
                        team members, expecially when it came to the agile method. Viewing this project in hindsight, I 
                        remained consistently focused on the user's needs and our Persona throughout the entire design process.
                </StyledP>
                    <StyledImg src={CookwisePersonaImg} alt="" />
            </StyledText>
            <StyledText>
            <h2>Challenges</h2>
                <StyledP>Undertaking this project during the Christmas holiday presented both advantages and challenges. 
                    Conducting user research, juggling family commitments and synchronizing work schedules within the team 
                    proved to be challenging. Additionally, not being able to have frequent physical meetings required extensive 
                    communication efforts.</StyledP>
                   </StyledText>
            <StyledText>
            <h2>Solution</h2>
                <StyledImg src={CookwiseAppImg} alt="" />
                <StyledP>Our solution to overcome these challenges was to have an open frequent communication within 
                    the team and relying on the solid groundwork we established during the initial sprint phase. This allowed 
                    us to avoid getting stuck, being overly ambitious and ensured that we always had a clear understanding 
                    of our next steps.
                </StyledP>
            </StyledText>
            <StyledText>
            <h2>What I learned</h2>
                <StyledP>After we completed our project, we as a team took some time to reflect on what we learned from it.  
                    Ironically, we all agreed on, that we could all benefit from being more assertive when discussing our own 
                    ideas within the group. Personally, I also discovered my strengths in communication and my interest for 
                    the agile method. I also learned that I want to enhance my skills in creating animations.                      
                </StyledP>
                </StyledText>
                </Container>
                </>
    );
}

export default Cookwise;