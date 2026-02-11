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
import { useEffect , useState} from "react"
import axios from "axios"

export default function Home() {
  const [ visitors , setVisitors ] = useState<number>(0); 
  useEffect(() => {
    axios.get("/api/visitors")
      .then((res) => {
        console.log("The response is " , res.data); 
        setVisitors(res.data.uniqueVisitors); 
      })
      .catch((err) => {
        console.log("Something went wrong while fetching count" , err); 
      });
  }, []);
  return (
    <Container>
      <OnekoCat/>
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Stack />
      <Contributions />
      <LetsTalk/>
      <Footer visitors = {visitors}/>
    </Container>
  )
}