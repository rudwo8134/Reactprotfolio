import styled from 'styled-components'

export const InfoContainer = styled.div`

    color: #fff;
    background: ${({lightBg})=>(lightBg ? '#f9f9f9' : '#010606')};
    @media screen and (max-width: 768px){
        padding: 100px 0;
    }
`
export const InfoWrapper = styled.div `
    display: grid;
    z-index: 1;
    height: 900px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
    padding-top:17rem;

`
export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(1fr,1fr);
    grid-column: 3 /span/2;
    align-items: center;
    grid-template-areas: ${({imgStart})=>(imgStart ? `'col2 col1'`: `'col1 col2'`)};
    
    @media screen and (max-width: 768px){
        grid-template-areas: ${({imgStart})=>(imgStart ? `'col1' 'col2'`: `'col1 col1' 'col2 col2'`)};
    }
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`
export const TopLine = styled.div`
    color: #01BF71;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`
export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({lightText})=>(lightText ? '#f7f8fa' : '#010606')};

    @media screen and (max-width: 768px){
        font-size: 32px;
    }
    @media screen and (max-width:464px){
       font-size: 28px;
    }
`
export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({darkText})=>(darkText ? '#010606':'#fff')};
`
export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`
export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`
export const Img = styled.img`
    width: 30%;
    margin: 0 0 10px 0;
    padding-right: 0;
`
export const Testmonialsdiv = styled.div`
width:900px;
height:100px;
color:white;
font-size: 30px;
display: flex;
justify-content: center;
align-items: center;
padding: 1rem;
flex-direction: column;
@media screen and (max-width:768px){
        width: 300px ;
        flex-direction: column ;
        font-size: 24px;
        padding:0;
    }

`
export const Commentdiv= styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 3rem;
    @media screen and (max-width:768px){
        width: 300px ;
        flex-direction: column ;
    }
   
`
export const Commentimgdiv = styled.div`
    width: 9rem;
    height: 9rem;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    margin-right: ${({right})=>(right ? '' : '3rem')};
    border-radius: 50%;
    margin-left: ${({right})=>(right ? '3rem' : '')};
    order:${({right})=>(right ? '5' : '')};

    @media screen and (max-width:768px){
        width: 6rem ;
        height: 6rem;
        order: 5;
        margin:0;
    }
  
  
    &:hover img{
        transform: scale(1.2);
        filter:grayscale(0);
     
    }
`
export const Commentimg = styled.img`
    filter:grayscale(0.8) ;
    margin-top: 1.5rem;
    width: 12rem;
    height: 12rem;
    @media screen and (max-width:768px){
        width: 6rem ;
        height: 6rem;
    }
`
export const Commentp = styled.p`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    color:black;
    background: white;
    width: 40rem;
    height: 10rem;
    font-size: 1rem;
    border-radius: 30px;
    @media screen and (max-width:768px){
        width: 15rem ;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-size: 0.7rem;
        padding:1rem;
   
    }
`
export const Namevalue = styled.span`
    margin-top: 1rem;
    color:#01bf71;
`
export const Namevalue2 = styled.span`
    margin-top: 0.2rem;
`