import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-[#2894f4] space-y-6">
      <h1 className="text-6xl font-extrabold">404</h1>
      <h2 className="text-2xl">Page Not Found</h2>
      <p className="text-lg">Sorry, the page you're looking for doesn't exist.</p>
      <Link 
        to="/" 
        className="px-6 py-3 bg-[#2894f4] text-white rounded-full shadow-lg hover:bg-[#1e7acb] transition-transform transform hover:scale-105"
      >
        Go back to Home
      </Link>
    </div>
  )
}