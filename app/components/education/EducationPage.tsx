"use client";
import React, { useState } from "react";
import Button from "@/app/widget/Button";
import Text from "@/app/widget/Text";
import { EDUCATION_INFO } from "./educationInfo";

function EducationPage() {
  const [current, setCurrent] = useState(0);
  const nextSlide = () =>
    setCurrent((current + 1) % EDUCATION_INFO.description.length);
  const prevSlide = () =>
    setCurrent(
      (current - 1 + EDUCATION_INFO.description.length) %
        EDUCATION_INFO.description.length,
    );
  const currentData = EDUCATION_INFO.description[current];

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white dark:bg-black   border-b-2 border-t-2 border-black dark:border-white  ">
      <div className="flex flex-col items-center gap-6 max-w-2xl w-full px-4">
        <Text variant="heading1">{EDUCATION_INFO.title}</Text>

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
}

export default EducationPage;
