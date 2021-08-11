import React,{useEffect} from 'react'
import aos from 'aos'
import 'aos/dist/aos.css'
import * as Skill from './skillselement'
import School from '../../images/schoollog.png'
import Company from '../../images/simens.png'



const Skills = () => {
    useEffect(()=>{
        aos.init({
            duration:2000
        })
        
    },[])
    return (
        <>
          <Skill.InfoContainer id='skills' >
            <Skill.InfoWrapper >
            <Skill.InfoTextcontainer data-aos='fade-up' data-aos-duration='1000'>
                <Skill.InfoTextTitle>Skills</Skill.InfoTextTitle>
                <Skill.IntroHeading>Skills and Education</Skill.IntroHeading>
                <Skill.InfoTextSub>My name is Eric, shin. I have passion to build the code on the front-end side. I have a Advanced-diploma on Cenetennial college. I have many expriences on the workplace. I was recently working in Siemens. So I had a lot of chances to get Experiences about electronics and software.</Skill.InfoTextSub>
            </Skill.InfoTextcontainer>
            <Skill.Infrologocontainer data-aos='zoom-in-up'>
            <Skill.IntroAllcoverLogo>
            <Skill.IntroLogocover>
            <Skill.LogoJS/>
            </Skill.IntroLogocover>
            <Skill.IntroLogoH1>Front-End</Skill.IntroLogoH1>
            <Skill.IntroLogop>HTML, CSS, Javascript</Skill.IntroLogop>
            </Skill.IntroAllcoverLogo>

            <Skill.IntroAllcoverLogo>
            <Skill.IntroLogocover>
                <Skill.LogoReact/>
            </Skill.IntroLogocover>
            <Skill.IntroLogoH1>FrameWork</Skill.IntroLogoH1>
            <Skill.IntroLogop>React (Redux
            Redux-saga, GraphQL & Apollo)</Skill.IntroLogop>
            </Skill.IntroAllcoverLogo>

            <Skill.IntroAllcoverLogo>
            <Skill.IntroLogocover>
                <Skill.Logonode/>
            </Skill.IntroLogocover>
            <Skill.IntroLogoH1>DB/Server</Skill.IntroLogoH1>
            <Skill.IntroLogop>Firebase, Mongo DB  /express</Skill.IntroLogop>
            </Skill.IntroAllcoverLogo>
            </Skill.Infrologocontainer>
            <Skill.SchoolContainer data-aos='zoom-in' >
            <Skill.Schoolcontainercover>
                <Skill.Schoolbannerconainer>
                <Skill.Schoolbanner src={School}/>
                </Skill.Schoolbannerconainer>
                <Skill.Schoolinfocontainer>
                <Skill.SchoolinfoH3>Diploma Awarded: Electronics Engineering technician</Skill.SchoolinfoH3>
                <Skill.Schoolinfoh5>2016,September - 2018,April</Skill.Schoolinfoh5>
                </Skill.Schoolinfocontainer>
            </Skill.Schoolcontainercover>

            <Skill.Schoolcontainercover>
            <Skill.Schoolbannerconainer>
            <Skill.Schoolbanner src={School}/>
            </Skill.Schoolbannerconainer>
            <Skill.Schoolinfocontainer>
            <Skill.SchoolinfoH3>Advance Diploma Awarded: Electronics Engineering technology</Skill.SchoolinfoH3>
            <Skill.Schoolinfoh5>2018,September - 2019,April</Skill.Schoolinfoh5>
            </Skill.Schoolinfocontainer>
        </Skill.Schoolcontainercover>

        <Skill.Schoolcontainercover>
        <Skill.Schoolbannerconainer>
        <Skill.Schoolbanner src={Company}/>
        </Skill.Schoolbannerconainer>
        <Skill.Schoolinfocontainer>
        <Skill.SchoolinfoH3>Electronics Technician</Skill.SchoolinfoH3>
        <Skill.Schoolinfoh5>2019,August - 2020,September</Skill.Schoolinfoh5>
        </Skill.Schoolinfocontainer>
    </Skill.Schoolcontainercover>

    <Skill.Schoolcontainercover>
    <Skill.Schoolbannerconainer>
    <Skill.Schoolbanner src={Company}/>
    </Skill.Schoolbannerconainer>
    <Skill.Schoolinfocontainer>
    <Skill.SchoolinfoH3>Telecommunication Technician(FA)</Skill.SchoolinfoH3>
    <Skill.Schoolinfoh5>2020,September - 2021,April</Skill.Schoolinfoh5>
    </Skill.Schoolinfocontainer>
</Skill.Schoolcontainercover>
            </Skill.SchoolContainer>
            </Skill.InfoWrapper>
            
        </Skill.InfoContainer>  
        </>
    )
}

export default Skills
