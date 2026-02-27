import Image from "next/image";
import Leslie from "@/public/Assets/LeslieJones.png"
import Nav from "./components/nav";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[url(/Assets/Background.png)]">
      <Nav />
      <main className="flex-1 flex items-center justify-center px-6">
        <section className="grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center">
        <div className="flex items-center justify-center">
       <Image src={Leslie} height={400} alt="Leslie Jones"></Image>
       </div>
       <div className="lg:me-40 bg-white">
       <h1 className="font-extrabold text-3xl text-center lg:text-left">Leslie Jones</h1> 
       <br />
       <p className="text-sm text-center lg:text-left">Leslie Jones is an American comedian, actress, and writer known for her fearless humor, powerful stage presence, and unapologetic personality. Born in Memphis, Tennessee, and raised in Los Angeles, she found her passion in stand-up comedy after initially pursuing basketball in college. Her comedy style is bold, energetic, and brutally honest, often drawing from her real-life experiences and sharp observations about relationships, aging, and pop culture.</p>
         <br />
        <p className="text-sm text-center lg:text-left">She rose to national fame as a cast member on Saturday Night Live, where her unforgettable “Weekend Update” segments and expressive performances made her a standout. Beyond SNL, she starred in the 2016 film Ghostbusters and released her Netflix stand-up special, Leslie Jones: Time Machine.</p>
          <br />
          <p className="text-sm text-center lg:text-left">Leslie Jones is admired not just for being hilarious, but for her authenticity and persistence. She built her career through years of hard work and proves that confidence and originality can make someone truly unforgettable in comedy.</p>
          <br />
        <p className="text-sm text-center lg:text-left">Above all, Leslie Jones is known for being unapologetically herself — loud, confident, and undeniably funny.</p>
      </div>
      </section>
      </main>
    </div>
  );
}
