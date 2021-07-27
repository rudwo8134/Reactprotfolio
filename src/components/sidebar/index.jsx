import React from 'react'
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink
} from './sidebarelement'

function Sidabar({isOpen,toggle}) {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon/>
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink onClick={toggle} to='about'>
            About
          </SidebarLink>
          <SidebarLink onClick={toggle} to='skills'>
          Skills
          </SidebarLink>
          <SidebarLink onClick={toggle} to='services'>
          Projects
          </SidebarLink>
          <SidebarLink onClick={toggle} to='testmonials'>
          Testmonials
          </SidebarLink>
          <SidebarLink onClick={toggle} to='Contact'>
          Contact
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidabar
