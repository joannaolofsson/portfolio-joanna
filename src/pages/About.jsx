import styled from "styled-components";
import Back from "../components/Back/GoBack";
import { Container, StyledHeader, StyledHeadline, Banner  } from "../styles/Containers";
import {StyledP, StyledH4, StyledH1, StyledH2 } from "../styles/Fonts.styled";
import profileImg from '../assets/joannaImage.png';
import { JoannaImage } from "../styles/misc.styled";
import { StyledTextRow, StyledTextPage, StyledHeadingWrapper } from "../styles/Containers";



function About() {
    return(
        <>
        <Container>
            <StyledHeader>
                <StyledHeadline>
                <Back />
                    <StyledH1>About me</StyledH1>
                </StyledHeadline>
            </StyledHeader>

        <Banner>
            <StyledH4>"I am motivated by the moments when someone has a sudden idea, finds a long-awaited solution, or 
                discovers something about themselves."</StyledH4>
            <JoannaImage src={profileImg} alt='image_joanna'/>
        </Banner>

        <StyledTextPage>
            <StyledTextRow>
                <StyledHeadingWrapper>
                <StyledH2>My story</StyledH2>
                </StyledHeadingWrapper>
                <StyledP>Passionate about creating and collaborating with others, I thrive on finding innovative solutions and 
                    working together to reach common goals. As a designer and developer, I find great joy in the iterative 
                    process, always eager to face the next challenge. </StyledP>
            </StyledTextRow>

            <StyledTextRow>
                <StyledP>My ultimate passion lies in creation, whether it involves designing components in Figma or implementing 
                    them in React. My background in Cognitive Behavioral Therapy (CBT) and patient work initially lured me to 
                    UX design. However, with more experience, I’ve realized that my strengths and passions lie more in frontend 
                    development and UI design, where I can leverage my logical mind to see tangible results.</StyledP>
            </StyledTextRow>

            <StyledTextRow>
                <StyledP>In my previous work with patients, I encountered many clients facing various challenges. This experience 
                    honed two key interests that I carry into my current work: a fascination with gamification as a motivational 
                    tool, and a commitment to designing and developing with accessibility and inclusivity in mind.
                </StyledP>
            </StyledTextRow>
   
            <StyledTextRow>
                <StyledP>I enjoy conducting courses and workshops and have previously served as a team leader. My exposure to 
                    LEAN methodologies and my passion for processes naturally led me to an interest in agile and Scrum practices.</StyledP>
            </StyledTextRow>

            <StyledTextRow>
                <StyledP>I recently completed my studies in "UX/UI Design with Frontend Skills" at Chas Academy. Alongside my 
                    studies, I conducted workshops for adults interested in international adoption. To unwind, I enjoy large 
                    jigsaw puzzles, dancing, gaming with my son, and walking the dog while listening to podcasts.</StyledP>
            </StyledTextRow>
        </StyledTextPage>
        </Container>
        
        </>
    );
}

export default About;

