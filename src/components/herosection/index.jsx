import React,{useState} from 'react'
import Video from '../../video/production ID_4331635.mp4'
import {Button} from '../../components/ButtonElement'
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  Mouse,
  Mousecontainer,
  Herobottom


} from './heroelement'
const HeroSection = ({ScrollYvalue}) => {
  const [hover,setHover] = useState(false)
  const onHover = () =>{
    setHover(!hover)
  }
 
  return (
    <HeroContainer>
      <HeroBg scroll={ScrollYvalue}>
        <VideoBg playsInline src={Video} autoPlay loop muted type='video/mp4'/>
        <Herobottom/>
          <Mousecontainer>
        <Mouse></Mouse>
        </Mousecontainer>
        </HeroBg>
      <HeroContent scroll={ScrollYvalue}>
        <HeroH1>Eric is Front-End Developer</HeroH1>
        <HeroP>
          Let's Watch Eric's Portfolio. Make it easy and Make an awesome website with current tech
        </HeroP>
        <HeroBtnWrapper>
        <Button to="about" onMouseEnter={onHover} onMouseLeave={onHover}
          primary='true'
          dark='true'
        >
          Get started {hover ? <ArrowForward/> : <ArrowRight/> }</Button>
        </HeroBtnWrapper>
      </HeroContent>
      
    </HeroContainer>
  )
}

export default HeroSection
