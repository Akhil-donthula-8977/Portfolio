import Image from "next/image";
import { useContext } from "react";
import CustomTypeWriter from "@/components/Home/CustomTypeWriter";
import { DockDemo } from "@/components/DockDemo";
import { RevealFromRight } from "@/components/Framer/RevealFromRight";
import Img from "@/public/b7f57ec6-1965-4935-bc22-10326e1e817d.jpg";
import LeftSection from "@/components/Home/PageComponents/LeftSection";
import { SkillIconCloud } from "@/components/CustomUI/SkillIconCloud";
import { FaReact, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import SkillSidebar from "@/components/CustomUI/SkillSidebar";
import { skills } from "@/constants/constants";
import { ProjectCard } from "@/components/CustomUI/ProjectCard";
import { SkillsTab } from "@/components/CustomUI/SkillsTab";
import WorkExperience from "@/components/Home/PageComponents/WorkExperience";
import SkillsSection from "@/components/Home/PageComponents/SkillsSection";
import Projects from "@/components/Home/PageComponents/Projects";
import ContactForm from "@/components/Home/PageComponents/ContactFormSection";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <main className="text-white bg-gray-900">
      <Toaster
        toastOptions={{
          className: 'animate-bounce',
        }}
      />
      <nav className="p-4 bg-gray-800 text-center">
        <h2 className="text-2xl font-bold">Welcome to My Portfolio</h2>
      </nav>
      <div className="flex flex-col sm:flex-row items-center justify-center sm:mt-10 relative sm:top-[40px]  h-full   px-6 sm:px-12 py-8">
        <LeftSection />
        {/* Right Section */}
        <div className="sm:w-[30%] shadow-lg shadow-blue-500 flex justify-center items-center">
          <RevealFromRight>
            <Image
              src={Img}
              alt="Profile Picture"
              width={500}
              height={500}
              className="shadow-md shadow-blue-200"
            />
          </RevealFromRight>
        </div>
      </div>

      {/* skills */}
      <SkillsSection></SkillsSection>


      <WorkExperience></WorkExperience>

      <Projects></Projects>

      <ContactForm></ContactForm>
    </main>
  );
}
