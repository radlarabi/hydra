'use client'
import Header from "@/components/Header";
import Landing from "@/components/Landing";
import Introduction from "@/components/Introduction"
import Cards from "@/components/Cards"
import Partners from "@/components/Partners"
import HowHydra from "@/components/HowHydra"
import JoinForm from "@/components/JoinForm"
import Footer from "@/components/Footer"
import Image from "next/image";
import { ScrollParallax } from "react-just-parallax";

export const metadata = {
  title: "Hydra",
}

export default function Home() {
  return (
    <main className="bg-custom-blue w-full">
      {/* <ScrollParallax className=""> */}
        {/* <Image 
          className="absolute"
          src={'/assets/Vector.svg'}
          alt="Background"
          width={1920}
          height={1080}
        /> */}
      {/* </ScrollParallax> */}
      {/* bg-[url('/assets/Vector.svg')] bg-no-repeat bg-cover */}
      <Header/>
      <Landing/>
      
      <Introduction/>
      <Cards/>
    
      <Partners/>
      <HowHydra/>
    
      <JoinForm/>
      <Footer/>
    </main>
  );
}
