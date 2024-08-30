"use client";

import React from "react";
import { Tabs } from "../ui/tabs";
import SkillSidebar from "./SkillSidebar";
import { skills } from "@/constants/constants";

export function SkillsTab() {
 
  const tabs = [
    {
      title: "Languages",
      value: "languages",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-2xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <SkillSidebar topSkills={skills.languages} name="Languages" />
        </div>
      ),
    },
    {
      title: "Frameworks",
      value: "frameworks",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-2xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <SkillSidebar topSkills={skills.frameworks} name="Frameworks" />
        </div>
      ),
    },
    {
      title: "Databases",
      value: "databases",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-2xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <SkillSidebar topSkills={skills.databases} name="Databases" />
        </div>
      ),
    },
    {
      title: "Miscellaneous",
      value: "miscellaneous",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-2xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <SkillSidebar topSkills={skills.databases} name="Databases" />
        </div>
      ),
    },
  ];

  return (
    <div className=" h-[20rem] md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-10">
      <Tabs tabs={tabs} />
    </div>
  );
}
