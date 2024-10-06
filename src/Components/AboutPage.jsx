import Header from "./Header";

export default function AboutPage() {
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
  
          {/* About content */}
          <div className="z-10 w-full max-w-4xl">
            <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
            <div className="bg-transparent border-2 border-white p-8 rounded-lg shadow-lg">
              <p className="mb-6">
                We are a team of passionate developers and innovators dedicated to creating cutting-edge solutions for the modern web. Our mission is to empower businesses and individuals with powerful, easy-to-use tools that drive growth and success.
              </p>
              <p className="mb-6">
                Founded in 2023, we've quickly grown to become a leader in API integration and custom development services. Our team brings together decades of combined experience in software engineering, cloud computing, and artificial intelligence.
              </p>
              <h2 className="text-2xl font-bold mb-4">Our Values</h2>
              <ul className="list-disc list-inside mb-6">
                <li>Innovation: We're always pushing the boundaries of what's possible.</li>
                <li>Quality: We believe in delivering excellence in everything we do.</li>
                <li>Collaboration: We work closely with our clients to ensure their success.</li>
                <li>Integrity: We're committed to ethical practices and transparency.</li>
              </ul>
              <p className="mb-6">
                Whether you're a startup looking to build your first MVP or an enterprise seeking to optimize your existing systems, we're here to help you achieve your goals.
              </p>
              <button className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </main>
      </div>
    )
  }