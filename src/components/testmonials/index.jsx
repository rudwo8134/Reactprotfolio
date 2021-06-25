import React from 'react'
import Image from '../../images/personlogo.png'
import { InfoContainer,
  InfoWrapper,
  TopLine,
  Heading,
  Commentdiv,
  Commentimgdiv,
  Commentp,
  Testmonialsdiv,
  Commentimg,
  Namevalue,
  Namevalue2
} from './testmonials'



const Testmonials = ({dark2,dark,primary,topLinetext,imgStart,lightBg,lightText,id,headline,darkText,description,buttonLabel,img,alt}) => {
    return (
        <>
          <InfoContainer lightBg={lightBg} id='testmonials'>
            <InfoWrapper>
            <Testmonialsdiv>
            <TopLine>Testmonials</TopLine>
            <Heading lightText='true'>Comment to Eric</Heading>
            <Commentdiv>
            <Commentimgdiv right='true'>
            <Commentimg src={Image}/>
            </Commentimgdiv>
            <Commentp>Eric is a sincere person in workplace. and he is very positive. Always work hard and he has a good skills and communication skill with a team
            <br></br>
            <Namevalue>Tuan Do</Namevalue>
            <Namevalue2>Manager/Siemens Ruggedcom</Namevalue2>
            
            </Commentp>
            </Commentdiv>
            <Commentdiv>
            <Commentimgdiv >
            <Commentimg src={Image}/>
            </Commentimgdiv>
            <Commentp>Eric, Thank you for all your contribution to Siemens Ruggedcom. Your hard work and effort is very much appreciated. I wish you the best of luck in your future journey and may all your goals come true.
            <Namevalue>Mohamed Hamawi</Namevalue>
            <Namevalue2>Director/Siemens Ruggedcom</Namevalue2>
             </Commentp>
            </Commentdiv>
            </Testmonialsdiv>
            </InfoWrapper>
          </InfoContainer>  
        </>
    )
}

export default Testmonials;
