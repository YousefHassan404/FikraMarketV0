import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import FikraMarketLogo from '../../assets/FikraMarket.png';
const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-800 to-blue-900 text-white pt-16 pb-8 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column with Logo */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center mb-6">
              <img 
                src={FikraMarketLogo} 
                alt="FikraMarket Logo" 
                className="h-12 w-auto mr-3"
              />
              <span className="text-2xl font-bold">فكرة ماركت</span>
            </div>
            <p className="text-blue-100 text-center md:text-right mb-6">
              منصة رائدة لتبادل الأفكار الإبداعية وربط المبتكرين مع العالم
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold mb-6 border-b border-blue-700 pb-2">روابط سريعة</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-blue-100 hover:text-white transition-colors">الرئيسية</Link></li>
              <li><Link to="/about" className="text-blue-100 hover:text-white transition-colors">عن المنصة</Link></li>
              <li><Link to="/ideas" className="text-blue-100 hover:text-white transition-colors">تصفح الأفكار</Link></li>
              <li><Link to="/submit" className="text-blue-100 hover:text-white transition-colors">أضف فكرتك</Link></li>
              <li><Link to="/contact" className="text-blue-100 hover:text-white transition-colors">اتصل بنا</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold mb-6 border-b border-blue-700 pb-2">تواصل معنا</h3>
            <ul className="space-y-4">
              <li className="flex items-center justify-center md:justify-end">
                <Mail className="ml-2" size={18} />
                <a href="mailto:info@fikramarket.com" className="text-blue-100 hover:text-white transition-colors">
                  info@fikramarket.com
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-end">
                <Phone className="ml-2" size={18} />
                <a href="tel:+966123456789" className="text-blue-100 hover:text-white transition-colors">
                  +966 12 345 6789
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold mb-6 border-b border-blue-700 pb-2">النشرة البريدية</h3>
            <p className="text-blue-100 mb-4">اشترك ليصلك كل جديد عن الأفكار المبتكرة</p>
            <form className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="بريدك الإلكتروني" 
                className="px-4 py-2 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button 
                type="submit" 
                className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-full transition-colors"
              >
                اشتراك
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-700 pt-8 text-center text-blue-200">
          <p>© {new Date().getFullYear()} فكرة ماركت. جميع الحقوق محفوظة</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;