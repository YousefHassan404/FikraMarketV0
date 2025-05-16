import React, { useState } from "react";
import { Menu, X, MessageCircle, Sun, Moon, Languages } from "lucide-react";
import { Link } from "react-router-dom";
import FikraMarket from '../../assets/FikraMarket.png';
import { useContext } from "react";
import { ModeContext } from "../../Utils/Context/ModeContext";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const {mode : darkMode,setMode :setDarkMode} = useContext(ModeContext)
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleMode = () => setDarkMode(!darkMode);
  const switchLanguage = () => {
    // Add language switch logic here
    console.log("Language switched");
  };

  const user = false; // replace with your actual user logic
  const logout = () => {
    // Add logout logic here
  };

  return (
    <header className={`fixed top-0 w-full z-50 border-b backdrop-blur-md shadow-sm ${
  darkMode
    ? 'bg-gradient-to-b from-[#1F2937] to-[#111827] text-white border-gray-700'
    : 'bg-white/80 text-black border-white/20'
}`}>
      <div className="container mx-auto px-4 py-3 flex flex-row-reverse items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          <img src={FikraMarket} alt="Fikra Market Logo" className="h-16 transition-transform transform hover:scale-105" />
        </Link>

        {/* Desktop Navigation */}
        <nav dir="rtl" className="hidden md:flex space-x-6 rtl:space-x-reverse text-sm items-center">
          <Link to="/" className="hover:text-blue-600 transition-all font-medium text-lg">الرئيسية</Link>
          <Link to="/buy" className="hover:text-blue-600 transition-all font-medium text-lg">استعراض الافكار</Link>
          <Link to="/rent" className="hover:text-blue-600 transition-all font-medium text-lg">الاشتراكات</Link>
          <Link to="/commercial" className="hover:text-blue-600 transition-all font-medium text-lg">كيف يعمل</Link>
          <Link to="/add-idea" className="hover:text-blue-600 transition-all font-medium text-lg">أضف فكرتك</Link>
          <Link to="/chat" className="flex items-center gap-1 hover:text-blue-600 transition-colors">
            <MessageCircle size={20} /> الدردشة
          </Link>
          <button onClick={switchLanguage} className="hover:text-blue-600 transition-colors flex items-center gap-1">
            <Languages size={20} /> اللغة
          </button>
          <button onClick={toggleMode} className="hover:text-blue-600 transition-colors flex items-center gap-1">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />} الوضع
          </button>
          {user ? (
            <button onClick={logout} className="bg-red-600 text-white px-3 py-2 rounded-lg hover:bg-red-700 transition-all">تسجيل الخروج</button>
          ) : (
            <Link to="/login" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all">الدخول</Link>
          )}
        </nav>

        {/* Mobile Toggle Button */}
        <button onClick={toggleMenu} className="md:hidden">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className={`md:hidden px-6 py-4 space-y-4 shadow-lg text-right border-t ${darkMode ? 'bg-gray-800 text-white border-gray-600' : 'bg-white/95 text-black border-gray-100'}`}>
          <Link to="/" className="block hover:text-blue-600 transition-all font-medium text-lg">الرئيسية</Link>
          <Link to="/buy" className="block hover:text-blue-600 transition-all font-medium text-lg">استعراض الافكار</Link>
          <Link to="/rent" className="block hover:text-blue-600 transition-all font-medium text-lg">الاشتراكات</Link>
          <Link to="/commercial" className="block hover:text-blue-600 transition-all font-medium text-lg">كيف يعمل</Link>
          <Link to="/add-idea" className="block hover:text-blue-600 transition-all font-medium text-lg">أضف فكرتك</Link>
          <Link to="/chat" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
            <MessageCircle size={20} /> <span>الدردشة</span>
          </Link>
          <button onClick={switchLanguage} className="flex items-center gap-2 hover:text-blue-600 transition-colors">
            <Languages size={20} /> <span>اللغة</span>
          </button>
          <button onClick={toggleMode} className="flex items-center gap-2 hover:text-blue-600 transition-colors">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />} <span>الوضع</span>
          </button>
          {user ? (
            <button onClick={logout} className="w-full bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-all">تسجيل الخروج</button>
          ) : (
            <Link to="/login" className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all">الدخول</Link>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;