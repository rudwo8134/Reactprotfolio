import Progressbar from '../progressbar/index'
import React from 'react'
import { Column2, Img, ImgWrap,InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ProgressbarWrapper,
  SKilllist,
  Skills
} from './skillsgraph'
import {Button} from '../ButtonElement'


const InfoSection = ({dark2,dark,primary,topLinetext,imgStart,lightBg,lightText,id,headline,darkText,description,buttonLabel,img,alt}) => {
    return (
        <>
          <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
            <InfoRow imgStart={imgStart}>
            <Column1>
            <TextWrapper>
             
                <Heading lightText={lightText}>{headline}</Heading>
                <SKilllist>Program list 
                <Skills>Visual Studio Code</Skills>
                <Skills>Visual Studio</Skills>
                <Skills>Git</Skills>
                <Skills>PhotoShop</Skills>
                <Skills>Math</Skills>
                <Skills>MS Office Word</Skills>
                <Skills>MS Office Powerpoint</Skills>
                <Skills>MS Office Excel</Skills>
                <Skills>team</Skills>
                <Skills>Hangout</Skills>
                </SKilllist>
            </TextWrapper>
            </Column1>
            <Column2>
            <ProgressbarWrapper>
            <TopLine>{topLinetext}</TopLine>
            <Progressbar Name='html' percent='70'/>
            <Progressbar Name='css' percent='80'/>
            <Progressbar Name='sass' percent='84'/>
            <Progressbar Name='JavaScript' percent='70'/>
            <Progressbar Name='Node.JS' percent='80'/>
            <Progressbar Name='React' percent='80'/>
            <Progressbar Name='Redux' percent='80'/>
            </ProgressbarWrapper>
            </Column2>
            </InfoRow>
            </InfoWrapper>
          </InfoContainer>  
        </>
    )
}

export default InfoSection

