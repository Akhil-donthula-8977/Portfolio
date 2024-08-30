export const skills = {
    languages: [
      { name: "typescript", proficiency: 80 },
      { name: "javascript", proficiency: 90 },
      { name: "java", proficiency: 75 },
      { name: "python", proficiency: 70 },
      { name: "embedded C 8051", proficiency: 60 },
      { name: "c++", proficiency: 65 },
      { name: "html", proficiency: 85 },
      { name: "css", proficiency: 80 },
      { name: "sql", proficiency: 70 },
    ],
    frameworks: [
      { name: "react.js", proficiency: 85 },
      { name: "react-native", proficiency: 80 },
      { name: "next.js", proficiency: 75 },
      { name: "express.js", proficiency: 70 },
      { name: "flask", proficiency: 65 },
      { name: "tailwind css", proficiency: 80 },
      { name: "scikit-learn", proficiency: 60 },
      { name: "tensorflow", proficiency: 55 },
    ],
    databases: [
      { name: "mongodb", proficiency: 70 },
      { name: "mysql", proficiency: 75 },
      { name: "postgresql", proficiency: 70 },
      { name: "redis", proficiency: 60 },
    ],
    miscellaneous: [
      { name: "git/github", proficiency: 85 },
      { name: "playwright automated testing", proficiency: 65 },
      { name: "aws", proficiency: 60 },
      { name: "docker", proficiency: 70 }
    ]
  };

  const projectData = [
    {
      title: "Anime Recommendation System",
      description: `
        Implemented a system using scikit-learn, pandas, and seaborn to recommend the top 10 animes from the
        dataset. Utilized cosine similarity for personalized user recommendations.`,
      technologies: ["Scikit-learn", "Pandas", "NumPy"],
      year: "2022-23",
      imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      demoLink: "#",
      repoLink: "#"
    },
    {
      title: "CabShare: Innovative Ride-Sharing Application",
      description: `
        Developed a dynamic cab sharing application using Next.js, MongoDB, Redis, and Socket.io.
        Integrated Maps API for autocomplete, geocoding, and calculating short distances.
        Enabled real-time cab request and matching within a 5 km radius using geo-spatial queries.
        Implemented a chat feature for users upon request acceptance, enhancing communication and user experience.`,
      technologies: ["Typescript", "Next.js", "Socket.IO", "MongoDB", "Next-AUTH", "Redis", "shadcn UI"],
      year: "2024",
      imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      demoLink: "#",
      repoLink: "#"
    },
    {
      title: "IoT-Based Patient Monitoring System Integrated with AWS",
      description: `
        Developed an IoT-based patient monitoring system using ESP8266 to collect and transmit vital signs (blood
        pressure, temperature, heart rate) to AWS IoT Core via MQTT. Built a machine learning model to predict
        basic diseases from sensor data. Our article has been successfully published in IEEE, and I was the primary author.`,
      technologies: ["AWS IoT Core", "DynamoDB", "AWS SNS", "ESP8266", "Sensors", "Scikit-Learn", "Node.js"],
      year: "2023-24",
      imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      demoLink: "#",
      repoLink: "#"
    },
    {
      title: "Agrivision: The Ultimate Farmer’s Helper",
      description: `
        Developing "Agrivision," a project involving two Random Forest regression models, a classification model, and
        a transfer learning model, with a Flask backend for ML deployment.`,
      technologies: ["Next.Js", "Prisma", "PostgreSQL", "Scikit-learn", "Flask", "Stripe payment gateway", "Shadcn UI"],
      year: "Ongoing",
      imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      demoLink: "#",
      repoLink: "#"
    }
  ];
  
  