import React from 'react'
import styled,{keyframes} from 'styled-components'
import Loader from 'react-loader-spinner';

const animation = keyframes`
0%{
  opacity: 0;
  font-size:1rem;
  transform: translateY(200px);
}
100%{
  opacity: 1;

}
`;

const Wrapper = styled.div`

  width: 100vw;
  height: 100vh;
  background: linear-gradient(to left, #43cea2, #185a9d);
  display: flex;
  justify-content: center;
  align-items: center;
  h1{
    font-size: 3rem;
    font-weight:bold;
    color:#ffffff;
    letter-spacing: .2rem;
    text-transform: uppercase;
    margin-left: 2rem;
    animation: ${animation} 3s infinite
    }
`;

const LoadingPage = () => {
  return (
    <Wrapper>
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={20000}
      />
      <h1>Welecom to Eric' Site</h1>
    </Wrapper>
  );
}

export default LoadingPage
