import React,{useEffect} from 'react'
import Image from '../../images/AvatarMaker.png'
import Image2 from '../../images/AvatarMaker-2.png'
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
import 'aos/dist/aos.css'
import Aos from 'aos'



const Testmonials = ({dark2,dark,primary,topLinetext,imgStart,lightBg,lightText,id,headline,darkText,description,buttonLabel,img,alt}) => {
    useEffect(()=>{
        Aos.init({
            duration:2000
        })
        
    },[]) 
    return (
        <>
          <InfoContainer lightBg={lightBg} id='testmonials'>
            <InfoWrapper >
            <Testmonialsdiv>
            <TopLine>Testmonials</TopLine>
            <Heading data-aos="flip-right"
            data-aos-easing="ease-out-cubic" lightText='true'>Comment to Eric</Heading>
            <Commentdiv data-aos="zoom-in-left"
            data-aos-easing="ease-out-cubic">
            <Commentimgdiv right='true'>
            <Commentimg src={Image}/>
            </Commentimgdiv>
            <Commentp>Eric is a sincere person in workplace. and he is very positive. Always work hard and he has a good skills and communication skill with a team
            <br></br>
            <Namevalue>Tuan Do</Namevalue>
            <Namevalue2>Manager/Siemens Ruggedcom</Namevalue2>
            
            </Commentp>
            </Commentdiv>
            <Commentdiv data-aos="zoom-in-right"
            data-aos-easing="ease-out-cubic">
            <Commentimgdiv >
            <Commentimg src={Image2}/>
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
