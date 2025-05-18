import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import { useNavigate } from 'react-router-dom';
import { ModeContext } from '../../Utils/Context/ModeContext';

const steps = ['المعلومات الأساسية', 'تأكيد الهوية', 'مجالات الاهتمام'];

export default function Register() {
  const { mode } = useContext(ModeContext);
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  age: '',
  country: '',
  gender: '',
  profileImage: null,
  idFront: null,
  idBack: null,
  selfieWithId: null,
  interests: [],
  privacyAccepted: false,
  userType: '', // Add this line
});
console.log(formData);
  const interestsList = ['التكنولوجيا', 'الصحة', 'الطاقة', 'التعليم', 'الزراعة'];

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e, fieldName) => {
    setFormData(prev => ({ ...prev, [fieldName]: e.target.files[0] }));
  };

  const handleInterestToggle = (interest) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleCheckboxChange = (e) => {
    setFormData(prev => ({ ...prev, privacyAccepted: e.target.checked }));
  };

  const handleSubmit = () => {
    if (!formData.privacyAccepted) {
      alert('يرجى الموافقة على سياسة الخصوصية أولاً.');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      alert('كلمات المرور غير متطابقة.');
      return;
    }
    console.log(formData);
    alert('تم إنشاء الحساب بنجاح!');
    navigate('/');
  };

  return (
    <>
      <Header />
      <div
        dir="rtl"
        className={`min-h-screen flex justify-center items-center px-6 pt-28 pb-10 ${
          mode ? 'bg-[#0f172a] text-white' : 'bg-gradient-to-br from-blue-50 to-gray-50 text-gray-800'
        }`}
      >

        <motion.div
          key={step}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className={`w-full md:w-1/2 p-8 text-right ${!mode ? 'bg-white' : 'dark:bg-slate-800'} rounded-r-2xl shadow-lg`}
        >
          <h2 className={`text-3xl font-bold mb-2 ${!mode ? 'text-blue-800' : 'dark:text-white'}`}>مرحبًا بك في FikraMarket 👋</h2>
          <p className={`mb-6 ${!mode ? 'text-blue-600' : 'dark:text-gray-300'} text-sm`}>
            نحن هنا لنربط بين أصحاب الأفكار الملهمة والمستثمرين الطموحين.
          </p>

          <div className="flex justify-center mb-8 gap-3">
            {steps.map((s, index) => (
              <div key={index} className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    index + 1 === step 
                      ? 'bg-blue-600 text-white' 
                      : !mode 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-gray-600 text-white'
                  }`}
                >
                  {index + 1}
                </div>
                <span className={`text-xs mt-1 ${index + 1 === step ? 'font-bold text-blue-600' : !mode ? 'text-gray-500' : 'text-gray-400'}`}>
                  {s}
                </span>
              </div>
            ))}
          </div>

          {/* Step 1: Basic Info */}
          {step === 1 && (
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="الاسم الكامل"
                className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 ${
                  !mode ? 'border-gray-200 bg-white' : 'dark:bg-slate-700 dark:border-slate-600'
                }`}
                onChange={handleInput}
              />
              <input
                type="email"
                name="email"
                placeholder="البريد الإلكتروني"
                className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 ${
                  !mode ? 'border-gray-200 bg-white' : 'dark:bg-slate-700 dark:border-slate-600'
                }`}
                onChange={handleInput}
              />
              <input
                type="password"
                name="password"
                placeholder="كلمة المرور"
                className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 ${
                  !mode ? 'border-gray-200 bg-white' : 'dark:bg-slate-700 dark:border-slate-600'
                }`}
                onChange={handleInput}
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="تأكيد كلمة المرور"
                className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 ${
                  !mode ? 'border-gray-200 bg-white' : 'dark:bg-slate-700 dark:border-slate-600'
                }`}
                onChange={handleInput}
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="number"
                  name="age"
                  placeholder="العمر"
                  className={`p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 ${
                    !mode ? 'border-gray-200 bg-white' : 'dark:bg-slate-700 dark:border-slate-600'
                  }`}
                  onChange={handleInput}
                />
                <input
                  type="text"
                  name="country"
                  placeholder="الدولة"
                  className={`p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 ${
                    !mode ? 'border-gray-200 bg-white' : 'dark:bg-slate-700 dark:border-slate-600'
                  }`}
                  onChange={handleInput}
                />
              </div>
              <select
                name="gender"
                className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 ${
                  !mode ? 'border-gray-200 bg-white' : 'dark:bg-slate-700 dark:border-slate-600'
                }`}
                onChange={handleInput}
              >
                <option value="">اختر النوع</option>
                <option value="ذكر">ذكر</option>
                <option value="أنثى">أنثى</option>
              </select>

              <div>
                <label className={`block text-sm mb-2 font-medium ${!mode ? 'text-gray-700' : 'dark:text-white'}`}>
                  الصورة الشخصية
                </label>
                <div className={`flex items-center justify-center w-full p-4 border-2 border-dashed rounded-lg ${
                  !mode ? 'border-blue-200 bg-blue-50' : 'dark:border-gray-600 dark:bg-gray-700'
                }`}>
                  <input
                    type="file"
                    onChange={(e) => handleFileChange(e, 'profileImage')}
                    className="hidden"
                    id="profileImage"
                  />
                  <label 
                    htmlFor="profileImage" 
                    className={`cursor-pointer text-center ${
                      !mode ? 'text-blue-600 hover:text-blue-800' : 'dark:text-gray-300'
                    }`}
                  >
                    <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <span className="text-sm">انقر لرفع الصورة</span>
                    <p className="text-xs mt-1">PNG, JPG up to 2MB</p>
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Identity Verification */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <label className={`block text-sm mb-2 font-medium ${!mode ? 'text-gray-700' : 'dark:text-white'}`}>
                  الصورة الأمامية للبطاقة
                </label>
                <div className={`flex items-center justify-center w-full p-4 border-2 border-dashed rounded-lg ${
                  !mode ? 'border-blue-200 bg-blue-50' : 'dark:border-gray-600 dark:bg-gray-700'
                }`}>
                  <input
                    type="file"
                    onChange={(e) => handleFileChange(e, 'idFront')}
                    className="hidden"
                    id="idFront"
                  />
                  <label 
                    htmlFor="idFront" 
                    className={`cursor-pointer text-center ${
                      !mode ? 'text-blue-600 hover:text-blue-800' : 'dark:text-gray-300'
                    }`}
                  >
                    <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <span className="text-sm">انقر لرفع الصورة</span>
                  </label>
                </div>
              </div>

              <div>
                <label className={`block text-sm mb-2 font-medium ${!mode ? 'text-gray-700' : 'dark:text-white'}`}>
                  الصورة الخلفية للبطاقة
                </label>
                <div className={`flex items-center justify-center w-full p-4 border-2 border-dashed rounded-lg ${
                  !mode ? 'border-blue-200 bg-blue-50' : 'dark:border-gray-600 dark:bg-gray-700'
                }`}>
                  <input
                    type="file"
                    onChange={(e) => handleFileChange(e, 'idBack')}
                    className="hidden"
                    id="idBack"
                  />
                  <label 
                    htmlFor="idBack" 
                    className={`cursor-pointer text-center ${
                      !mode ? 'text-blue-600 hover:text-blue-800' : 'dark:text-gray-300'
                    }`}
                  >
                    <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <span className="text-sm">انقر لرفع الصورة</span>
                  </label>
                </div>
              </div>

              <div>
                <label className={`block text-sm mb-2 font-medium ${!mode ? 'text-gray-700' : 'dark:text-white'}`}>
                  سيلفي مع البطاقة
                </label>
                <div className={`flex items-center justify-center w-full p-4 border-2 border-dashed rounded-lg ${
                  !mode ? 'border-blue-200 bg-blue-50' : 'dark:border-gray-600 dark:bg-gray-700'
                }`}>
                  <input
                    type="file"
                    onChange={(e) => handleFileChange(e, 'selfieWithId')}
                    className="hidden"
                    id="selfieWithId"
                  />
                  <label 
                    htmlFor="selfieWithId" 
                    className={`cursor-pointer text-center ${
                      !mode ? 'text-blue-600 hover:text-blue-800' : 'dark:text-gray-300'
                    }`}
                  >
                    <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <span className="text-sm">انقر لرفع الصورة</span>
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Interests and Privacy */}
          {/* Step 3: Interests and Privacy */}
{step === 3 && (
  <div className="space-y-6">
    <div>
      <p className={`text-sm font-medium mb-3 ${!mode ? 'text-gray-700' : 'dark:text-white'}`}>
        اختر المجالات التي تهمك:
      </p>
      <div className="flex flex-wrap gap-3">
        {interestsList.map((interest, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => handleInterestToggle(interest)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              formData.interests.includes(interest)
                ? 'bg-blue-600 text-white shadow-md'
                : !mode 
                  ? 'bg-white text-blue-700 border border-blue-200 hover:bg-blue-50'
                  : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
            }`}
          >
            {interest}
          </button>
        ))}
      </div>
    </div>

    {/* User Type Selection */}
    <div className={`p-4 rounded-lg ${!mode ? 'bg-blue-50 border border-blue-100' : 'dark:bg-slate-700 dark:border-slate-600'}`}>
      <p className={`text-sm font-medium mb-3 ${!mode ? 'text-gray-700' : 'dark:text-white'}`}>
        أنا:
      </p>
      <div className="space-y-2">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="userType"
            value="ideaOwner"
            checked={formData.userType === 'ideaOwner'}
            onChange={() => setFormData(prev => ({ ...prev, userType: 'ideaOwner' }))}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500"
          />
          <span className={!mode ? 'text-gray-700' : 'dark:text-gray-300'}>صاحب فكرة</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="userType"
            value="investor"
            checked={formData.userType === 'investor'}
            onChange={() => setFormData(prev => ({ ...prev, userType: 'investor' }))}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500"
          />
          <span className={!mode ? 'text-gray-700' : 'dark:text-gray-300'}>مستثمر</span>
        </label>
      </div>
    </div>

    {/* Privacy Policy */}
    <div className={`p-4 rounded-lg ${!mode ? 'bg-blue-50 border border-blue-100' : 'dark:bg-slate-700 dark:border-slate-600'}`}>
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="privacyCheck"
          checked={formData.privacyAccepted}
          onChange={handleCheckboxChange}
          className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500"
        />
        <label 
          htmlFor="privacyCheck" 
          className={`text-sm ${!mode ? 'text-gray-700' : 'dark:text-gray-300'}`}
        >
          أقر بأنني قرأت وأوافق على{' '}
          <span className={`font-medium ${!mode ? 'text-blue-600 hover:underline' : 'dark:text-blue-400'}`}>
            سياسة الخصوصية
          </span> و{' '}
          <span className={`font-medium ${!mode ? 'text-blue-600 hover:underline' : 'dark:text-blue-400'}`}>
            شروط الخدمة
          </span>
        </label>
      </div>
    </div>
  </div>
)}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            {step > 1 && (
              <button
                onClick={handleBack}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  !mode 
                    ? 'text-blue-700 bg-blue-100 hover:bg-blue-200' 
                    : 'dark:text-white dark:bg-gray-600 dark:hover:bg-gray-700'
                }`}
              >
                رجوع
              </button>
            )}
            {step < 3 ? (
              <button
                onClick={handleNext}
                className={`px-6 py-2 rounded-lg font-medium text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-md ${
                  !mode ? '' : 'dark:bg-blue-700 dark:hover:bg-blue-800'
                }`}
              >
                التالي
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className={`px-6 py-2 rounded-lg font-medium text-white bg-green-600 hover:bg-green-700 transition-all shadow-md ${
                  !mode ? '' : 'dark:bg-green-700 dark:hover:bg-green-800'
                }`}
              >
                إنشاء الحساب
              </button>
            )}
          </div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
}