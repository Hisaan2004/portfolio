'use client'
import React, { useState } from 'react';

const EducationData = [
  {
    title: "Primary education",
    year: "2008-2020",
    name: "Divisional Public School",
    description: "From kindergarten to Matriculation",
  },
  {
    title: "Secondary education",
    year: "2020-2022",
    name: "Lahore College For Women University",
    description: "FSc Pre-Engineering",
  },
  {
    title: "Bachelors",
    year: "2022-Current",
    name: "National University of Computer and Emerging Sciences",
    description: "BS in Computer Science",
  },
];

const Educationpage = () => {
  const [current, setCurrent] = useState(0);
  const nextSlide = () => setCurrent((current + 1) % EducationData.length);
  const prevSlide = () => setCurrent((current - 1 + EducationData.length) % EducationData.length);
  const currentData = EducationData[current];

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white dark:bg-black   border-b-2 border-t-2 border-black dark:border-white  ">
      
      <div className="flex flex-col items-center gap-6 max-w-2xl w-full px-4">
        <h1 className="text-4xl text-black dark:text-white font-bold">Education</h1>

        <div className="bg-gray-200 text-black rounded-lg p-6 w-full shadow-lg">
          <h2 className="text-3xl font-semibold mb-2">{currentData.title}</h2>
          <p className="text-xl font-medium">{currentData.name}</p>
          <p className="text-sm text-gray-800">{currentData.year}</p>
          <p className="mt-2">{currentData.description}</p>
        </div>

        <div className="flex gap-4">
          <button
            onClick={prevSlide}
            className="bg-white text-black px-4 py-2 rounded hover:bg-gray-500"
          >
            ⬅ Prev
          </button>
          <button
            onClick={nextSlide}
            className="bg-white text-black px-4 py-2 rounded hover:bg-gray-500"
          >
            Next ➡
          </button>
        </div>
      </div>
    </div>
  );
};

export default Educationpage;
