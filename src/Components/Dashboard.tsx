import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  Home,
  Settings,
  HelpCircle,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const sidebarItems = [
    { icon: Home, text: "Home" },
    { icon: Settings, text: "Settings" },
    { icon: HelpCircle, text: "Help" },
  ];

  return (
    <motion.div
      className={`fixed left-0 top-0 h-full bg-gray-900 text-white z-20 ${
        isOpen ? "w-64" : "w-16"
      } transition-all duration-300 ease-in-out`}
      initial={false}
      animate={{ width: isOpen ? 256 : 64 }}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between p-4">
          <Link to="/">
            <span
              className={`text-2xl font-bold text-blue-400 hover:text-blue-300 ${
                isOpen ? "" : "hidden"
              }`}
            >
              Soora.ai
            </span>
          </Link>
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-full hover:bg-gray-800 focus:outline-none hidden md:block"
          >
            {isOpen ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
          </button>
        </div>
        <nav className="flex-grow">
          <ul>
            {sidebarItems.map((item, index) => (
              <li key={index} className="mb-2">
                <a
                  href="#"
                  className="flex items-center p-4 hover:bg-gray-800 transition-colors duration-200"
                >
                  <item.icon size={24} />
                  <span className={`ml-4 ${isOpen ? "" : "hidden"}`}>
                    {item.text}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-4">
          <a
            href="#"
            className="flex items-center hover:bg-gray-800 p-2 rounded transition-colors duration-200"
          >
            <User size={24} />
            <span className={`ml-4 ${isOpen ? "" : "hidden"}`}>Profile</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 font-mono">
      {/* Mobile menu button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-30 p-2 rounded-full bg-gray-800 text-white md:hidden"
      >
        {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <AnimatePresence>
        {(sidebarOpen || window.innerWidth >= 768) && (
          <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        )}
      </AnimatePresence>

      {/* Main content */}
      <main
        className={`transition-all duration-300 ease-in-out  ${
          sidebarOpen ? "md:ml-64" : "md:ml-16"
        }`}
      >
        <div className="relative min-h-screen flex flex-col items-center justify-center p-4">
          {/* Background text */}
          <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
            {Array.from({ length: 50 }).map((_, i) => (
              <div
                key={i}
                className="whitespace-nowrap overflow-hidden text-blue-300 text-[10px]"
              >
                {`const ${["foo", "bar", "baz", "qux"][i % 4]} = ${Math.random()
                  .toString(36)
                  .substring(7)};`.repeat(16)}
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="z-10 text-center mt-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              What do you want to build?
            </h1>
            <p className="text-xl mb-8">
              Prompt, run, edit, and deploy full-stack web apps.
            </p>
            <div className="bg-gray-800 rounded-lg p-4 mb-8 max-w-2xl mx-auto">
              <textarea
                placeholder="How can Bolt help you today?"
                className="w-full h-32 bg-transparent border-none focus:outline-none text-white resize-none"
              />
            </div>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {[
                "Start a blog with Astro",
                "Build a mobile app with NativeScript",
                "Create a docs site with VitePress",
                "Scaffold UI with shadcn",
                "Draft a presentation with Slidev",
                "Code a video with Remotion",
              ].map((option, index) => (
                <button
                  key={index}
                  className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-full transition-colors duration-200"
                >
                  {option}
                </button>
              ))}
            </div>
            <p className="mb-4">
              or start a blank app with your favorite stack
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-12 text-blue-400">
              {["S", "O", "O", "R", "A", "A", "I"].map((logo, index) => (
                <div
                  key={index}
                  className="w-10 h-10 bg-gray-800 rounded-md flex items-center justify-center"
                >
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
