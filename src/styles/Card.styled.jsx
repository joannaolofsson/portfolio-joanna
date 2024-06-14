import styled from "styled-components";

export const StyledCard = styled.div`
    display: flex;
    align-items: center;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 15px;
    box-shadow: 0 0 10px rgba(0,0,0,0.15);
    margin: 40px 0;
    padding: 40px;
    flex-direction: ${({layout}) => layout|| 'row'};

    p {
        padding: 0 20px 20px 0;
    }
    
    img {
        width: 80%;
    }

    & > div {
        flex: 1;
    }

    @media(max-width: ${({theme}) => theme.mobile}) {
        flex-direction: column;
    }
    `;