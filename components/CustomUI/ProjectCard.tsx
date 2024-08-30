"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { StaticImageData } from "next/image";
// Define the ProjectProps interface
interface ProjectProps {
  title: string;
  description: string;
  imageUrl: StaticImageData;
  demoLink: string;
  repoLink: string;
}

// Update the component to adapt height and width, ensuring buttons are inside
export function ProjectCard({
  title,
  description,
  imageUrl,
  demoLink,
  repoLink
}: ProjectProps) {
  return (
    <CardContainer className="inter-var p-2 ">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] rounded-xl p-4 border flex flex-col w-[20rem] h-full"> {/* Adjusted width and height */}
        <CardItem
          translateZ="50"
          className="text-lg font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm mt-2 dark:text-neutral-300"
        >
          {description}
        </CardItem>
        <CardItem
          translateZ="100"
          rotateX={20}
          rotateZ={-10}
          className="w-full mt-4"
        >
          <Image
            src={imageUrl}
            height="150"
            width="150"
            className="w-full h-auto object-cover rounded-xl group-hover/card:shadow-xl"
            alt="Project thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-4">
          <CardItem
            translateZ={20}
            as="a"
            href={demoLink}
            className="px-4 py-2 rounded-xl text-xs font-normal  dark:text-white bg-gray-600 hover:bg-gray-700 dark:hover:bg-gray-800 transition"
          >
            Demo →
          </CardItem>
        
          <CardItem
            translateZ={20}
            as="a"
            href={repoLink}
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold hover:bg-gray-800 dark:hover:bg-gray-200 transition"
          >
            Repo
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
