import React from 'react'
import {animateScroll as scroll} from 'react-scroll'
import {FooterContainer,
    FooterWrap,
    FooterLinkContainer,
    FooterLinkWrapper,
    FooterLinkItems,
    FooterLinktitle,
    FooterLink,
    SocialMedia
    ,
    SocialLogo
    ,
    WebsiteRights
    ,
    SocialIcons
    ,
    SocialIconLink,
    SocialMediaWrap
} from './footerelement'

import {FaFacebook,FaInstagram,FaGithub,FaLinkedin,FaYoutube } from 'react-icons/fa'
const Footer = () => {
    const togglehome = () => {
        scroll.scrollToTop();
      }
    return (
      <FooterContainer>
        <FooterWrap>
          <FooterLinkContainer>
            <FooterLinkWrapper>
              <FooterLinkItems>
                <FooterLinktitle>About</FooterLinktitle>
                <FooterLink
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  to="about"
                >
                  About
                </FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinktitle>Skills</FooterLinktitle>
                <FooterLink
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  to="skills"
                >
                  Skills
                </FooterLink>
              </FooterLinkItems>
            </FooterLinkWrapper>
            <FooterLinkWrapper>
              <FooterLinkItems>
                <FooterLinktitle>Project</FooterLinktitle>
                <FooterLink
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  to="services"
                >
                  Project
                </FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinktitle>Testmonials</FooterLinktitle>
                <FooterLink
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  to="testmonials"
                >
                  Testmonials
                </FooterLink>
              </FooterLinkItems>
            </FooterLinkWrapper>
          </FooterLinkContainer>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo onClick={togglehome} to="Contact">
                {' '}
                Eric's
              </SocialLogo>
              <WebsiteRights>
                {' '}
                Eric &#169; {new Date().getFullYear()} All right reserved{' '}
              </WebsiteRights>
              <SocialIcons>
                <SocialIconLink
                  href="https://www.facebook.com/profile.php?id=100003708437874"
                  target="_blank"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink
                  href="https://www.instagram.com/eric.shin_8134/"
                  target="_blank"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink
                  href="https://www.linkedin.com/in/eric-shin-9a33b3186/"
                  target="_blank"
                  aria-label="Linkdin"
                >
                  <FaLinkedin />
                </SocialIconLink>
                <SocialIconLink
                  href="https://github.com/rudwo8134"
                  target="_blank"
                  aria-label="github"
                >
                  <FaGithub />
                </SocialIconLink>
                <SocialIconLink
                  href="https://youtube.com/rudwo8134"
                  target="_blank"
                  aria-label="youtube"
                >
                  <FaYoutube />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    );
}

export default Footer
