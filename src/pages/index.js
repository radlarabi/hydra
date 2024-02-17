'use client'
import Image from "next/image";
import Header from "@/components/Header";
import Landing from "@/components/Landing";
import Intorduction from "@/components/Introduction"
export default function Home() {
  return (
    <main className="bg-custom-blue">
      <div className="landing h-dvh ">
        <Header/>
        <Landing/>
      </div>
      <div className="introduction h-dvh">
        <Intorduction/>
      </div>
    </main>
  );
}
