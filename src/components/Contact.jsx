import React from 'react'

export default function Contact(){
  return (
    <section className="container mx-auto px-6 py-12" id="contact">
      <h2 className="text-3xl font-semibold text-primary">Get in Touch</h2>

      <div className="mt-6 md:flex md:gap-8">
        <div className="md:w-1/2 bg-white rounded-lg p-6 shadow">
          <p className="text-gray-700"><strong>📧 Email:</strong> sindu5karthi@gmail.com</p>
          <p className="text-gray-700 mt-2"><strong>📞 Phone:</strong> 9345316987</p>
          <p className="text-gray-700 mt-2"><strong>📍 Location:</strong> Chennai, India</p>
        </div>

        <div className="md:flex-1 mt-6 md:mt-0">
          <form className="bg-white rounded-lg p-6 shadow">
            <label className="block">
              <span className="text-sm text-gray-700">Name</span>
              <input className="mt-1 block w-full border rounded px-3 py-2" type="text" name="name" />
            </label>

            <label className="block mt-4">
              <span className="text-sm text-gray-700">Email</span>
              <input className="mt-1 block w-full border rounded px-3 py-2" type="email" name="email" />
            </label>

            <label className="block mt-4">
              <span className="text-sm text-gray-700">Message</span>
              <textarea className="mt-1 block w-full border rounded px-3 py-2" rows="4" name="message"></textarea>
            </label>

            <div className="mt-4">
              <button type="button" className="bg-primary text-white px-4 py-2 rounded">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
