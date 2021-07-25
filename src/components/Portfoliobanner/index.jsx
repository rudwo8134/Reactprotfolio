import React,{useState} from 'react'


import {
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP,
    Coverpage,
    All,
    Linktag
} from './portfolio.jsx'

const Portfoliobanner = ({title,skill,img,url}) => {
    const [enter, setenter] = useState(false)
    const handleenter = ()=>{
        setenter(true)
    }
    const handleleave = ()=>{
        setenter(false)
    }
  

    return (
        <All>
        <ServicesCard enter={enter} onMouseLeave={handleleave} onMouseEnter={handleenter}>
                <ServicesIcon enter={enter} src={img}/>
                <ServicesH2 enter={enter}>{title && title}</ServicesH2>
                <ServicesP enter={enter}>{skill && skill}</ServicesP>
                {enter && 
                
                <Linktag href={url} target='_blank'>
                <Coverpage>
                Let's Watch<br></br>
                {title && title}<br></br>
                </Coverpage>
                </Linktag>
            }
        </ServicesCard>
        </All>
    )
}

export default Portfoliobanner
