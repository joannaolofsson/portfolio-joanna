import React from 'react';
import styled from "styled-components";
import Back from '../../components/Back/GoBack';
import { Container, StyledHeader,  StyledHeadline  } from '../../styles/Containers';
import { StyledH2, StyledH3, StyledH5, StyledP, StyledH4, StyledH1 } from '../../styles/Fonts.styled';

function Resume () {
    return(
        <>
            <Container>
                <StyledHeader>
                    <StyledHeadline>
                    <Back/>
                    <StyledH1>Resume</StyledH1>
                    <StyledH4>Joanna Olofsson</StyledH4>
                    <StyledP>UX designer & frontend developer</StyledP>
                </StyledHeadline>
            </StyledHeader>

   
                    <StyledResumeGridContainer>
                        <StyledSkillsSection>
                            <StyledHeadingWrapper>
                            <StyledH3>Skills</StyledH3>
                            </StyledHeadingWrapper>
                                <StyledUl>
                                    <StyledLi>UX/UI design</StyledLi>
                                    <StyledLi>Accessibility</StyledLi>
                                    <StyledLi>HTML/CSS</StyledLi>
                                    <StyledLi>React/Javascript</StyledLi>
                                    <StyledLi>Workshop facilitator</StyledLi>
                                </StyledUl>
                                </StyledSkillsSection>

                        <StyledToolSection>
                        <StyledHeadingWrapper>
                            <StyledH3>Programs</StyledH3>
                            </StyledHeadingWrapper>
                                <StyledUl>
                                    <StyledLi>Figma</StyledLi>
                                    <StyledLi>Canva</StyledLi>
                                    <StyledLi>Miro</StyledLi>
                                    <StyledLi>Visual Studio Code</StyledLi>
                                    <StyledLi>Wordpress</StyledLi>
                                </StyledUl>
                                </StyledToolSection> 
    
                        <StyledWorkSection>
                            <StyledH2>Relevant workexperience</StyledH2>
                        </StyledWorkSection>

                        <StyledWorkSection1>
                        <StyledHeadingWrapper>
                            <StyledH3>Vattenfall IT </StyledH3>
                            </StyledHeadingWrapper>
                            <StyledH5>UX designer - Internship 2023-11 -- 2024-05
                            </StyledH5>
                            <StyledP>As a UX intern, I have been part of two different energy trading projects for B2B systems. In the first 
                                one, I began with prototyping and doing user testing. The biggest challange was to learn how to prototype for a computer system, 
                                with a huge amount of components, variables, variants and pages. 
                            </StyledP>
                            <StyledP>If the first one followed an agile process, the second one was almost the opposite, due to a strict timeline. Here the 
                                challenge was to understand complex energy products, enough to make design suggestions. Thereafter conduct 
                                usertests and analysis for products that was new to the user</StyledP>
                        </StyledWorkSection1>
                            
                        <StyledWorkSection2>
                        <StyledHeadingWrapper>
                            <StyledH3>Stockholms municipality</StyledH3>
                            </StyledHeadingWrapper>
                            <StyledH5>Parenting workshops - 2022-2023</StyledH5>
                            <StyledP>In my role, I facilitate workshops for groups of individuals undergoing the process 
                                of adopting a child. This responsibility entails overseeing group dynamics, 
                                facilitating discussions, and delivering informative sessions.</StyledP>
                        </StyledWorkSection2>

                        <StyledWorkSection3>
                        <StyledHeadingWrapper>
                            <StyledH3>Södertälje municipality</StyledH3>
                            </StyledHeadingWrapper>
                            <StyledH5>CBT therapist - 2007-2018</StyledH5>
                            <StyledP>During my time in Södertälje, I primarily focused on utilizing Cognitive Behavioral Therapy (CBT) techniques, 
                                both in individual and group settings. Additionally, I held the position of team leader for a period 
                                of time. It was during this role that I gained valuable experience in working according to LEAN 
                                methodologies.</StyledP>
                        </StyledWorkSection3>

                        <StyledWorkSection4>
                        <StyledHeadingWrapper>
                            <StyledH3>Di Luca & Di Luca / Enjoy wine & spirits</StyledH3>
                            </StyledHeadingWrapper>
                            <StyledH5>Controller & web -1999-2005</StyledH5>
                            <StyledP>This marked my first real contact with web development, where I not only fulfilled my role as a 
                                controller but also actively participated in a web project. This involved assessing the 
                                company's requirements and crafting various web content to meet those needs.</StyledP>
                        </StyledWorkSection4>
                            
                        <StyledCourseSection>
                            <StyledH2>Relevant education</StyledH2>
                        </StyledCourseSection>

                        <StyledCourseSection1>
                        <StyledHeadingWrapper>
                            <StyledH3>Chas Academy - UX/UI with frontend skills</StyledH3>
                            </StyledHeadingWrapper>
                            <StyledH5>September 2022 - June 2024</StyledH5>
                            <StyledP>This educational program encompasses a comprehensive range of skills, including UX and UI design, 
                                agile methodologies, as well as proficiency in HTML, CSS, JavaScript, and React.</StyledP>
                            </StyledCourseSection1>
                                    
                        <StyledCourseSection2>
                        <StyledHeadingWrapper>
                            <StyledH3>KBT Svealand - CBT Therapist</StyledH3>
                            </StyledHeadingWrapper>
                            <StyledH5>2005-2007</StyledH5>
                            <StyledP>For 1,5 year I studied this fundational psychotheraphy education. Besides theory and examination,
                                we had patient work and group training sessions. Together with my workexperience this helps 
                                me in UX research, in that I can target some bias, observe valuable non verbal clues and
                                most of all make the different types of user feel at ease during interviews and user tests.</StyledP>
                        </StyledCourseSection2>
                    </StyledResumeGridContainer>
                </Container>
        </>
    );
}

