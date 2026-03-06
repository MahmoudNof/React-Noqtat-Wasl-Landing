import React from 'react';

const Roadmap = ({ steps }) => {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 font-cairo">
          خارطة طريق <span className="text-[#1f7a5a]">المبادرة</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.id} className={`p-8 rounded-3xl border-2 transition-all ${
              step.status === 'done' ? 'border-[#1f7a5a] bg-green-50/30' : 
              step.status === 'active' ? 'border-[#D4AF37] shadow-xl scale-105 bg-white' : 
              'border-gray-100 bg-gray-50 opacity-60'
            }`}>
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 text-xl font-bold ${
                step.status === 'done' ? 'bg-[#1f7a5a] text-white' : 
                step.status === 'active' ? 'bg-[#D4AF37] text-white animate-pulse' : 
                'bg-gray-200 text-gray-500'
              }`}>
                {step.status === 'done' ? '✓' : step.id}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;