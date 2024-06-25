import styled from "styled-components";
import Back from "../components/Back/GoBack";
import { Container, StyledContentBox, StyledHeader, StyledHeadline  } from "../styles/Containers";
import { StyledH1, StyledP, StyledH4 } from "../styles/Fonts.styled";
import ProfileImg from '../assets/joanna_image.png';


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
            <JoannaImage src={ProfileImg} alt='image_joanna'/>
        </Banner>

        <StyledContentBox>
        <h2>My story</h2>
        <StyledP>Passionate about learning and collaborating with others, I thrive on finding innovative solutions and working 
            together to reach common goals. As a UX designer, I find great joy in the creative process, with 
            everything from user research and wireframing to facilitating workshops. </StyledP>

        <StyledP>Creation is my ultimate passion, whether it involves designing components in Figma or implementing them in 
            React. While my focus has primarily been on UX design, I also want to expand my skills in development.</StyledP>
        
       <StyledP>For an extended period, I dedicated myself to working as a CBT therapist, specializing in assisting individuals 
            struggling with gambling, alcohol, and substance abuse. This experience has provided me with invaluable insights 
            into human behavior, understanding their underlying needs and challenges. Interacting with individuals with 
            various psychological issues has increased my ability to see different user needs and an interest to work according 
            to WCAG guidelines to continue helping people.</StyledP>

        <StyledP>I enjoy conducting courses and workshops, having previously served as a team leader. My exposure to LEAN 
            methodologies, as well as my passion for the “process” have made me naturally interested in agile and Scrum 
            practices..</StyledP>
            
        <StyledP>Currently, I am pursuing studies in UX/UI with frontend skills at Chas Academy. Alongside my studies, I have one 
            part-time job at a county housing facility for individuals battling addiction and another, where  I conduct 
            workshops for adults interested in international adoption. To unwind, I turn to large jigsaw puzzles and 
            podcasts with calming voices. </StyledP>
            </StyledContentBox>



        <Banner>
            <StyledH4>Fun facts about me</StyledH4>
            <ul>
                <li>I believe that everyone has the potential to change their lives, one habit at a time</li>
                <li>I have taken all kinds of danceclasses, from ballet, to tapping and hip hop</li>
                <li>I think I love Minecraft more than my 8 year old son</li>
            </ul>
        </Banner>
        </Container>
        
        </>
    );
}

export default About;

export const Banner = styled.div`
    max-width: 100%;
    margin: 2rem;
    padding: 0.5rem 2rem;
    font-style: italic;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 0 10px rgba(0,0,0,0.15);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const JoannaImage = styled.img`
    max-width: 100%;
`;