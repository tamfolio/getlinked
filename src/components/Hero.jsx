import HeroSection from "./HeroSection"
import Navbar from "./Navbar"

function Hero() {
  return (
    <div className="w-[100%] h-auto bg-blue relative">
      <Navbar/>
      <div className="w-[100%] h-[1px] bg-white opacity-[.18]"></div>
      <HeroSection/>
      <div className="w-[100%] h-[1px] bg-white opacity-[.18]"></div>
    </div>
  )
}

export default Hero
