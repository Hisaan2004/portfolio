"use client";
import React, { useState } from "react";
import Button from "@/app/widget/Button";
import Text from "@/app/widget/Text";
const EducationData = [
  {
    title: "Primary Education",
    year: "2008-2020",
    name: "Divisional Public School",
    description: "From kindergarten to Matriculation",
  },
  {
    title: "Secondary Education",
    year: "2020-2022",
    name: "Lahore College For Women University",
    description: "FSc Pre-Engineering",
  },
  {
    title: "Bachelors",
    year: "2022-Present",
    name: "National University of Computer and Emerging Sciences",
    description: "BS in Computer Science",
  },
];

const Educationpage = () => {
  const [current, setCurrent] = useState(0);
  const nextSlide = () => setCurrent((current + 1) % EducationData.length);
  const prevSlide = () =>
    setCurrent((current - 1 + EducationData.length) % EducationData.length);
  const currentData = EducationData[current];

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white dark:bg-black   border-b-2 border-t-2 border-black dark:border-white  ">
      <div className="flex flex-col items-center gap-6 max-w-2xl w-full px-4">
        <Text variant="heading1">Education</Text>

        <div className="bg-gray-200 text-black rounded-lg p-6 w-full shadow-lg">
          <Text variant="heading2">{currentData.title}</Text>
          <Text>{currentData.name}</Text>
          <Text variant="caption">{currentData.year}</Text>
          <Text className="mt-2">{currentData.description}</Text>
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button variant="slideshow" onClick={prevSlide}>
            ⬅ Prev
          </Button>
          <Button variant="slideshow" onClick={nextSlide}>
            Next ➡
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Educationpage;
