import React from 'react'
import { SkillsTab } from '@/components/CustomUI/SkillsTab'
import { SkillIconCloud } from '@/components/CustomUI/SkillIconCloud'
import { skills } from "@/constants/constants";
import SkillSidebar from '@/components/CustomUI/SkillSidebar';

const SkillsSection = () => {
    return (
        <section className="relative mt-20 sm:mt-[150px]">
            {/* Visible on larger screens */}
            <h2 className="font-bold text-2xl text-center">Skills</h2>
            <div className="block max-[800px]:hidden">
            
                <div className="flex flex-col sm:flex-row justify-center items-center">
                    <SkillsTab />
                    <SkillIconCloud />
                </div>
            </div>

            {/* Visible on smaller screens */}
            <div className="hidden max-[799px]:block mt-10">
                <SkillSidebar topSkills={skills.languages} name="Languages" />
                <SkillSidebar topSkills={skills.frameworks} name="Frameworks" />
                <SkillSidebar topSkills={skills.databases} name="Databases" />
                <SkillSidebar topSkills={skills.miscellaneous} name="Tools" />
            </div>
        </section>
    )
}

export default SkillsSection;
