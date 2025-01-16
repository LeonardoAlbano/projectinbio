import FAQ from "./components/landing/faq";
import Header from "./components/landing/header";
import Hero from "./components/landing/hero";
import Princing from "./components/landing/pricing";
import VideoExplanation from "./components/landing/video-explanation";


export default function Home() {
  return(
    <div className="max-w-7xl mx-auto">
      <div className="text-white">
        <Header />
        <Hero />
        <VideoExplanation />
        <Princing />
        <FAQ />
      </div>
    </div>
  )
}
