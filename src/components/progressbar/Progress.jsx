import styled from "styled-components";

export const ProContainer = styled.div`
    width: 100%;
`
export const ProName = styled.h1`
color: #f1f1f1;
font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
    text-align: start;
    margin:16px 0;
`
export const Probar = styled.div`
    width: 100%;
    height: 1.3rem;
    background-color:white;
    border-radius: 30px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    &:hover{
        background: black;
    }

    &:hover div{
        background: #01fFf1;
        color: #010606;
        transform: ${({percent})=>`translateX(${100%-percent}%) scale(1.1)`}; 
    }
`
export const ProPercentage = styled.div`
    transition: all 0.5s ease-in-out;
    width: ${({percent})=> percent ? `${percent}%` : '30%'};
    height:1.2rem;
    border-radius: 30px;
    background: #01BF71;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
`