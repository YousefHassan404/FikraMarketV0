import { useContext, useState } from "react";
import Button from "../Form/Button";
import { Share2, Mail, Eye, ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import ideas from "../../DB/DB";
import { ModeContext } from "../../Utils/Context/ModeContext";

export default function LatestIdeasSection() {
  const { mode } = useContext(ModeContext);

  const [flipped, setFlipped] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleNext = () => {
    setCurrentPage(prev => Math.min(prev + 1, Math.ceil(ideas.length / itemsPerPage)));
  };

  const handlePrev = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const darkModeBackground = "bg-[#0f2b33]";
  const darkModeBorder = "border-white/10";
  const darkModeText = "text-white";

  return (
    <section dir="rtl" className={`py-16 px-5 transition-colors duration-300 ${mode ? `${darkModeBackground} ${darkModeText}` : "bg-gradient-to-b from-blue-100 to-white text-gray-800"}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h2 className={`text-4xl font-bold ${mode ? "text-white" : "text-blue-900"}`}>أحدث الأفكار</h2>
          <div className="flex space-x-3">
            <Button 
              onClick={handlePrev}
              disabled={currentPage === 1}
              variant="outline"
              className="p-2 rounded-full"
            >
              <ArrowRight className="w-5 h-5 text-amber-500" />
            </Button>
            <Button 
              onClick={handleNext}
              disabled={currentPage === Math.ceil(ideas.length / itemsPerPage)}
              variant="outline"
              className="p-2 rounded-full"
            >
              <ArrowLeft className="w-5 h-5 text-amber-500" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10">
          {ideas.map((idea, index) =>
            index < 5 ? (
              <motion.div
                key={idea.id}
                className="relative group h-[460px] perspective-1000"
                onMouseEnter={() => setFlipped(index)}
                onMouseLeave={() => setFlipped(null)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  className="relative w-full h-full transition-transform duration-700 preserve-3d"
                  animate={{ rotateY: flipped === index ? 180 : 0 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Front */}
                  <div 
                    className={`absolute w-full h-full rounded-2xl overflow-hidden shadow-2xl border transition-colors duration-300 
                    ${mode ? `${darkModeBackground} ${darkModeBorder}` : "bg-white border-gray-200"}`}
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <div className="relative h-56 overflow-hidden">
                      <img 
                        src={idea.image} 
                        alt={idea.name} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                      <span className="absolute top-3 left-3 bg-amber-500 text-white text-xs px-3 py-1 rounded-full">
                        {idea.category}
                      </span>
                    </div>
                    <div className="p-5 flex-grow flex flex-col">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold">{idea.name}</h3>
                        <span className="bg-yellow-100 text-yellow-800 text-sm px-2 py-1 rounded-full flex items-center">
                          ⭐ {idea.rating}
                        </span>
                      </div>
                      <p className="mb-2 text-sm">السعر: <span className="font-semibold text-blue-600">{idea.price}</span></p>
                      <p className="text-xs text-gray-400 mb-4">تاريخ النشر: {idea.date}</p>
                      <div className="mt-auto flex justify-between gap-2">
                        <Button size="sm" className="flex-1 bg-gradient-to-r from-blue-600 to-amber-500 hover:from-blue-700 hover:to-orange-600 text-white">
                          <Eye className="w-4 h-4 ml-1" /> عرض
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1 border-blue-600 text-blue-600">
                          <Mail className="w-4 h-4 ml-1" /> تواصل
                        </Button>
                        <Button size="sm" variant="ghost" className="flex-1 text-amber-400">
                          <Share2 className="w-4 h-4 ml-1" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Back */}
                  <div 
                    className={`absolute w-full h-full rounded-2xl shadow-2xl p-6 flex flex-col justify-between items-center text-center transition-colors duration-300
                    ${mode ? `${darkModeBackground} ${darkModeText} border border-white/20` : "bg-white text-gray-800 border border-gray-200"}`}
                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                  >
                    <div>
                      <h3 className="text-xl font-bold mb-3">{idea.name}</h3>
                      <p className="text-sm mb-6">{idea.description}</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <p className="text-sm text-gray-400 mb-2">مسح الكود للتفاصيل</p>
                      <img 
                        src={idea.qrCode} 
                        alt="QR Code" 
                        className="w-32 h-32 border border-gray-300 rounded-lg p-2 bg-white" 
                      />
                    </div>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="mt-4 border-emerald-400 text-emerald-400"
                      onClick={() => setFlipped(null)}
                    >
                      العودة
                    </Button>
                  </div>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                key={idea.id}
                className={`relative rounded-2xl overflow-hidden h-[460px] flex items-center justify-center transition-shadow duration-300 
                ${mode ? `${darkModeBackground} border border-white/20 text-white` : "bg-white border border-gray-200 text-gray-800"} shadow-lg`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 5 * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-amber-500/10 opacity-60 dark:from-blue-900/20 dark:to-amber-500/20"></div>
                <div className="relative z-10 p-6 text-center">
                  <div className="bg-white/90 dark:bg-white/10 backdrop-blur-sm rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{idea.name}</h3>
                  <p className="mb-6">اشترك لمشاهدة المزيد من الأفكار الحصرية</p>
                  <button className="px-8 py-3 text-md font-semibold rounded-lg bg-gradient-to-r from-blue-600 to-amber-500 hover:from-blue-700 hover:to-orange-600 text-white shadow-lg">
                    اشترك الآن
                  </button>
                </div>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
