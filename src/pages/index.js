import React,{useState,useEffect} from 'react'
import Navbar from '../components/navbar'
import Sidabar from '../components/sidebar'
import {HashRouter as Router} from 'react-router-dom'
import HeroSection from '../components/herosection'
import InfoSection from '../components/infosection'
import { HomeObjOne, HomeObjthree, HomeObjTwo,introObjOne} from '../components/infosection/data'
import Services from '../components/services'
import Footer from '../components/footer'
import Intro from '../components/intro'
import Skills from '../components/skills'
import SkillsGraph from '../components/skillsgraph'

const Home = () => {
  const [isOpen, setisOpen] = useState(false)

  const toggle = () =>{
    setisOpen(!isOpen)
  }
  const [ScrollYvalue, setScrollYvalue] = useState()
 
  const Handlescroll = () =>{
    setScrollYvalue(window.pageYOffset)
  }
  
  useEffect(() => {
    window.addEventListener('scroll',Handlescroll)
    return () => {
      window.removeEventListener('scroll',Handlescroll)
    }
  }, [])

  return (
    <Router>
      <Navbar toggle={toggle}/>
      <Sidabar isOpen={isOpen} toggle={toggle}/>
      <HeroSection ScrollYvalue={ScrollYvalue}/>
      <Intro {...introObjOne}/>
      <Skills {...HomeObjTwo}/>
      <SkillsGraph {...HomeObjTwo}/>
      <Services/>
      <Footer/>
    </Router>
  )
}

export default Home
