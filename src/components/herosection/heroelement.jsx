import styled,{keyframes} from 'styled-components'
import {MdKeyboardArrowRight,MdArrowForward} from 'react-icons/md'
import Typical from 'react-typed';



const arrowanimation = keyframes`

  0% {
    -webkit-transform: translateX(15px);
            transform: translateX(15px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    -webkit-transform: translateX(12px);
            transform: translateX(12px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  72% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  81% {
    -webkit-transform: translateX(14px);
            transform: translateX(14px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  90% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  95% {
    -webkit-transform: translateX(4px);
            transform: translateX(4px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
`

export const Mousecontainer = styled.div`
background-image: linear-gradient();
position: absolute;
bottom: 10%;
left:50%;
transform: translate(-50%,10%);

`
export const Mouse= styled.div`
color: black;
width: 2.5rem;
height: 4rem;
border: 4px solid #fff;
border-radius: 60px;
  @media screen and (max-width: 480px){
      width: 1.2rem;
      height: 2rem;
      border: 1px solid #fff;
    }
&:before{
  content: '';
  width: 0.2rem;
  height: 2rem;
  position: absolute;
  top:30px;
  background-color: #fff;
  left: 50%;
  transform: translate(-50%);
  border-radius: 50%;
  opacity: 1;
  animation: mouse 2s infinite;
  @keyframes mouse {
    from{
      opacity: 1;
      top:0px;
    }
    to{
      opacity: 0;
      top:30px;
    }
  }
    @media screen and (max-width: 480px){
      width: 0.1rem;
      height: 1rem;
    }

}
`

export const Herobottom = styled.div`
    width: 100%;
    bottom: 0;
    height: 50vh;
    z-index: 2;
    float: left;
    position: absolute;
    background: linear-gradient(to top, black 0%, rgba(1, 6, 6, 0.738) 19%, rgba(1, 6, 6, 0.541) 34%, rgba(1, 6, 6, 0.382) 47%, rgba(1, 6, 6, 0.278) 56.5%, rgba(1, 6, 6, 0.194) 65%, rgba(1, 6, 6, 0.126) 73%, rgba(1, 6, 6, 0.075) 80.2%, rgba(1, 6, 6, 0.042) 86.1%, rgba(1, 6, 6, 0.021) 91%, rgba(1, 6, 6, 0.008) 95.2%, rgba(1, 6, 6, 0.002) 98.2%, transparent 100%); `

export const HeroContainer = styled.div`
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  position: relative;
  z-index: 1;
  

  :before{
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(0,0,0,0.2) 100%,
    rgba(0,0,0,0.6) 100%),
    linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
    z-index: 2;
  }
`

export const HeroBg = styled.div`
  position: absolute;
  top:0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  transform: ${({scroll})=>`translateY(${scroll*0.1}px)`};
  opacity: ${({scroll})=>`${1-scroll*0.002}`};
  transition: all 2s ease-in-out;
  background-image: linear-gradient(to right, rgba(0,0,0,0.8), rgba(255,255,255,0.4));

  `

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  opacity: .15;

` 

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 1s ease-in-out;
  transform: ${({scroll})=>`
  translateX(${-scroll*0.07}px)
  
  `};
  opacity: ${({scroll})=>`${1-scroll*0.002}`};
`

export const WrapperText = styled.div`
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

`

export const Statictext = styled.div`
color:#fff;
font-size: 3.0rem;
font-weight: 400;

 @media screen and (max-width: 768px){
      font-size: 2.4rem;
    }
    @media screen and (max-width: 480px){
      font-size: 1.2rem;
    }

`
export const Variabletext = styled(Typical)`
color: rgba(4,191,113,1);
font-size: 3.0rem;
font-weight: 400;
margin-left: 2rem;

 @media screen and (max-width: 768px){
      font-size: 2.4rem;
    }
    @media screen and (max-width: 480px){
      font-size: 1.2rem;
      margin-left: 0.5rem;
    }

`

const typing = keyframes`
  100%{
    left:100%;
    margin: 0 -2rem 0 2rem;
  }
`


const slide = keyframes`
  100%{
    top: -15rem;
  }
`


export const DinamicText = styled.ul`

  margin-left: 1rem;
  height: 5rem;
  line-height: 5rem;
  background-color: transparent;
  overflow: hidden;

  li{
    color: rgba(4,191,113,1);
    list-style: none;
    font-size: 3.0rem;
    font-weight: 500;
    margin-left: 1rem;
    position: relative;
    top:0;
    animation: ${slide} 5s steps(3) infinite;
    span{
      position: relative;
    }
    span::after{
      content:"";
      position: absolute;
      left:0;
      height: 100%;
      width: 100%;
      background-color: white;
      border-left: 2px solid rgba(4,191,113,1);
      animation: ${typing} 1.5s steps(14) infinite;
    }
  }

    @media screen and (max-width: 768px){
      font-size: 40px;
    }
    @media screen and (max-width: 480px){
      font-size: 32px;
    }
`
export const HeroP = styled.p`
  line-height: 2rem;
  letter-spacing: 0.2rem;
  margin-top:24px;
  color:#fff;
  font-size: 24px;
  text-align: center;
  max-width: 700px;
  @media screen and (max-width: 768px){
      font-size: 24px;
    }
    @media screen and (max-width: 480px){
      font-size: 0.7rem;
    }
`
export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 4px;
  font-size: 24px;
  -webkit-animation: ${arrowanimation} 4s linear both infinite;
	animation: ${arrowanimation} 4s linear both infinite;
`
export const ArrowRight  = styled(MdKeyboardArrowRight)`
margin-left: 4px;
font-size: 24px;

  -webkit-animation: ${arrowanimation} 4s linear both infinite;
	animation: ${arrowanimation} 4s linear both infinite;
`


