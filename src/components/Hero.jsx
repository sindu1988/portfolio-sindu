import React from 'react'
import sindu from '../../Image/sindu.JPG'

export default function Hero(){
  return (
    <section className="container mx-auto px-6 py-12 flex flex-col-reverse md:flex-row items-center gap-8" id="home">
      <div className="flex-1">
        <h1 className="text-4xl md:text-5xl font-bold text-primary">Sindu Tamilarasan</h1>
        <p className="mt-2 text-lg text-gray-700">Full Stack Developer (C# .NET Core / MVC / AWS)</p>
        <p className="mt-4 text-gray-600 max-w-xl">Building reliable, scalable software for the automobile industry</p>
        <div className="mt-6">
          <a href="#projects" className="inline-block bg-primary hover:bg-primaryDark text-white px-6 py-3 rounded-full">View My Work</a>
        </div>
      </div>

      <div className="flex-1 flex justify-center md:justify-end">
        <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden ring-4 ring-primary/30">
          <img src={sindu} alt="Sindu Tamilarasan" className="object-cover w-full h-full" />
        </div>
      </div>
    </section>
  )
}
