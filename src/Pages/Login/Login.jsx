import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import loginImg from '../../assets/login-img.jpg'
import loginImgDark from '../../assets/login-page-dark.png'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import { ModeContext } from '../../Utils/Context/ModeContext';
import { Link } from 'react-router-dom'; // Changed from lucide-react to react-router-dom
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate()

  const { mode } = useContext(ModeContext);

  const bgColor = mode ? 'bg-[#0f1e25]' : 'bg-gray-100';
  const cardBg = mode ? 'bg-[#1a2a33]' : 'bg-white';
  const textColor = mode ? 'text-white' : 'text-gray-800';
  const inputBg = mode ? 'bg-[#0f1e25] text-white border-gray-600' : 'bg-white text-gray-800';
  const labelColor = mode ? 'text-gray-300' : 'text-gray-600';
  const linkColor = mode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800';


const handleSubmit =()=>{
  navigate('/')
}

  return (
    <>
      <Header />
      <div dir='rtl' className={`min-h-screen flex items-center justify-center ${bgColor} p-4`}>
        <div className={`max-w-5xl w-full ${cardBg} rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row-reverse`}>
          
          {/* Image Section */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 hidden md:block"
          >
            <img
              src={(!mode ? loginImg : loginImgDark)}
              alt="FikraMarket"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Form Section */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 p-8 text-right"
          >
            <h2 className={`text-3xl font-bold mb-6 ${textColor}`}>تسجيل الدخول إلى فكرة ماركت</h2>

            <form className="space-y-4">
              <div>
                <label className={`block mb-1 text-sm ${labelColor}`}>البريد الإلكتروني</label>
                <input
                  type="email"
                  className={`w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${inputBg}`}
                  placeholder="example@fikramarket.com"
                />
              </div>
              <div>
                <label className={`block mb-1 text-sm ${labelColor}`}>كلمة المرور</label>
                <input
                  type="password"
                  className={`w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${inputBg}`}
                  placeholder="********"
                />
              </div>
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center">
                  <input type="checkbox" className="ml-2" />
                  <span className={labelColor}>تذكرني</span>
                </label>
                <Link 
                  to="/forgot-password" 
                  className={`${linkColor} underline-offset-2 hover:underline transition-colors`}
                >
                  نسيت كلمة المرور؟
                </Link>
              </div>
              <button
                type="submit"
                onClick={handleSubmit}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl transition duration-300"
              >
                دخول
              </button>
            </form>

            <p className={`mt-6 text-sm ${labelColor} text-center`}>
              ليس لديك حساب؟{' '}
              <Link 
                to="/register" 
                className={`${linkColor} font-medium underline-offset-2 hover:underline transition-colors`}
              >
                سجل الآن
              </Link>
            </p>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;