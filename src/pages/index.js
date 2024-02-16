'use client'
import Image from "next/image";
import Header from "@/components/Header";
import Landing from "@/components/Landing";
export default function Home() {
  return (
    <main>
      <div className="landing bg-slate-700 h-dvh">
        <Header/>
        <Landing/>
      </div>
    </main>
  );
}
