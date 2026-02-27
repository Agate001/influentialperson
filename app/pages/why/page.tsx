import Nav from '@/app/components/nav'
import Image from "next/image";
import React from 'react'
import Leslie from "@/public/Assets/LeslieJones2.png"
const page = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[url(/Assets/Background.png)] dark:bg-[url(/Assets/DarkBackground.png)]">
      <Nav />
      <main className="flex-1 flex items-center justify-center font-sans px-6">
        <section className="grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center">
        <div className="flex items-center justify-center">
       <Image src={Leslie} height={400} alt="Leslie Jones"></Image>
       </div>
       <div className="lg:me-40 bg-white dark:bg-gray-800">
       <h1 className="font-extrabold text-3xl text-center lg:text-left">Why Admire Her?</h1> 
       <br />
       <p className="text-sm text-center lg:text-left">Leslie Jones is someone I admire because she combines humor, perseverance, and talent in a way that feels genuine and inspiring. She is extremely funny and brings a powerful energy to everything she does, but what stands out most is how she overcame many hardships before achieving success. Instead of giving up, she continued working toward her goals and proved that persistence truly pays off. Her confidence and willingness to be herself encourage others to embrace who they are without fear of judgment. To me, Leslie Jones represents hard work, resilience, and the idea that success comes from staying dedicated to your passion.</p>
      </div>
      </section>
      </main>
    </div>
  )
}

export default page