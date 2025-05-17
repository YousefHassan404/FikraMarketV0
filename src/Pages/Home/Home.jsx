import React from 'react'
import Header from '../../Components/Header/Header'
import Hero from '../../Components/Hero/Hero'
import Footer from '../../Components/Footer/Footer'
import Work from '../../Components/Work/Work'
import LatestIdeasSection from '../../Components/Ideas/Ideas'
import FikraEdge from '../../Components/FikraEdge/FikraEdge'
export default function Home() {
  return (
    <>
    <Header></Header>
    <Hero></Hero>
    <Work/>
    <LatestIdeasSection/>
    <FikraEdge/>
    <Footer></Footer>
    </>
  )
}
