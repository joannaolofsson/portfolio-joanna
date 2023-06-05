import React, { useState } from 'react';
import styled from "styled-components";
import { Container } from '../../styles/Container.styled';
import { StyledHeader } from '../../styles/Header.styled';
import { Headline } from '../../styles/Headline.styled';
import { HashLink as Link } from 'react-router-hash-link';


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
    padding: 2rem;

    @media screen and (max-width: 768px){
        flex-direction: column;
    }
`;

const MainBox = styled.div`
  display: flex;
  align-items: center;  

  li{ 
    list-style-type: none;
  }
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
                <Link to="/">Back</Link>
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
                        <h4>Skills</h4>
                        <ul>
                            <li>User research
                            </li>
                            <li>
                                Workshops
                            </li>
                            <li>
                                UI
                            </li>
                            <li>
                                HTML/CSS/React
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
                        <div>
                            <h4>Relevant workexperience</h4>
                            <ul>
                                <li>Stockholms municipality
                                    <p>Parenting workshops - 2022-2023</p>
                                    <p>In my role, I facilitate workshops for groups of individuals undergoing the process 
                                        of adopting a child. This responsibility entails overseeing group dynamics, 
                                        facilitating discussions, and delivering informative sessions.</p>
                                </li>
                                <li>Södertälje municipality
                                    <p>CBT therapist - 2007-2018</p>
                                    <p>During my tenure, I primarily focused on utilizing Cognitive Behavioral Therapy (CBT) techniques, 
                                        both in individual and group settings. Additionally, I held the position of team leader for a period 
                                        of time. It was during this role that I gained valuable experience in working according to LEAN 
                                        methodologies.</p>
                                </li>
                                <li>Di Luca & Di Luca / Enjoy wine & spirits
                                    <p>Controller & web -1999-2005</p>
                                    <p>This marked my initial foray into web development, where I not only fulfilled my role as a 
                                        controller but also actively participated in a web project. This involved assessing the 
                                        company's requirements and crafting various web content to meet those needs.</p>
                                </li>
                            </ul>
        
                            <h4>Relevant education</h4>
                            <ul>
                                <li>Chas Academy - UX/UI with frontend skills
                                    <p>September 2022 - June 2024</p>
                                    <p>This educational program encompasses a comprehensive range of skills, including UX and UI design, 
                                        agile methodologies, as well as proficiency in HTML, CSS, JavaScript, and React.</p>
                                </li>

                                <li>Nackademin - UX writing</li>
                                <p>Spring 2022</p>
                                <p>In this course, I learned how to write content for users with different challanges. So that they 
                                    understand and use information and functions on a webpage. </p>
                            </ul>
                        </div>
                    </MainBox>
                </Container>
        </>
    );
}

export default Resume;

