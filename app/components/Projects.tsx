import React from 'react';
import Text from '@/app/widget/Text'
const projectData = [
  {
    title: "Compiler Design Project",
    description:
      "A custom compiler using C++, Flex, and Bison to perform lexical analysis and parsing.",
  },

  {
    title: "Spell Checker",
    description:
    "A Python-based spell checker that identifies and corrects misspelled words and grammar using Levenshtein Distance. Utilizes NLP libraries such as TextBlob and NLTK for enhanced accuracy. Technologies used: Python, NLP, Levenshtein, TextBlob, NLTK.",
},

  {
    title: "Alphabet Catching Game ",
    description:
      "A graphics-based assembly language game where players catch falling alphabets using (COAL).",
  },


  {
    title: "Tetris Game",
    description: "A classic Tetris game built using C++ to demonstrate game logic, collision detection, and UI rendering. Implemented scoring, line-clearing, and increasing difficulty levels.",
  },

  {
    title: "Attendance Management System",
    description: "A file-based C++ system for tracking employee attendance and leave. Tracks weekly working hours, applies leave policies, and generates reports without using a database.",
  },

  {
    title: "AI Obstacle Detection in Self-Driving Cars",
    description:
      "A real-time computer vision project using Python and OpenCV to detect obstacles in a self-driving environment. Trained and implemented object detection models including YOLO and SSD, with distance estimation for safer autonomous navigation.",
  },
];

const Projects = () => {
  return (
    <div
      className="bg-center min-h-screen flex items-center justify-center"
      style={{ backgroundImage: "url('/p2.jpg')" }}
    >
      <div className=" bg-white dark:bg-black bg-opacity-80 w-full py-10 px-4 md:px-16">
        <Text  variant='heading1'className="text-center mb-10">
          Projects
        </Text>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectData.map((project, index) => (
            <div
              key={index}
              className=" bg-white border-2 border-black rounded-lg p-6  dark:border-0 text-black "
            >{/*border-black*/}
              <Text variant='heading2' >{project.title}</Text>
              <Text >{project.description}</Text>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
