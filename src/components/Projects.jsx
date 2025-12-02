import React from 'react'

const projects = [
  {
    title: 'Fuel Tank Leak Test (Windows App)',
    description: 'A system for leak detection in petrol tanks using PLC and C#, ensuring production quality and traceability.'
  },
  {
    title: 'Fuel Tank Leak (Web App)',
    description: 'ASP.NET Core web app for automated leak validation and reporting with role-based user control.'
  },
  {
    title: 'Anti Braking System (ABS)',
    description: 'Web app for quality analysis of vehicle braking systems using ASP.NET Core MVC and Dapper ORM.'
  },
  {
    title: 'Road Trial & Pre-Trial Application',
    description: 'Web tool for testing and analyzing vehicle performance during pre-production and road trials.'
  },
  {
    title: 'VIN Punching Application',
    description: 'Internal Windows system for generating and tracking 17-character VINs using laser punching automation.'
  }
]

export default function Projects(){
  return (
    <section className="container mx-auto px-6 py-12" id="projects">
      <h2 className="text-3xl font-semibold text-primary">My Projects</h2>
      <div className="mt-8 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow p-6 border-t-4 border-primary/20">
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <p className="mt-3 text-gray-600">{p.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
