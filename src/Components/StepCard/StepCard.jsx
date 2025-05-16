import React from "react";

export default function StepCard({
  number,
  title,
  description,
  imgSrc,
  imgAlt,
  darkMode,
  cardHeight = "400px",
  imgHeight = "60%",
}) {
  return (
    <div
      className={`rounded-xl shadow-md p-6 text-right transition-all duration-300 hover:shadow-lg hover:-translate-y-2 flex flex-col ${
        darkMode ? "bg-gray-800 border border-gray-700" : "bg-white border border-blue-100"
      }`}
      style={{ height: cardHeight }}
    >
      {/* Image Section */}
      <div
        className="w-full mb-4 overflow-hidden rounded-lg"
        style={{ height: imgHeight }}
      >
        <img
          src={imgSrc}
          alt={imgAlt || `Step ${number} illustration`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="flex-1 flex flex-col justify-between">
        <div className="flex items-center justify-end mb-3">
          <span
            className={`font-bold text-xl ${
              darkMode ? "text-blue-400" : "text-blue-700"
            }`}
          >
            {number}
          </span>
        </div>
        <h3
          className={`text-xl font-bold mb-3 ${
            darkMode ? "text-white" : "text-blue-800"
          }`}
        >
          {title}
        </h3>
        <p
          className={`leading-relaxed ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  );
}