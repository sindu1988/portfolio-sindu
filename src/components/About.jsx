import React from 'react'

export default function About(){
  return (
    <section className="container mx-auto px-6 py-12" id="about">
      <h2 className="text-3xl font-semibold text-primary">About Me</h2>
      <div className="mt-6 md:flex md:items-start md:gap-8">
        <div className="md:flex-1 text-gray-700">
          <p>I'm a passionate software developer with 2.6 years of experience specializing in C#, ASP.NET Core MVC, AWS, and MSSQL. I work primarily on industrial software and web solutions for the automobile sector, optimizing testing and production systems. I also have 3 years of teaching experience as a Teaching Assistant.</p>
          <p className="mt-4">I’m committed to building high-performance, scalable, and maintainable applications.</p>
          <div className="mt-6">
            <a href="/sindu_resume2025.docx" className="inline-block bg-white border border-primary text-primary px-5 py-2 rounded-md">Download Resume</a>
          </div>
        </div>
      </div>
    </section>
  )
}
