import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-white border-t mt-8">
      <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between">
        <div className="text-sm text-gray-600">© 2025 Sindu Tamilarasan — Built with React.js</div>
        <div className="mt-3 md:mt-0 flex gap-4">
          <a href="#" className="text-gray-600">GitHub</a>
          <a href="#" className="text-gray-600">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}
