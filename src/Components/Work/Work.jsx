import React, { useContext } from "react";
import StepCard from "../StepCard/StepCard";
import { ModeContext } from "../../Utils/Context/ModeContext";
import {
  Shield,
  Lock,
  Cpu,
  Key,
} from "lucide-react";

const Work = () => {
  const { mode: darkMode } = useContext(ModeContext);

  return (
    <section
      className={`py-20 px-6 transition-colors duration-300 ${
    darkMode
      ? "bg-gradient-to-b from-gray-900 to-gray-800"
      : "bg-gradient-to-b from-[#9ca3af] via-[#60a5fa] to-[#3b82f6]"
  }`}
    >
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="text-right rtl mb-16">
          <h1
            className={`text-4xl md:text-5xl font-bold mb-6 ${
              darkMode ? "text-white" : "text-blue-900"
            }`}
          >
            كيف يعمل{" "}
            <span className="bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent">
              فكرة ماركت
            </span>
          </h1>

          {/* Blockchain & Encryption Section */}
          <div
            className={`rounded-xl shadow-2xl p-8 mb-16 transition-all duration-300 ${
              darkMode
                ? "bg-gray-800 border border-gray-700"
                : "bg-white border border-blue-100"
            }`}
          >
            <div dir="rtl" className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-2/3">
                <h2
                  className={`text-2xl font-bold mb-6 ${
                    darkMode ? "text-white" : "text-blue-800"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Shield className="text-orange-500" />
                    لماذا نستخدم تقنية البلوك تشين وتشفير 256 بت؟
                  </span>
                </h2>
                <p
                  className={`mb-6 leading-relaxed text-lg ${
                    darkMode ? "text-gray-300" : "text-blue-800/90"
                  }`}
                >
                  في عالم تزايد فيه السرعة الرقمية والمنافسة، أصبحت حماية
                  الأفكار والأصول الإبداعية ضرورة لا خيارًا. في{" "}
                  <span
                    className={`font-bold ${
                      darkMode ? "text-blue-400" : "text-blue-600"
                    }`}
                  >
                    فكرة ماركت
                  </span>
                  ، نعتمد على تقنية البلوك تشين لأنها توفر سجلًا رقمياً لا يمكن
                  تعديله أو تزويره.
                </p>
                <div className="flex items-start mb-6">
                  <Lock
                    className={`w-6 h-6 mt-1 ml-3 flex-shrink-0 ${
                      darkMode ? "text-blue-400" : "text-blue-600"
                    }`}
                  />
                  <p
                    className={`leading-relaxed mr-3 text-lg ${
                      darkMode ? "text-gray-300" : "text-blue-800/90"
                    }`}
                  >
                    استخدامنا لتقنية تشفير 256 بت يضمن أعلى مستويات الأمان
                    العالمية، حيث يحتاج كسر مفتاح التشفير الواحد إلى قدرات
                    حسابية تفوق إمكانيات أقوى الحواسيب.
                  </p>
                </div>
                <p
                  className={`font-medium text-lg ${
                    darkMode ? "text-blue-400" : "text-blue-600"
                  }`}
                >
                  مع{" "}
                  <span className="font-bold bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent">
                    فكرة ماركت
                  </span>
                  ، أفكارك محمية بقوة المستقبل
                </p>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <div
                  className={`p-6 rounded-lg ${
                    darkMode
                      ? "bg-gray-700 border border-gray-600"
                      : "bg-blue-50 border border-blue-200"
                  }`}
                >
                  <Cpu className="w-16 h-16 mx-auto mb-4 text-orange-500" />
                  <h3
                    className={`text-xl font-bold text-center mb-2 ${
                      darkMode ? "text-white" : "text-blue-800"
                    }`}
                  >
                    تقنية البلوك تشين
                  </h3>
                  <ul
                    className={`space-y-2 ${
                      darkMode ? "text-gray-300" : "text-blue-700"
                    }`}
                  >
                    <li className="flex items-start gap-2">
                      <Key className="w-4 h-4 mt-1 text-orange-500" />
                      <span>تشفير 256 بت</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Lock className="w-4 h-4 mt-1 text-orange-500" />
                      <span>حماية لا مركزية</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Shield className="w-4 h-4 mt-1 text-orange-500" />
                      <span>سجل غير قابل للتغيير</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Steps Section */}
        <div dir="rtl" className="grid md:grid-cols-4 gap-8">
          <StepCard
            number="1"
            title="سجل فكرتك"
            description="قم بتسجيل فكرتك على المنصة، سيقوم نظام الذكاء الاصطناعي بالتحقق من أصالة الفكرة."
            imgSrc="https://plus.unsplash.com/premium_photo-1683133631419-758697f22519?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            darkMode={darkMode}
            cardHeight="400px" // Increased card height
            imgHeight="60%" // Image takes 60% of card height
          />
          <StepCard
            number="2"
            title="احصل على مفتاح فريد"
            description="ستحصل على مفتاح فريد (NFT) يثبت ملكيتك للفكرة ويحميها من التقليد."
            imgSrc="https://images.unsplash.com/photo-1635236066449-5b45769be233?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            darkMode={darkMode}
            cardHeight="400px"
            imgHeight="60%"
          />
          <StepCard
            number="3"
            title="حدد سعر فكرتك"
            description="حدد سعر فكرتك للاطلاع الواحد وبسعر البيع الكامل (نقل الملكية).حدد سعر فكرتك"
            imgSrc="https://plus.unsplash.com/premium_photo-1742902896916-3f2033cb7f9f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            darkMode={darkMode}
            cardHeight="400px"
            imgHeight="60%"
          />
          <StepCard
            number="4"
            title="اربح من فكرتك"
            description="ستحصل على المبلغ مباشرة بعد خصم عمولة المنصة (15%).اربح من فكرتك "
            imgSrc="https://cdn.salla.network/salla.com/BlogCover2_1.jpg"
            darkMode={darkMode}
            cardHeight="400px"
            imgHeight="60%"
          />
        </div>
      </div>
    </section>
  );
};

export default Work;