import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full">
        <nav className="container mx-auto px-6 py-6 flex justify-between items-center">
          <div className="text-xl font-semibold text-primary">Sindu Tamilarasan</div>
          <div className="hidden md:flex gap-6 text-sm text-gray-700">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <main className="flex-grow">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
