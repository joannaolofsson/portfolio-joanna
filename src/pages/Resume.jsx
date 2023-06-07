import React from 'react';
import styled from "styled-components";
import { Container } from '../styles/Container.styled';
import { StyledHeader } from '../styles/Header.styled';
import { Headline } from '../styles/Headline.styled';
import Back from '../components/GoBack';
import { StyledH4, StyledLi, StyledH3 } from '../styles/Fonts.styled';


const GridHeader = styled.div`
    background-color: ${({ theme }) => theme.colors.header};
    padding: 60px 0;

    text-align: center;
`;

const ResumeHead = styled.div`

  text-align: center;
`; 

const Sidebar = styled.div`
    max-width: 100%;
    background-color: ${({ theme }) => theme.colors.header};
    padding-left: 2rem;
    display:flex ;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 1rem;

    @media screen and (max-width: 768px){
        flex-direction: column;
    }
`;

const MainBox = styled.div`
  display: flex;
  flex-direction: column;

  li{ 
    list-style-type: none;
  }
`;

const MainBoxExp = styled.div`
    margin-top: 1rem;
`;

const MainBoxEdu = styled.div`
    margin-top: 1rem;
`;

function Resume () {


    return(
        <>
            <StyledHeader>
                <Headline>
                    <h2>Resume</h2>
                </Headline>
            </StyledHeader>
            <Container>
                <Back />
                    <ResumeHead>
                        <h3>
                            Joanna Olofsson
                        </h3>
                        <p>
                            UX/UI designer with frontend skills
                        </p>
                    </ResumeHead>
                    <Sidebar>
                        <div>
                            <StyledH4>Skills</StyledH4>
                                <ul>
                                    <li>UX
                                    </li>
                                    <li>UI
                                    </li>
                                    <li>
                                    HTML/CSS/React
                                    </li>
                                    <li>
                                    CBT therapy
                                    </li>
                                </ul>
                        </div>
                        <div>
                            <h4>Programs</h4>
                                <ul>
                                    <li>
                                    Figma
                                    </li>
                                    <li>
                                    Miro
                                    </li>
                                    <li>
                                    Visual Studio Code
                                    </li>
                                    <li>Wordpress</li>
                                </ul>
                        </div>    
                    </Sidebar>

                    <MainBox>
                        <MainBoxExp>
                            <StyledH3>Relevant workexperience</StyledH3>
                                <ul>
                                    <StyledLi><StyledH4>Stockholms municipality</StyledH4></StyledLi>
                                        <p>Parenting workshops - 2022-2023</p>
                                        <p>In my role, I facilitate workshops for groups of individuals undergoing the process 
                                            of adopting a child. This responsibility entails overseeing group dynamics, 
                                            facilitating discussions, and delivering informative sessions.</p>

                                    <StyledLi><StyledH4>Södertälje municipality</StyledH4></StyledLi>
                                        <p>CBT therapist - 2007-2018</p>
                                        <p>During my tenure, I primarily focused on utilizing Cognitive Behavioral Therapy (CBT) techniques, 
                                            both in individual and group settings. Additionally, I held the position of team leader for a period 
                                            of time. It was during this role that I gained valuable experience in working according to LEAN 
                                            methodologies.</p>
                                    <StyledLi><StyledH4>Di Luca & Di Luca / Enjoy wine & spirits</StyledH4></StyledLi>
                                        <p>Controller & web -1999-2005</p>
                                        <p>This marked my initial foray into web development, where I not only fulfilled my role as a 
                                            controller but also actively participated in a web project. This involved assessing the 
                                            company's requirements and crafting various web content to meet those needs.</p>
                                </ul>
                        </MainBoxExp>
                        <MainBoxEdu>
                            <StyledH3>Relevant education</StyledH3>
                                <ul>
                                    <StyledLi><StyledH4>Chas Academy - UX/UI with frontend skills</StyledH4></StyledLi>
                                            <p>September 2022 - June 2024</p>
                                            <p>This educational program encompasses a comprehensive range of skills, including UX and UI design, 
                                                agile methodologies, as well as proficiency in HTML, CSS, JavaScript, and React.</p>

                                    <StyledLi><StyledH4>Nackademin - UX writing</StyledH4></StyledLi>
                                        <p>Spring 2022</p>
                                        <p>In this course, I learned how to write content for users with different challanges. So that they 
                                            understand and use information and functions on a webpage. </p>
                                </ul> 
                        </MainBoxEdu>
                    </MainBox>
                </Container>
        </>
    );
}

export default Resume;

