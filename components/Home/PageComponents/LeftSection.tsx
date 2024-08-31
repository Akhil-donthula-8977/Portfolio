import React from 'react';
import CustomTypeWriter from '../CustomTypeWriter';
import { DockDemo } from '@/components/DockDemo';
import { Reveal } from '@/components/Framer/Reveal';
import { RevealFromLeft } from '@/components/Framer/RevealFromLeft';
const LeftSection = () => {
  const words = ["developer", "problem solver", "Pirate King"];

  return (
    <div className="  sm:w-[50%] flex flex-col sm:items-start items-center gap-[2px] text-center justify-center sm:text-left mb-8  sm:mb-0">
      <Reveal>
        <h1 className="text-[40px] sm:text-[60px] font-bold">
          Hi! I am <span className="text-orange-600">Akhil Donthula</span>
        </h1>
      </Reveal>
      <Reveal>
        <div className="text-2xl  sm:text-3xl mt-4">
          I am a <span className="text-red-500"><CustomTypeWriter words={words} /></span>
        </div>
      </Reveal>
      <Reveal>
        <p className="mt-6 text-lg text-start sm:text-none leading-relaxed max-w-[80%] mx-auto sm:mx-0">
          A passionate 4th-year graduate from Vellore Institute of Technology, developer, and problem solver with expertise in the MERN stack, Next.js, AWS, and both SQL and NoSQL databases. Experienced in building scalable and efficient web applications, integrating cloud services, and optimizing backend processes. Adept at delivering full-stack solutions with a focus on performance, security, and seamless user experiences. Strong ability to work collaboratively in agile environments, with a deep understanding of modern development practices and tools.
        </p>
      </Reveal>
      <div className='flex  w-full'>
      <RevealFromLeft>
        <DockDemo></DockDemo>
      </RevealFromLeft>
      </div>
    </div>
  );
};

export default LeftSection;
