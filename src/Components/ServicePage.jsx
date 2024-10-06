import Header from "./Header";

export default function ServicePage() {
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
  
          {/* Service content */}
          <div className="z-10 w-full max-w-4xl">
            <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: 'API Integration', description: 'Seamlessly integrate our powerful APIs into your applications.' },
                { title: 'Custom Development', description: 'Tailored solutions to meet your specific business needs.' },
                { title: 'Consulting', description: 'Expert advice to optimize your development processes.' },
                { title: 'Support', description: '24/7 technical support to keep your systems running smoothly.' },
              ].map((service) => (
                <div key={service.title} className="bg-gray-800 p-6 rounded-lg shadow-lg">
                  <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                  <p className="mb-6">{service.description}</p>
                  <button className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    )
  }