import React from "react";

const Impact = ({stats}) => {
    return(
        <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {stats.map((stat) => (
                        <div key={stat.id} className="p-8 rounded-2xl bg-gray-50 border-b-4 border-[#D4AF37] shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-4xl font-extrabold text-[#D4AF37] mb-2">{stat.value}</h3>
                            <p className="text-gray-700 font-bold text-lg mb-1">{stat.label}</p>
                            <p className="ext-gray-400 text-sm italic">+ إضافة {stat.label.replace('+', '')}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Impact