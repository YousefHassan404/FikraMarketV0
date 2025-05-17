import React, { useContext } from 'react';
import { ModeContext } from '../../Utils/Context/ModeContext';

const FikraSteps = () => {
  const { mode } = useContext(ModeContext);

  return (
    <div
      dir="rtl"
      className={`min-h-screen ${
        mode ? 'bg-[#0f172a] text-white' : 'bg-gradient-to-b from-blue-50 to-white text-gray-900'
      }`}
    >
      <section id="investors" className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-right">
            <h3 className={`text-xl font-semibold ${mode ? 'text-blue-300' : 'text-blue-600'} mb-8`}>
              خطوات الاستثمار عبر فكرة ماركت
            </h3>

            <div className="relative border-r-2 border-gray-300 pr-4">
              {[...Array(5)].map((_, index) => {
                const steps = [
                  {
                    title: 'التسجيل وإنشاء الحساب',
                    desc: 'أنشئ حسابك كمستثمر وأكمل معلوماتك الشخصية والمهنية',
                  },
                  {
                    title: 'تصفح الأفكار المتاحة',
                    desc: 'استخدم فلاتر البحث للعثور على الأفكار التي تتناسب مع اهتماماتك',
                  },
                  {
                    title: 'طلب التفاصيل الكاملة',
                    desc: 'بعد اختيار الفكرة، يمكنك طلب الوثائق الكاملة والتفاصيل المالية',
                  },
                  {
                    title: 'التواصل مع صاحب الفكرة',
                    desc: 'تواصل مباشرة مع رائد الأعمال عبر المنصة لمناقشة التفاصيل',
                  },
                  {
                    title: 'إتمام الصفقة',
                    desc: 'بعد الاتفاق، توفر المنصة خدمات التوثيق القانوني للصفقة',
                  },
                ];

                return (
                  <div key={index} className="relative mb-10 pr-10">
                    {/* النقطة */}
                    <div
                      className={`absolute right-[-10px] top-1.5 w-5 h-5 rounded-full border-4 border-white shadow-lg z-10 ${
                        mode ? 'bg-blue-400' : 'bg-blue-500'
                      }`}
                    ></div>

                    {/* المحتوى */}
                    <div>
                      <div
                        className={`inline-block text-sm font-bold px-3 py-1 rounded-full mb-2 ${
                          mode ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white'
                        }`}
                      >
                        {index + 1}
                      </div>
                      <div
                        className={`p-4 rounded-lg shadow transition duration-300 ${
                          mode
                            ? 'bg-slate-800 border border-slate-700 hover:bg-slate-700'
                            : 'bg-gray-50 border border-gray-200 hover:bg-blue-50'
                        }`}
                      >
                        <h4 className="font-semibold text-base mb-1">{steps[index].title}</h4>
                        <p className="text-sm">{steps[index].desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FikraSteps;
