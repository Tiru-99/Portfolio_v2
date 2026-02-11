import Hero from "@/components/Hero"
import Container from "@/components/Container"
import Experience from "@/components/Experience"
import Projects from "@/components/Projects"
import RotatingFlower from "@/components/RotatingFlower"
import Stack from "@/components/Stack"
export default function Home(){
  return (
   <Container>
     <Hero/>
     <Experience/>
     <Projects/>
     <Stack/>
     <div>
       Hello there uncle
     </div>
   </Container>
  )
}