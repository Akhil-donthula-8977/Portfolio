"use client";

import React from "react";
import { ProjectCard } from "@/components/CustomUI/ProjectCard";
import cabshare from "@/public/cabsha.png"
import agri from "@/public/agr_vis.png"
import iot from "@/public/iot_iee.png"
import anirec from "@/public/ani_rec.png"
// Define the project data array
const projectData = [
  {
    title: "Anime Recommendation System",
    description: `
      Implemented a system using scikit-learn, pandas, and seaborn to recommend the top 10 animes from the
      dataset. Utilized cosine similarity for personalized user recommendations.`,
    imageUrl: anirec,
    demoLink: "#",
    repoLink: "#"
  },
  {
    title: "CabShare: Innovative Ride-Sharing Application",
    description: `
      Developed a dynamic cab sharing application using Next.js, MongoDB, Redis, and Socket.io. Integrated Maps API for
      autocomplete, geocoding, and calculating short distances.`,
    imageUrl: cabshare,
    demoLink: "#",
    repoLink: "#"
  },
  {
    title: "IoT-Based Patient Monitoring System",
    description: `
      Developed an IoT-based patient monitoring system using ESP8266 to collect and transmit vital signs to AWS IoT Core via MQTT.
      Built a machine learning model to predict basic diseases from sensor data.`,
    imageUrl: iot,
    demoLink: "#",
    repoLink: "#"
  },
  {
    title: "Agrivision: The Ultimate Farmer’s Helper",
    description: `
      Developing "Agrivision," a project involving two Random Forest regression models, a classification model, and a transfer learning model,
      with a Flask backend for ML deployment.`,
    imageUrl: agri,
    demoLink: "#",
    repoLink: "#"
  },
  
];

// Display the project cards
const ProjectsSection = () => {
  return (
    <div className="border-2 border-slate-500 m-5 mt-28 rounded-2xl" >
      <h2 className="font-bold text-3xl relative top-2 text-center ">Projects</h2>
      <section className="flex justify-center">
        <div className="flex flex-wrap gap-0 sm:gap-10  ">
          {projectData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              demoLink={project.demoLink}
              repoLink={project.repoLink}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectsSection;
