import React from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
    const navigate = useNavigate();
    const handleSignIn = () =>{
        navigate("/auth")
    }
  return (
    <div className="md:container min-h-screen bg-gray-900 text-gray-200 font-mono">
      <Header/>

      {/* Main content */}
      <main className="relative min-h-[calc(100vh-64px)] flex flex-col items-center justify-center p-4">
        {/* Background text */}
        <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="whitespace-nowrap overflow-hidden text-blue-300"
              style={{ fontSize: "10px" }}
            >
              {`const ${["foo", "bar", "baz", "qux"][i % 4]} = ${Math.random()
                .toString(36)
                .substring(7)};`.repeat(12)}
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 z-10">
          <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors">
            Join the Beta
          </button>
          <button onClick={handleSignIn} className="bg-transparent border border-blue-400 text-blue-400 px-6 py-2 rounded hover:bg-blue-400 hover:text-gray-900 transition-colors">
            Sign In
          </button>
          <button className="bg-transparent border border-blue-400 text-blue-400 px-6 py-2 rounded hover:bg-blue-400 hover:text-gray-900 transition-colors sm:col-span-2">
            Getting Started
          </button>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
