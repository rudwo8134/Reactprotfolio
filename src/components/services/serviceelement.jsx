import styled from "styled-components";

export const ServicesContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #010606;
    padding-bottom: 30rem;

    @media screen and (max-width:768px){
        height: 2000px;
        padding-top: 40rem;
    }
    @media screen and (max-width:480px){
        padding-top: 80rem;
        height: 2400px; 
    }
`
export const TotalProject = styled.span`
    background: #04BF71;
    color:white;
    border:none;
    border-radius: 30px;
    font-size: 2.3rem;
    margin-left: 1rem;
    padding: 0.3rem;
`
export const ServicesWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;
    transition: all 1s ease-in-out;
 
    @media screen and (max-width:1000px){
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width:768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }

`
export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;
    @media screen and (max-width:768px){
        font-size: 2rem;
    }
`
export const Buttoncontainer = styled.div`
margin-bottom:3rem;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`
export const Buttonlogo = styled.button`
background: white;
border: none;
margin-left: 1.4rem;
width: 6rem;
height: 2rem;
font-size: 1.1rem;
border-radius: 30px;
transition: all 0.5s ease-in-out;
&.active{
    border-bottom: 1px solid grey ;
    background: #01BF71;
    color:white;
    transform: scale(1.1);
}
&:hover{
    cursor: pointer;
    background: #013341;
    color: white;
}
@media screen and (max-width:768px){
       width: 3.2rem;
       font-size: .7rem;
    }
`
export const Linktag = styled.a``

