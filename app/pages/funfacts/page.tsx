import Nav from '@/app/components/nav'
import Rankedcard from '@/app/components/rankedcard'
import React from 'react'

const page = () => {
  return (
        <div className="min-h-screen flex flex-col bg-[url(/Assets/Background.png)] dark:bg-[url(/Assets/DarkBackground.png)]">
      <Nav />
      <main className="flex-1 flex items-center justify-center font-sans px-6 pt-10 pb-10">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center justify-items-center">
        <div className="flex items-center justify-center">
        <Rankedcard Img="/Assets/LeslieJones3.jpg" Alt="Leslie Jones playing basketball" title='1. Basketball Career' description='Leslie Jones didn’t begin stand-up comedy until her late 20s after originally pursuing a basketball career in college. Comedy wasn’t her first plan — but it became her breakthrough path.'/>
       </div>
       <div className="">
        <Rankedcard Img="/Assets/LeslieJones4.png" Alt="Leslie Jones writing for SNL" title='2. Writer Before Star' description='Before appearing on Saturday Night Live, Leslie was actually hired as a writer. Her on-screen performances were so strong that producers promoted her to a full cast member shortly after.'/>
       </div>
       <div className="">
        <Rankedcard Img="/Assets/LeslieJones5.jpg" Alt="Leslie Jones wearing olympic gear" title='3. Legendary Tweets' description='During the 2016 Rio Olympics, Leslie live-tweeted reactions that became wildly popular. The response was so huge that NBC invited her to cover the Olympics officially as a commentator.'/>
       </div>
       <div className="">
        <Rankedcard Img="/Assets/LeslieJones6.avif" Alt="Leslie Jones wearing ghostbusters gear" title='4. Comic Book Fan' description='Leslie is a massive fan of comic books and sci-fi movies. She even starred in the 2016 reboot of Ghostbusters, fulfilling a longtime nerd-culture dream.'/>
       </div> 
       <div className='lg:col-span-2'>
       <Rankedcard Img='/Assets/LeslieJones7.webp' Alt='Leslie Jones wearing winter olympic gear' title='5. World Record Holder' description='Leslie Jones earned a Guinness World Record for having one of the fastest-growing Twitter accounts after her Olympic tweets exploded in popularity.'/>
      </div>
      </section>
      </main>
    </div>
  )
}

export default page