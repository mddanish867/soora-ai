
import React from "react";
import Header from "./Header";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
    const router = useNavigate();
    const handleSignIn = () => {
        router("/auth");
    };

    const handleGettingStarted = () => {
        router("/dasboard");
    };

    

    return (
        <div className="min-h-screen bg-transparent text-gray-200 font-mono">
            <Header />

            {/* Main content */}
            <main className="relative min-h-[calc(100vh-64px)] flex flex-col items-center justify-center p-4">
                {/* Background text */}
                <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
                    {Array.from({ length: 50 }).map((_, i) => (
                        <div
                            key={i}
                            className="whitespace-nowrap overflow-hidden text-blue-300 text-[10px]"
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
                    <div className="relative sm:col-span-2">
                        <button onClick={handleGettingStarted} className="w-full bg-transparent border border-blue-400 text-blue-400 px-6 py-2 rounded hover:bg-transparent hover:text-blue-300 transition-colors">
                            Getting Started
                        </button>
                        <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                            <rect
                                width="100%"
                                height="100%"
                                fill="none"
                                rx="4"
                                ry="4"
                                strokeWidth="2"
                                stroke="rgba(96, 165, 250, 0.5)"
                            />
                            <motion.rect
                                width="100%"
                                height="100%"
                                fill="none"
                                rx="4"
                                ry="4"
                                stroke="#60A5FA"
                                strokeWidth="2"
                                strokeDasharray="8 8"
                                initial={{ strokeDashoffset: 0 }}
                                animate={{
                                    strokeDashoffset: [0, -16],
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 1,
                                    ease: "linear",
                                }}
                            />
                        </svg>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default LandingPage;