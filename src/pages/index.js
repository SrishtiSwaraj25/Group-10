import React from "react"
import Faq from "../components/Faq/Faq"
import Features from "../components/Features/Features"
import Hero from "../components/Hero/Hero"
import Layout from "../components/Layout/Layout"
import Carousel from "../components/Carousel/Carousel"

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <Carousel />
      <Faq />
    </Layout>
  )
}

export default Index
