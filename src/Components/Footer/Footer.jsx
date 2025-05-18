import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import FikraMarketLogo from '../../assets/FikraMarket.png';
import FikraMarketLogoDark from '../../assets/FikraMarket.png';
import { useContext } from "react";
import { ModeContext } from "../../Utils/Context/ModeContext";

const Footer = () => {
  const { mode } = useContext(ModeContext);
  
  // Colors for both modes
  const bgColor = mode 
    ? 'bg-gradient-to-r from-gray-900 to-gray-800' 
    : 'bg-gradient-to-r from-blue-700 to-blue-600';
  
  const textColor = mode ? 'text-gray-200' : 'text-white';
  const secondaryTextColor = mode ? 'text-gray-400' : 'text-blue-100';
  const borderColor = mode ? 'border-gray-700' : 'border-blue-600';
  const inputBg = mode ? 'bg-gray-700 text-white' : 'bg-white text-gray-800';
  const hoverColor = mode ? 'hover:text-white' : 'hover:text-blue-50';

  return (
    <footer dir="rtl" className={`${bgColor} ${textColor} pt-16 pb-8 px-6 transition-colors duration-300`}>
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column with Logo */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center mb-6">
              <img 
                src={mode ? FikraMarketLogoDark : FikraMarketLogo} 
                alt="FikraMarket Logo" 
                className="h-12 w-auto mr-3"
              />
              <span className="text-2xl font-bold">فكرة ماركت</span>
            </div>
            <p className={`${secondaryTextColor} text-center md:text-right mb-6`}>
              منصة رائدة لتبادل الأفكار الإبداعية وربط المبتكرين مع العالم
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a href="#" className={`${secondaryTextColor} ${hoverColor} transition-colors`}>
                <Facebook size={20} />
              </a>
              <a href="#" className={`${secondaryTextColor} ${hoverColor} transition-colors`}>
                <Twitter size={20} />
              </a>
              <a href="#" className={`${secondaryTextColor} ${hoverColor} transition-colors`}>
                <Instagram size={20} />
              </a>
              <a href="#" className={`${secondaryTextColor} ${hoverColor} transition-colors`}>
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-right">
            <h3 className={`text-lg font-semibold mb-6 border-b ${borderColor} pb-2`}>روابط سريعة</h3>
            <ul className="space-y-3">
              <li><Link to="/" className={`${secondaryTextColor} ${hoverColor} transition-colors`}>الرئيسية</Link></li>
              <li><Link to="/about" className={`${secondaryTextColor} ${hoverColor} transition-colors`}>عن المنصة</Link></li>
              <li><Link to="/ideas" className={`${secondaryTextColor} ${hoverColor} transition-colors`}>تصفح الأفكار</Link></li>
              <li><Link to="/submit" className={`${secondaryTextColor} ${hoverColor} transition-colors`}>أضف فكرتك</Link></li>
              <li><Link to="/contact" className={`${secondaryTextColor} ${hoverColor} transition-colors`}>اتصل بنا</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h3 className={`text-lg font-semibold mb-6 border-b ${borderColor} pb-2`}>تواصل معنا</h3>
            <ul className="space-y-4">
              <li className="flex items-center justify-center md:justify-end">
                <Mail className="ml-2" size={18} />
                <a href="mailto:info@fikramarket.com" className={`${secondaryTextColor} ${hoverColor} transition-colors`}>
                  info@fikramarket.com
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-end">
                <Phone className="ml-2" size={18} />
                <a href="tel:+966123456789" className={`${secondaryTextColor} ${hoverColor} transition-colors`}>
                  +966 12 345 6789
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="text-center md:text-right">
            <h3 className={`text-lg font-semibold mb-6 border-b ${borderColor} pb-2`}>النشرة البريدية</h3>
            <p className={`${secondaryTextColor} mb-4`}>اشترك ليصلك كل جديد عن الأفكار المبتكرة</p>
            <form className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="بريدك الإلكتروني" 
                className={`px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 ${inputBg}`}
              />
              <button 
                type="submit" 
                className={`${mode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-blue-600 hover:bg-blue-500'} text-white px-6 py-2 rounded-full transition-colors`}
              >
                اشتراك
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className={`border-t ${borderColor} pt-8 text-center ${secondaryTextColor}`}>
          <p>© {new Date().getFullYear()} فكرة ماركت. جميع الحقوق محفوظة</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;