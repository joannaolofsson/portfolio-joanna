import React, { useState } from 'react';
import styled from "styled-components";
import { Document, Page } from 'react-pdf/dist/esm/entry.vite';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import resume from './resume.pdf';
import { Headline } from '../../styles/Headline.styled';
import { StyledLink } from '../../styles/Link.styled';
import { StyledHeader } from '../../styles/Header.styled';

export const DocStyled = styled.div`
    width: 100vw;
    display: flex;
    
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 600px) {
        display: none;
    }
`;


const Resume = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
  
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }
    return(
        <>
        <StyledHeader>
        <Headline>
        <h1>Resume</h1>
        </Headline>
        </StyledHeader>
        <Headline>
            <DocStyled>
            <Document file={resume} onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} />
            </Document>
                <p>{pageNumber} of {numPages}</p>
            </DocStyled>
            
                <StyledLink to='../src/pages/Resume/resume.pdf' target="_blank" download >Download Pdf</StyledLink>
                </Headline>

        </>
    );
}

export default Resume;

