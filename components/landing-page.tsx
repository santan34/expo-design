'use client'

import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useRef, useState } from "react"

export function LandingPage() {
  const [activeSlide, setActiveSlide] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  const destinations = [
    { 
      title: "Victoria Falls",
      description: "The smoke that thunders",
      image: "/assets/vic-falls.jpg"
    },
    { 
      title: "Harare",
      description: "Ancient city ruins",
      image: "/assets/harare.jpg"
    },
    { 
      title: "Lake Kariba",
      description: "Wildlife sanctuary",
      image: "/assets/lake.jpg"
    },
    { 
      title: "Wildlife Safari",
      description: "Mountain paradise",
      image: "/assets/rhino.jpg"
    },
  ]

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" })
      setActiveSlide(Math.max(0, activeSlide - 1))
    }
  }

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" })
      setActiveSlide(Math.min(destinations.length - 1, activeSlide + 1))
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#004D2F]">
      <header className="fixed top-0 w-full z-50 px-4 lg:px-6 h-16 flex items-center bg-black/20 backdrop-blur-sm">
        <a className="flex items-center justify-center" href="#">
          <img
            src="/assets/icon.jpg"
            alt="Zimbabwe Pavilion Logo"
            className="h-10 w-10 rounded-full object-cover"
          />
          <span className="ml-2 text-xl font-bold text-white">Zimbabwe Pavilion</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium text-white hover:text-[#FFB900] transition-colors" href="#about">
            About
          </a>
          <a className="text-sm font-medium text-white hover:text-[#FFB900] transition-colors" href="#destinations">
            Destinations
          </a>
          <a className="text-sm font-medium text-white hover:text-[#FFB900] transition-colors" href="#contact">
            Contact
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="relative min-h-screen flex items-center justify-center">
          <img
            src="/assets/vic-falls.jpg"
            alt="Victoria Falls aerial view"
            className="absolute inset-0 object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#004D2F] via-[#004D2F]/50 to-black/30" />
          <div className="relative z-10 container px-4 md:px-6 py-12 md:py-24 lg:py-32">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white">
                Experience Zimbabwe Beyond The Limit
              </h1>
              <p className="mx-auto max-w-[700px] text-zinc-200 md:text-xl">
                Journey through our rich culture, innovation, and unlimited potential at Expo 2025 Osaka
              </p>
              <Button className="bg-[#FFB900] text-black hover:bg-[#FFB900]/90 text-lg px-8">
                Start Journey
              </Button>
            </div>
            <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-white max-w-5xl mx-auto">
              {/* Feature sections */}
              <div className="space-y-2">
                <div className="text-[#FFB900] text-xl font-bold">01</div>
                <h3 className="text-xl font-bold">Discover Our Heritage</h3>
                <p className="text-zinc-200">Immerse yourself in Zimbabwe&apos;s rich cultural tapestry</p>
              </div>
              <div className="space-y-2">
                <div className="text-[#FFB900] text-xl font-bold">02</div>
                <h3 className="text-xl font-bold">Experience Innovation</h3>
                <p className="text-zinc-200">Witness our technological advancement and creativity</p>
              </div>
              <div className="space-y-2">
                <div className="text-[#FFB900] text-xl font-bold">03</div>
                <h3 className="text-xl font-bold">Connect With Us</h3>
                <p className="text-zinc-200">Be part of our journey towards a sustainable future</p>
              </div>
            </div>
          </div>
        </section>
        {/* Destinations section */}
        <section id="destinations" className="py-12 md:py-24 lg:py-32 bg-gradient-to-b from-[#004D2F] to-[#003D2F]">
          <div className="container px-4 md:px-6">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-white">Popular Destinations</h2>
                <p className="mt-2 text-zinc-300">Explore the beauty of Zimbabwe</p>
              </div>
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={scrollLeft}
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={scrollRight}
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div
              ref={scrollRef}
              className="flex space-x-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            >
              {destinations.map((destination, index) => (
                <div
                  key={index}
                  className="flex-none w-[300px] h-[400px] relative group"
                >
                  <div className="absolute inset-0 bg-[#F5F2E8] rounded-lg">
                    <div className="absolute inset-0 bg-[#F5F2E8]">
                      <div
                        className="absolute inset-0"
                        style={{
                          background: "radial-gradient(circle at 50% 0%, transparent 20px, #F5F2E8 20px)",
                          backgroundSize: "40px 40px",
                          backgroundPosition: "0 -20px",
                        }}
                      />
                    </div>
                    <div className="relative h-full p-6 flex flex-col">
                      <div className="absolute top-4 right-4 bg-[#FFB900] rounded-full px-3 py-1 text-sm text-black">
                        Featured
                      </div>
                      <div className="flex-1 relative mt-8">
                        <img
                          src={destination.image}
                          alt={destination.title}
                          className="absolute inset-0 w-full h-full object-cover rounded-lg"
                        />
                      </div>
                      <div className="mt-4">
                        <h3 className="text-xl font-bold text-[#004D2F] mb-2">{destination.title}</h3>
                        <p className="text-zinc-600">{destination.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-6 space-x-2">
              {destinations.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === activeSlide ? "bg-[#FFB900]" : "bg-white/20"
                  }`}
                  onClick={() => setActiveSlide(index)}
                />
              ))}
            </div>
          </div>
        </section>
        {/* About section */}
        <section id="about" className="py-12 md:py-24 lg:py-32 bg-gradient-to-b from-[#003D2F] to-[#002D2F]">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-[#FFB900] px-3 py-1 text-sm text-black">
                  Our Mission
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Showcasing Zimbabwe&apos;s Future
                </h2>
                <p className="text-zinc-200 md:text-xl">
                  We exist to showcase Zimbabwe&apos;s rich heritage, technological advancement, and sustainable future at Expo
                  2025 Osaka.
                </p>
                <Button className="bg-white text-[#004D2F] hover:bg-white/90">Learn More About Us</Button>
              </div>
              <div className="relative aspect-square rounded-3xl overflow-hidden">
                <img
                  src="/assets/harare.jpg"
                  alt="About Zimbabwe"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-white/10 bg-[#002D2F] text-white">
        <div className="container px-4 md:px-6 py-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center space-x-2">
              <img
                src="/assets/icon.jpg"
                alt="Zimbabwe Pavilion Logo"
                className="h-8 w-8 object-cover"
              />
              <span className="text-sm">© 2024 Zimbabwe Pavilion. All rights reserved.</span>
            </div>
            <nav className="flex gap-4">
              <a className="text-sm hover:text-[#FFB900]" href="#">
                Privacy Policy
              </a>
              <a className="text-sm hover:text-[#FFB900]" href="#">
                Terms of Service
              </a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}