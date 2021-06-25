import React,{useEffect, useState} from 'react'
import {FaBars} from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import {animateScroll as scroll} from 'react-scroll'
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from './navbarelement'

const Navbar = ({toggle}) => {
  const [scrollNav, setScrollnav] = useState(false)

  const changeNav = () =>{
    if(window.scrollY >= 80){
      setScrollnav(true)
    }else{
      setScrollnav(false)
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll',changeNav)

  },[]);

  const togglehome = () => {
    scroll.scrollToTop();
  }

  return (
    <>
    <IconContext.Provider value={{color: '#fff'}}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo onClick={togglehome} to='/'>Eric</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars/>
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='about'
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset= {-80}
              activeClass='active'
              >About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='skills'
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset= {-80}>Skills</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='services'
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset= {-80}>Projects</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='testmonials'
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset= {-80}>Testmonials</NavLinks>
            </NavItem>
          </NavMenu>
  
        </NavbarContainer>
      </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar
