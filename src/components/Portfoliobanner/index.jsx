import React,{useState,useEffect} from 'react'



import {
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP,
    Coverpage
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
        <all>
        <ServicesCard enter={enter} onMouseLeave={handleleave} onMouseEnter={handleenter}>
                <ServicesIcon enter={enter} src={img}/>
                <ServicesH2 enter={enter}>{title}</ServicesH2>
                <ServicesP enter={enter}>{skill}</ServicesP>
                {enter && <Coverpage>
                    Let's Watch<br></br>
                    {title}<br></br>
                    </Coverpage>}
        </ServicesCard>
        </all>
    )
}

export default Portfoliobanner
