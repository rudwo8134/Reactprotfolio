import React,{useEffect} from 'react'
import aos from 'aos'
import 'aos/dist/aos.css'
import {
  InfoContainer,

  InfoWrapper,
  IntroHeading,
  InfoTextTitle,
  FormContainer,
  Form,
  FormGroup,
  Forminput,
  FormLabel,
  Button,
  Headerspan


} from './Styled'

const Index = () => {
  useEffect(()=>{
        aos.init({
            duration:2000
        })
        
    },[])
  return (
    <InfoContainer id="Contact">
      <InfoWrapper>
        <InfoTextTitle data-aos="fade-right" data-aos-duration="1000">
          Contact
        </InfoTextTitle>
        <IntroHeading data-aos="fade-right" data-aos-duration="1000" lightText>
          <Headerspan>Contact</Headerspan> to Eric
        </IntroHeading>
        <FormContainer>
          <Form
            data-aos="fade-up"
            data-aos-duration="1000"
            action="https://formspree.io/f/xwkandzl"
            method="POST"
          >
            <FormGroup>
              <Forminput
                type="text"
                id="name"
                placeholder="Full Name"
                required
              />
              <FormLabel htmlFor="name" className="label">
                Full name
              </FormLabel>
            </FormGroup>
            <FormGroup>
              <Forminput
                type="email"
                id="email"
                placeholder="Email address"
                required
              />
              <FormLabel htmlFor="email">Email address</FormLabel>
            </FormGroup>
            <FormGroup>
              <Forminput
                Message
                type="text"
                id="Message"
                placeholder="Message"
                required
              />
              <FormLabel htmlFor="Message">Message</FormLabel>
            </FormGroup>
            <FormGroup>
              <Button>Submit &rarr;</Button>
            </FormGroup>
          </Form>
        </FormContainer>
      </InfoWrapper>
    </InfoContainer>
  );
}

export default Index
