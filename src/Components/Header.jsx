import React from 'react'

const Header = () => {
  return (
    <header className="p-4 flex justify-between items-center border-b border-gray-700">
    <nav className="flex gap-x-28">
    <a href="/">
          <p className="hover:text-blue-400 text-3xl font-semibold text-blue-400 cursor-pointer">Soora.ai</p>
        </a>
      <ul className="flex space-x-4">
        <a href="/pricing">
          <li className="hover:text-blue-400 cursor-pointer">Pricing</li>
        </a>
        <a href="/service">
          <li className="hover:text-blue-400 cursor-pointer">Service</li>
        </a>
        <a href="/about">
          {" "}
          <li className="hover:text-blue-400 cursor-pointer">About</li>
        </a>
      </ul>
    </nav>
    <a
      href="/auth"
      className="text-blue-400 hover:text-blue-300 transition-colors"
    >
      Login →
    </a>
  </header>
  )
}

export default Header
