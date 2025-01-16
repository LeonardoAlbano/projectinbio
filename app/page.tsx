import Header from "./components/landing/header";
import Hero from "./components/landing/hero";


export default function Home() {
  return(
    <div className="max-w-7xl mx-auto">
      <div className="text-white">
        <Header />
        <Hero />
      </div>
    </div>
  )
}
