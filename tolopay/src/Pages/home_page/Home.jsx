import React, { useState } from 'react'
import styled from 'styled-components'
import Hero from '../../Components/landingPage_component/Hero'
import{Link as LinkR} from 'react-router-dom';
import Navbar from '../../Components/landingPage_component/Navbar';
import Sidebar from '../../Components/landingPage_component/Sidebar';
import Features from '../../Components/landingPage_component/Features';
import How from '../../Components/landingPage_component/How';
import Footer from '../../Components/landingPage_component/Footer';
 

export default function Home() {

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
     
    

    



	


  return (
   <>
   <Navbar toggle={toggle} isOpen = {isOpen}/> 
   <Sidebar isOpen={isOpen} toggle={toggle}/>
   <Hero/>
   <Features/>
   <How/>
   <Footer/> 
    

   </>
  )
}

 




  

 