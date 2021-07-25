import styled,{keyframes} from 'styled-components'
import {FaReact,FaHtml5,FaNode} from 'react-icons/fa'
import image from '../../images/berkay-gumustekin-hRg1KL4-AUE-unsplash.jpg'

const contactheader = keyframes`
0%{
  border-bottom: 2px solid #01BF7130
}
50%{
  border-bottom: 2.5px solid #01BF7199
}
100%{
  border-bottom: 3px solid #01BF71ff
}
`
export const Headerspan = styled.span`
  border-bottom: 2px solid #01BF71;
  animation: ${contactheader} 2s infinite;
`

export const Infobottom = styled.div`
    width: 100%;
    top: -13%;
    height: 50vh;
    z-index: 2;
    float: left;
    position: absolute;
    background: linear-gradient(to bottom, 
    black 0%, 
    rgba(0, 0, 0, 0.738) 19%,
    rgba(0, 0, 0, 0.541) 34%, 
    rgba(0, 0, 0, 0.382) 47%, 
    rgba(0, 0, 0, 0.278) 56.5%, 
    rgba(0, 0, 0, 0.194) 65%, 
    rgba(0, 0, 0, 0.126) 73%, 
    rgba(0, 0, 0, 0.075) 80.2%, 
    rgba(0, 0, 0, 0.042) 86.1%, 
    rgba(0, 0, 0, 0.021) 91%, 
    rgba(0, 0, 0, 0.008) 95.2%, 
    rgba(0, 0, 0, 0.002) 98.2%, transparent 100%);
`


export const InfoContainer = styled.div`
    background: #181d23 url(https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Images/envelope.svg?sanitize=true) no-repeat right;
    clip-path: polygon(0 0, 50% 100px, 100% 0, 100% 100%, 0 100%);
    margin-top: -9rem;
    padding: 10rem 10rem;
    color: #fafafa;
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 1;
    @media screen and (max-width: 768px){
        padding: 100px 0;
    }
`
export const InfoWrapper = styled.div `
  width: 70%;
  max-width: 1200px;
    @media screen and (max-width: 768px){
        height: 2000px;
    }
    [data-aos="example-anim2"] {
  background: red;
  transition-property: background;
  &.aos-animate {
    background: green;
  }
    }
`
export const FormContainer = styled.div`
  margin-top: 4rem;
  display: flex;
  background: transparent;
  width: 100%;
  height: 60%;
  position: relative;
`
export const Form = styled.form`
width: 100%;

  
`
export const FormGroup = styled.div`
      :not(:last-child){
      margin-bottom: 2rem;
    }
`
export const Forminput = styled.input`
    font-size: 1.5rem ;
    font-family: inherit;
    padding: 1.5rem 2rem;
    color: #ccc;
    border-radius: 2px;
    background-color: transparent;
    border:none;
    height: ${props=>props.Message && "10rem"};
    border-bottom: 3px solid green;
    width: 100%;
    transition: all .7s;
    ::focus{
      outline: none;
      box-shadow: 0 1rem 2rem rgba(0,0,0,.3);
      border-bottom: 3px solid green;
    }
    :focus:invalid{
        border-bottom: 3px solid red;
    }
    ::-webkit-input-placeholder{
    color: #01BF7166;
    font-size: 1rem;
  }
  :placeholder-shown +label{
        visibility: hidden;
        opacity: 1;
        transform: translateY(-4rem);
  }
`

export const Button = styled.button`
display: flex;
justify-content: center;
align-items: center;
float: right;
 background: #01BF71;
border: none;
padding: 2rem 6rem;
margin-left: 1.4rem;
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
`

export const FormLabel = styled.label`
    font-size: 1.0rem;
    margin-left: 2rem;
    font-weight: 700;
    margin-top: 0.7rem;
    display: block;
    transition: all .3s;
    color:#01BF71;
    align-self: flex-start;
`
export const InfoTextcontainer= styled.div`
    width: 100%;
`
export const IntroHeading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({lightText})=>(lightText ? '#f7f8fa' : '#010606')};
    text-align: center;
    @media screen and (max-width: 768px){
        font-size: 32px;
    }
`
export const InfoTextTitle= styled.div`
    color: #01BF71;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
    text-align: center;
    margin:16px 0;
`
