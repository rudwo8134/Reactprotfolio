import styled,{keyframes} from 'styled-components'
import {MdKeyboardArrowRight,MdArrowForward} from 'react-icons/md'


const colorchange = keyframes`
  0% {

  background-image: linear-gradient(0deg, rgba(4,191,113,1) 0%, rgba(0,0,0,0.227328431372549) 100%);
  }
  25% {

  background-image: linear-gradient(90deg, rgba(4,191,113,1) 0%, rgba(191,154,4,0.227328431372549) 100%);
  }
  50% {
  background-image: linear-gradient(180deg, rgba(4,191,113,1) 0%, rgba(255,255,255,0.227328431372549) 100%);
  }
  75% {
  background-image-img: linear-gradient(270deg, rgba(4,191,113,1) 0%, rgba(191,154,4,0.227328431372549) 100%);
  }
  100% {
  background-image: linear-gradient(390deg, rgba(4,191,113,1) 0%, rgba(230,230,230,0.227328431372549) 100%);
  }
`

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
export const HeroH1 = styled.h1`
    color:#fff;
    font-size: 48px;
    text-align: center;
    text-transform: uppercase;
    transform: skewX(-10deg);
    line-height: 3rem;
    letter-spacing: 0.2rem;
    -webkit-background-clip: text;
    color:transparent;
    background-clip: text;
    box-shadow: 0rem 0.5rem 0.5rem rgba(0,0,0,.2);
    animation: ${colorchange} 5s ease-in-out infinite;
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
      font-size: 18px;
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


