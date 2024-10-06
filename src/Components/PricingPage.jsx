import Header from "./Header";

export default  function PricingPage() {
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
  
          {/* Pricing content */}
          <div className="z-10 w-full max-w-4xl">
            <h1 className="text-4xl font-bold text-center mb-8">Pricing Plans</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {['Basic', 'Pro', 'Enterprise'].map((plan, index) => (
                <div key={plan} className="border-1 border-gray-900 p-6 rounded-lg shadow-lg">
                  <h2 className="text-2xl font-bold text-center mb-4">{plan}</h2>
                  <p className="text-4xl text-center mb-6">
                    ${index === 0 ? '9' : index === 1 ? '29' : '99'}
                    <span className="text-xl">/mo</span>
                  </p>
                  <ul className="space-y-2 mb-6">
                    {[
                      '100 API calls/day',
                      '10 projects',
                      'Basic support',
                      ...(index > 0 ? ['Advanced analytics', 'Priority support'] : []),
                      ...(index > 1 ? ['Custom integrations', 'Dedicated account manager'] : []),
                    ].map((feature) => (
                      <li key={feature} className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                    Choose {plan}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    )
  }