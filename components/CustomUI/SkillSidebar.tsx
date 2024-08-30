import React from "react";

interface Skilltype {
  name: string;
  proficiency: number;
}

interface SkillSideBarProps {
  topSkills: Skilltype[];
  name: string;
}

const SkillSidebar: React.FC<SkillSideBarProps> = ({ topSkills, name }) => {
  return (
    <div className="w-full border rounded-md h-full text-white p-4">
      <h2 className="text-xl font-bold mb-4">{name}</h2>
      <ul className="flex flex-wrap gap-6 justify-center">
        {topSkills.map(skill => (
          <li key={skill.name} className="min-w-[40%] mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-lg">{skill.name}</span>
              <span className="text-sm">{skill.proficiency}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded h-2">
              <div
                className="bg-green-500 h-full rounded"
                style={{ width: `${skill.proficiency}%` }}
              ></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillSidebar;
