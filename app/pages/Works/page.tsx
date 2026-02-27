import Nav from '@/app/components/nav'
import Top10card from '@/app/components/top10'

const page = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[url(/Assets/Background.png)] dark:bg-[url(/Assets/DarkBackground.png)]">
      <Nav />

      <main className="flex-1 flex items-center justify-center px-6 pt-10 pb-10">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-items-center">

          <Top10card
            Img="/Assets/LeslieJones.png"
            Alt="Leslie Jones book cover"
            title="1. Leslie Fucking Jones"
            description="Leslie Jones released her deeply personal memoir sharing her journey through comedy, fame, struggles, and resilience" link="https://www.audible.com/pd/Leslie-F-cking-Jones-Audiobook/B0C1CYHJ3H?eac_link=SNVcWD1pFFtU&ref=web_search_eac_asin_1&eac_selected_type=asin&eac_selected=B0C1CYHJ3H&qid=PV7BAgRT7A&eac_id=147-9633204-6716631_PV7BAgRT7A&sr=1-4"
          />

          <Top10card
            Img="/Assets/LeslieJones6.avif"
            Alt="Leslie Jones Ghostbusters"
            title="2. Ghostbusters"
            description="Played Patty Tolan in the modern reboot of the classic Ghostbusters franchise."
            link="https://www.imdb.com/title/tt1289401/"
          />

          <Top10card
            Img="/Assets/LeslieJones8.jpg"
            Alt="Leslie Jones Supermarket Sweep"
            title="3. Supermarket Sweep"
            description="Hosted the revival of the iconic grocery game show with her energetic personality."
            link="https://abc.com/shows/supermarket-sweep"
          />

          <Top10card
            Img="/Assets/LeslieJones9.webp"
            Alt="Leslie Jones Coming 2 America"
            title="4. Coming 2 America"
            description="Starred alongside Eddie Murphy in the sequel to the beloved comedy classic."
            link="https://www.imdb.com/title/tt6802400/"
          />

          <Top10card
            Img="/Assets/LeslieJones5.jpg"
            Alt="Leslie Jones Olympics commentary"
            title="5. Olympics Coverage"
            description="After viral Olympic tweets, NBC invited Leslie to officially cover Olympic events."
            link="https://www.nbc.com/nbc-insider/leslie-jones-joins-nbc-coverage-2024-paris-olympics"
          />

          <Top10card
            Img="/Assets/Zeta.webp"
            Alt="Leslie Jones Angry Birds Movie 2"
            title="6. The Angry Birds Movie 2"
            description="Voiced Zeta, the comedic villain in the animated sequel."
            link="https://www.imdb.com/title/tt6095472/"
          />

          <Top10card
            Img="/Assets/MeenaMom.webp"
            Alt="Leslie Jones Sing movie"
            title="7. Sing"
            description="Voice acting role contributing to the successful animated musical film."
            link="https://www.imdb.com/title/tt3470600/"
          />

          <Top10card
            Img="/Assets/LeslieJones10.jpg"
            Alt="Leslie Jones stand up comedy"
            title="8. Stand-Up Comedy Tours"
            description="National touring comedian known for fearless storytelling and audience interaction."
            link="https://www.youtube.com/@lesdogggg"
          />

          <Top10card
            Img="/Assets/LeslieJones11.jpg"
            Alt="Leslie Jones Netflix performances"
            title="9. Netflix Comedy Performances"
            description="Featured in major comedy showcases expanding her global audience."
            link="https://www.netflix.com/"
          />

          <Top10card
            Img="/Assets/LeslieJones2.png"
            Alt="Leslie Jones on Saturday Night Live"
            title="10. Saturday Night Live"
            description="Leslie Jones became a breakout star on SNL after joining first as a writer before being promoted to cast member."
            link="https://www.nbc.com/saturday-night-live"
          />

        </section>
      </main>
    </div>
  )
}

export default page