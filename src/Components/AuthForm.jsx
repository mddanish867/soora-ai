import { useState } from 'react';
import Header from './Header';

export default function AuthForm() {
    const [activeTab, setActiveTab] = useState('login')
  
    return (
      <div className="min-h-screen bg-gray-900 text-gray-200 font-mono">
          <Header/>
        {/* Main content */}
        <main className="relative min-h-[calc(100vh-64px)] flex flex-col items-center justify-center p-4">
          {/* Background text */}
          <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
            {Array.from({ length: 50 }).map((_, i) => (
              <div key={i} className="whitespace-nowrap overflow-hidden text-blue-300 text-[10px]">
                {`const ${['foo', 'bar', 'baz', 'qux'][i % 4]} = ${Math.random().toString(36).substring(7)};`.repeat(12)}
              </div>
            ))}
          </div>
  
          {/* Auth Form */}
          <div className="z-10 w-full max-w-md bg-gray-900 rounded-lg shadow-lg p-6">
            <div className="flex mb-4">
              <button
                className={`flex-1 py-2 text-center ${
                  activeTab === 'login'
                    ? 'text-blue-400 border-b-2 border-blue-400'
                    : 'text-gray-400 hover:text-gray-200'
                }`}
                onClick={() => setActiveTab('login')}
              >
                Login
              </button>
              <button
                className={`flex-1 py-2 text-center ${
                  activeTab === 'register'
                    ? 'text-blue-400 border-b-2 border-blue-400'
                    : 'text-gray-400 hover:text-gray-200'
                }`}
                onClick={() => setActiveTab('register')}
              >
                Register
              </button>
            </div>
  
            {activeTab === 'login' && (
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-3 py-2 bg-transparent rounded border border-gray-600 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-3 py-2 bg-transparent rounded border border-gray-600 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
                />
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                >
                  Login
                </button>
              </form>
            )}
  
            {activeTab === 'register' && (
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Username"
                  className="w-full px-3 py-2 bg-gray-700 rounded border border-gray-600 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-3 py-2 bg-gray-700 rounded border border-gray-600 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-3 py-2 bg-gray-700 rounded border border-gray-600 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full px-3 py-2 bg-gray-700 rounded border border-gray-600 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
                />
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                >
                  Register
                </button>
              </form>
            )}
          </div>
        </main>
      </div>
    )
  }