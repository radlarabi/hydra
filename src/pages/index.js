'use client'
import Header from "@/components/Header";
import Landing from "@/components/Landing";
import Introduction from "@/components/Introduction"
import Cards from "@/components/Cards"
import Partners from "@/components/Partners"
import HowHydra from "@/components/HowHydra"
import JoinForm from "@/components/JoinForm"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="bg-custom-blue">
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
