import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Lightbulb, Upload, ShieldCheck, Users, Zap, ChevronRight } from "lucide-react";
import { ModeContext } from "../../Utils/Context/ModeContext";
import './Hero.scss';

const backgroundImages = [
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1470&q=80',
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1470&q=80',
  'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1470&q=80',
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1470&q=80',
];

const Hero = () => {
  const { mode: darkMode } = useContext(ModeContext);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000);

    return () => {
      setIsMounted(false);
      clearInterval(interval);
    };
  }, []);

  return (
    <section
      className={`hero-section relative overflow-hidden text-right rtl ${darkMode ? 'dark' : ''}`}
      style={{
        marginTop: "var(--header-height, 80px)",
        minHeight: "calc(100vh - var(--header-height, 80px))",
      }}
    >
      {/* Animated background with gradient overlay */}
      <div className="absolute inset-0 -z-10">
        {backgroundImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentBgIndex ? 'opacity-100' : 'opacity-0'}`}
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-blue-600/30 to-blue-400/20" />
      </div>

      <div className="container mx-auto px-6 py-20 max-w-6xl flex flex-col-reverse md:flex-row-reverse items-center gap-12 relative z-10">
        {/* Content */}
        <div className={`md:w-1/2 space-y-8 transition-all duration-700 ease-out ${isMounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            أطلق العنان لإبداعك مع{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">
              فكرة ماركت
            </span>
          </h1>

          <p className="text-lg md:text-xl text-blue-100 leading-relaxed max-w-2xl">
            منصة رائدة لاكتشاف ومشاركة الأفكار المبتكرة. انضم إلى مجتمعنا المتنامي من المبدعين وكن جزءًا من ثورة الابتكار.
          </p>

          {/* Stats with animated counters */}
          <div className="flex flex-wrap gap-4 justify-end">
            <StatCard
              icon={<Zap className="text-amber-400" />}
              value={10000}
              label="فكرة مبتكرة"
              prefix="+"
            />
            <StatCard
              icon={<Users className="text-amber-400" />}
              value={5000}
              label="مستخدم نشط"
              prefix="+"
            />
          </div>

          {/* CTA Buttons with hover animations */}
          <div className="flex flex-wrap gap-4 justify-end">
            <Link
              to="/buy"
              className="flex items-center gap-3 group bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-4 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <span className="font-medium">استعراض الأفكار</span>
              <Lightbulb className="transition-transform duration-300 group-hover:scale-125" />
              <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              to="/upload"
              className="flex items-center gap-3 group bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <span className="font-medium">ابدأ بمشاركة فكرتك</span>
              <Upload className="transition-transform duration-300 group-hover:scale-125" />
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-end gap-6 mt-6">
            <div className="flex items-center gap-2 text-sm text-blue-100">
              <ShieldCheck className="text-emerald-400" />
              <span>بياناتك محمية بأعلى معايير الأمان</span>
            </div>

            <div className="hidden sm:flex items-center gap-2 text-sm text-blue-100">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white bg-blue-500"
                    style={{ backgroundImage: `url(https://randomuser.me/api/portraits/${i % 2 === 0 ? 'women' : 'men'}/${i+20}.jpg)` }}
                  />
                ))}
              </div>
              <span>انضم إلى الآلاف من المبدعين</span>
            </div>
          </div>
        </div>

        {/* Optional illustration or image placeholder */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-lg">
            <div className="absolute -inset-4 bg-gradient-to-r from-amber-400/20 to-orange-500/20 rounded-2xl blur-xl opacity-75" />
            <div className="relative bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-8 shadow-2xl">
              <div className="aspect-w-16 aspect-h-9 bg-blue-900/20 rounded-lg flex items-center justify-center">
                <div className="text-center p-6">
                  <Lightbulb className="w-16 h-16 mx-auto text-amber-400 mb-4" />
                  <h3 className="text-xl font-bold text-white">شارك فكرتك مع العالم</h3>
                  <p className="text-blue-200 mt-2">ابدأ رحلتك الابتكارية اليوم</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Reusable StatCard component with counter animation
const StatCard = ({ icon, value, label, prefix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const start = 0;
    const increment = Math.ceil(value / (duration / 16));

    const timer = setInterval(() => {
      setCount(prev => {
        const newCount = prev + increment;
        if (newCount >= value) {
          clearInterval(timer);
          return value;
        }
        return newCount;
      });
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-5 py-3 rounded-xl border border-white/10">
      <div className="p-2 bg-blue-900/30 rounded-lg">{icon}</div>
      <div>
        <div className="text-2xl font-bold text-white">
          {prefix}{count.toLocaleString()}
        </div>
        <div className="text-sm text-blue-200">{label}</div>
      </div>
    </div>
  );
};

export default Hero;