export default Resume;

const StyledResumeGridContainer = styled.div`
    margin: 2rem;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(auto-fit, 1fr);

    @media screen and  (min-width: 600px)  {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: repeat(auto-fit, 1fr);   
    }
`;

const StyledHeadingWrapper = styled.div`
    padding: 1.5em 0;
`;

const StyledSkillsSection = styled.div`
    grid-area: 1 / 1 / 2 / 2;
    margin-bottom: 2rem;

    @media screen and  (min-width: 600px) {
        grid-area: 1 / 1 / 2 / 2;
        margin-bottom: 3rem;
    }
`;

const StyledUl = styled.ul`
  list-style-type: none;
`;

const StyledLi = styled.li`
  line-height: 1.6;
  font-family: "Prompt", sans-serif;
  font-size: 1.125em;
`;

const StyledToolSection = styled.div`
    grid-area: 2 / 1 / 3 / 2;
    margin-bottom: 2rem;

    @media screen and  (min-width: 600px) {
        grid-area: 1 / 2 / 2 / 3;
    }
`;

const StyledWorkSection = styled.div`
    grid-area: 3 / 1 / 4 / 2;
    border-top: 1px solid #ccc;
    padding: 2rem 0 1rem 0;

    @media screen and  (min-width: 600px) {
        grid-area: 2 / 1 / 3 / 3;
    }
`;


const StyledWorkSection1 = styled.div`
    grid-area: 4 / 1 / 5 / 2;
    padding: 1rem 0;

    @media screen and  (min-width: 600px) {
        grid-area: 3 / 1 / 4 / 3;
    }
`;

const StyledWorkSection2 = styled.div`
    grid-area: 5 / 1 / 6 / 2;
    padding: 1rem 0;

    @media screen and  (min-width: 600px) {
        grid-area: 4 / 1 / 5 / 3;
    }
`;

const StyledWorkSection3 = styled.div`
    grid-area: 6 / 1 / 7 / 2;
    padding: 1rem 0;

    @media screen and  (min-width: 600px) {
        grid-area: 5 / 1 / 6 / 3;
    }
`;

const StyledWorkSection4 = styled.div`
    grid-area: 7 / 1 / 8 / 2;
    border-bottom: 1px solid #ccc;
    padding: 1rem 0;

    @media screen and  (min-width: 600px) {
        grid-area: 6 / 1 / 7 / 3;
    }
`;

const StyledCourseSection = styled.div`
    grid-area: 8 / 1 / 9 / 2;
    margin: 3rem 0 1rem 0;

    @media screen and  (min-width: 600px) {
        grid-area: 7 / 1 / 8 / 3;
    }
`;

const StyledCourseSection1 = styled.div`
    grid-area: 9 / 1 / 10 / 2;
    padding: 1rem 0;

    @media screen and  (min-width: 600px) {
        grid-area: 8 / 1 / 9 / 3;
    }
`;

const StyledCourseSection2 = styled.div`
    grid-area: 10 / 1 / 11 / 2;
    padding: 1rem 0;

    @media screen and  (min-width: 600px) {
        grid-area: 9 / 1 / 10 / 3;
    }
`;