"use client"
import Hero from "@/components/sections/Hero"
import Container from "@/components/ui/Container"
import Experience from "@/components/sections/Experience"
import Projects from "@/components/projects/Projects"
import Contributions from "@/components/sections/Contributions"
import Stack from "@/components/sections/Stack"
import LetsTalk from "@/components/sections/LetsTalk"
import Footer from "@/components/sections/Footer"
import Navbar from "@/components/ui/Navbar"
import OnekoCat from "@/components/ui/Onekocat"


export default function Home() {

  return (
    <Container className="max-w-5xl">
      <Navbar />
      <OnekoCat />
      <Hero />
      <Experience />
      <Projects />
      <Stack />
      <Contributions />
      <LetsTalk />
      <Footer />
    </Container>
  )
}