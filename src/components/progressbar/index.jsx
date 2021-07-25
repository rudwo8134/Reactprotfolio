import React from 'react'

import {ProContainer,ProName,Probar,ProPercentage} from './Progress'


const Progressbar = ({Name,percent}) => {
    return (
        <ProContainer>
            <ProName>{Name}</ProName>
            <Probar percent={percent}>
            <ProPercentage percent={percent}>
            {percent}%
            </ProPercentage>
            </Probar>
        </ProContainer>
    )
}

export default Progressbar
