import React,{useState,useEffect} from 'react'
import Portfoliobanner from '../Portfoliobanner/index'
import {Project1} from './data'
import 'aos/dist/aos.css'
import Aos from 'aos'

import {ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    Buttoncontainer,
    Buttonlogo,
    TotalProject,
    Linktag


} from './serviceelement'




const Services = () => {
    const [show,setshow] =useState(Project1)
    const [active,setactive] = useState()

    const handleclick = (e) =>{
        if(e.target.name ==='all') {
            setshow(Project1)
        }else{
            setshow(Project1.filter(li=>li.type.match(`${e.target.name}`)))
        }
        setactive(e.target.name)
    }

    useEffect(()=>{
        Aos.init({
            duration:1000
        })
        
    },[]) 

   
   return (
        <ServicesContainer id='services'>
            <ServicesH1 data-aos="zoom-in-left"
            data-aos-easing="ease-out-cubic" >Eric's Projects<TotalProject>{show.length}</TotalProject></ServicesH1>
            <Buttoncontainer data-aos="zoom-in-right"
            data-aos-easing="ease-out-cubic">
            <Buttonlogo className={active === 'all' && 'active'}   name='all' onClick={handleclick}>All</Buttonlogo>
            <Buttonlogo className={active === 'react' && 'active'}  key='2' name='react' onClick={handleclick}>React</Buttonlogo>
            <Buttonlogo className={active === 'html' && 'active'}  key='3' name='html' onClick={handleclick}>HTML</Buttonlogo>
            <Buttonlogo  className={active === 'backend' && 'active'}  key='4' name='backend' onClick={handleclick}>Backend</Buttonlogo>
            </Buttoncontainer>
            <ServicesWrapper data-aos="zoom-out-up"
            data-aos-easing="ease-out-cubic">
            {show.map(data=>{
                return(
                    <Linktag href={data.url} target="_blank"><Portfoliobanner key={data.title} {...data}></Portfoliobanner></Linktag>
                )
            })}
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
