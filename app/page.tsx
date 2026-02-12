"use client"
import Hero from "@/components/Hero"
import Container from "@/components/Container"
import Experience from "@/components/Experience"
import Projects from "@/components/Projects"
import Contributions from "@/components/Contributions"
import Stack from "@/components/Stack"
import LetsTalk from "@/components/LetsTalk"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import OnekoCat from "@/components/Onekocat"


export default function Home() {
  
  return (
    <Container className="max-w-5xl">
      <OnekoCat/>
      <Hero />
      <Experience />
      <Projects />
      <Stack />
      <Contributions />
      <LetsTalk/>
      <Footer/>
    </Container>
  )
}