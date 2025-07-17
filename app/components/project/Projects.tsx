import React from "react";
import Text from "@/app/widget/Text";
import { PROJECTS_INFO } from "@/app/components/project/projectsInfo";
function Projects() {
  return (
    <div
      className="bg-center min-h-screen flex items-center justify-center"
      style={{ backgroundImage: "url('images/backgroundimg.jpg')" }}
    >
      <div className=" bg-white dark:bg-black bg-opacity-80 w-full py-10 px-4 md:px-16">
        <Text variant="heading1" className="text-center mb-10">
          Projects
        </Text>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS_INFO.map((project, index) => (
            <div
              key={index}
              className=" bg-white border-2 border-black rounded-lg p-6  dark:border-0 text-black "
            >
              <Text variant="heading2">{project.title}</Text>
              <Text>{project.description}</Text>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
