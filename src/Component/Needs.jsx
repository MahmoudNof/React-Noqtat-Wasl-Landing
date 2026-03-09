import React from 'react';
import { FaCheckCircle, FaClock, FaExclamationTriangle, FaTools } from 'react-icons/fa';

const Needs = ({ needs }) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* رأس القسم */}
        <div className="mb-12 text-right">
          <div className="flex items-center gap-3 mb-2">
            <FaTools className="text-[#D4AF37] text-2xl" />
            <h2 className="text-3xl font-black text-gray-800">قائمة جرد الاحتياجات الإنشائية</h2>
          </div>
          <p className="text-gray-500 mr-9">تحديث ميداني مباشر للمواد المطلوبة لتجهيز الموقع</p>
        </div>

        {/* جدول الجرد */}
        <div className="overflow-hidden rounded-3xl border border-gray-100 shadow-xl">
          <table className="w-full text-right border-collapse">
            <thead>
              <tr className="bg-gray-900 text-white font-bold">
                <th className="p-5">المادة الإنشائية</th>
                <th className="p-5">الكمية المطلوبة</th>
                <th className="p-5 text-center">حالة التوفر</th>
                <th className="p-5">نسبة الإنجاز</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {needs.map((need) => (
                <tr key={need.id} className="hover:bg-gray-50 transition-colors group">
                  <td className="p-5 font-bold text-gray-700">{need.item}</td>
                  <td className="p-5">
                    <span className="bg-gray-100 px-3 py-1 rounded-lg text-sm font-mono text-gray-600">
                      {need.quantity}
                    </span>
                  </td>
                  <td className="p-5 text-center">
                    {need.status === 'secured' && (
                      <span className="inline-flex items-center gap-1 text-green-600 text-sm font-bold bg-green-50 px-3 py-1 rounded-full">
                        <FaCheckCircle /> تم التأمين
                      </span>
                    )}
                    {need.status === 'pending' && (
                      <span className="inline-flex items-center gap-1 text-blue-600 text-sm font-bold bg-blue-50 px-3 py-1 rounded-full">
                        <FaClock /> قيد الانتظار
                      </span>
                    )}
                    {need.status === 'urgent' && (
                      <span className="inline-flex items-center gap-1 text-red-600 text-sm font-bold bg-red-50 px-3 py-1 rounded-full animate-pulse">
                        <FaExclamationTriangle /> مطلوب عاجلاً
                      </span>
                    )}
                  </td>
                  <td className="p-5 w-48">
                    <div className="flex items-center gap-3">
                      <div className="flex-1 bg-gray-100 h-2 rounded-full overflow-hidden">
                        <div 
                          className={`h-full transition-all duration-1000 ${
                            need.status === 'secured' ? 'bg-[#1f7a5a]' : 
                            need.status === 'urgent' ? 'bg-red-500' : 'bg-[#D4AF37]'
                          }`}
                          style={{ width: `${need.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-xs font-bold text-gray-400">{need.progress}%</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* تذييل القسم */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400 italic">
          <p>* يتم تحديث هذه القائمة دورياً بناءً على التبرعات العينية والمشتريات الميدانية.</p>
          <div className="flex gap-4">
            <span className="flex items-center gap-1"><span className="w-3 h-3 bg-red-500 rounded-full"></span> أولوية قصوى</span>
            <span className="flex items-center gap-1"><span className="w-3 h-3 bg-[#D4AF37] rounded-full"></span> قيد التنفيذ</span>
            <span className="flex items-center gap-1"><span className="w-3 h-3 bg-[#1f7a5a] rounded-full"></span> مكتمل</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Needs;