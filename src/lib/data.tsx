import Link from 'next/link';

import { buttonVariants } from '@/components/button';
import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Education',
    hash: '#education',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const projectsData = [
  {
    image: "/images/image-colorization.webp",
    title: "Deep Learning–Based Image Colorization",
    description:
      "Automatically colorizes black-and-white images using a convolutional neural network trained on paired datasets.",
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV"],
    links: {
      github: "https://github.com/Senum2001/ImageColorizer",
      githubApi: "https://api.github.com/repos/Senum2001/ImageColorizer",
    },
  },
  {
    image: "/images/drawboard.webp",
    title: "Drawboard with OpenCV & MediaPipe",
    description: "Interactive drawing app driven by hand-gesture detection using MediaPipe's palm tracking.",
    technologies: ["Python", "OpenCV", "MediaPipe"],
    links: {
      github: "https://github.com/Senum2001/DrawboardUsingOpenCV",
      githubApi: "https://api.github.com/repos/Senum2001/DrawboardUsingOpenCV",
    },
  },
  {
    image: "/images/face-attendance.webp",
    title: "Face Recognition Attendance System",
    description: "Logs attendance by detecting and recognizing faces with OpenCV and scikit-learn classifiers.",
    technologies: ["Python", "OpenCV", "scikit-learn"],
    links: {
      github: "https://github.com/Senum2001/FR_Attendance_System",
      githubApi: "https://api.github.com/repos/Senum2001/FR_Attendance_System",
    },
  },
  {
    image: "/images/bus-management.webp",
    title: "CV-Based Passenger Bus Management",
    description: "Real-time passenger tracking, monitoring, and route optimization on an Orange Pi 5 Pro.",
    technologies: ["Python", "OpenCV", "TensorFlow", "Orange Pi"],
    links: {
      github: "",
      githubApi: "",
    },
  },
  {
    image: "/images/bus-drowsiness.webp",
    title: "Bus Driver Drowsiness Detection",
    description: "Alerts in real time when driver drowsiness patterns are detected via computer vision.",
    technologies: ["Python", "OpenCV", "TensorFlow"],
    links: {
      github: "",
      githubApi: "",
    },
  },
  {
    image: "/images/atms.webp",
    title: "Automated Traffic Management System (ATMS)",
    description: "Uses CV and ML to monitor traffic flows and optimize signal timings in real time.",
    technologies: ["Python", "OpenCV", "Pandas", "scikit-learn"],
    links: {
      github: "https://github.com/Senum2001/Automated-Traffic-Management-System",
      githubApi: "https://api.github.com/repos/Senum2001/Automated-Traffic-Management-System",
    },
  },
  {
    image: "/images/battery-management.webp",
    title: "Expandable Battery Management System",
    description: "IoT-based Li-ion cell BMS with master–slave architecture and protective features.",
    technologies: ["C", "Python", "ESP32", "MQTT"],
    links: {
      github: "https://github.com/Senum2001/BMS_EDR_project",
      githubApi: "https://api.github.com/repos/Senum2001/BMS_EDR_project",
    },
  },
  {
    image: "/images/bms-webapp.webp",
    title: "BMS Web App (React)",
    description: "Frontend dashboard for the IoT-based Battery Management System, built in React.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    links: {
      github: "https://github.com/Senum2001/BMS_EDR_project",
      githubApi: "https://api.github.com/repos/Senum2001/BMS_EDR_project",
    },
  },
  {
    image: "/images/eye-equalization.webp",
    title: "Eye Diagrams & Equalization Analysis",
    description: "MATLAB analysis of PAM signaling and design of a zero-forcing equalizer for multipath channels.",
    technologies: ["MATLAB"],
    links: {
      github: "https://github.com/Senum2001/Analysis_of_eye_diagrams",
      githubApi: "https://api.github.com/repos/Senum2001/Analysis_of_eye_diagrams",
    },
  },
  {
    image: "/images/medibox.webp",
    title: "MediBox (ESP32 & Node-RED)",
    description: "IoT medication management app using ESP32 microcontroller and Node-RED flows.",
    technologies: ["ESP32", "Node-RED", "MQTT"],
    links: {
      github: "https://github.com/Senum2001/MediBox",
      githubApi: "https://api.github.com/repos/Senum2001/MediBox",
    },
  },
  {
    image: "/images/robotics-challenge.webp",
    title: "Sri Lankan Robotics Challenge",
    description: "Designed an autonomous robot for the national challenge (Mar–Apr 2024).",
    technologies: ["C", "STM32", "ROS"],
    links: {
      github: "https://github.com/SahanDissanayaka/Robot-Design-for-SLRC",
      githubApi: "https://api.github.com/repos/SahanDissanayaka/Robot-Design-for-SLRC",
    },
  },
  {
    image: "/images/micromouse.webp",
    title: "Micromouse Maze Solver",
    description: "STM32-powered micromouse that navigates and solves a maze autonomously.",
    technologies: ["C", "STM32", "Algorithms"],
    links: {
      github: "https://github.com/SahanDissanayaka/Micro-Mouse-Design",
      githubApi: "https://api.github.com/repos/SahanDissanayaka/Micro-Mouse-Design",
    },
  },
  {
    image: "/images/power-supply.webp",
    title: "100W Linear Power Supply",
    description: "Analog lab project: design and build of a robust 100W linear PSU for electronics.",
    technologies: ["Multisim", "LTspice"],
    links: {
      github: "https://github.com/Senum2001/EN2091_Laboratory_Practice_and_Projects",
      githubApi: "https://api.github.com/repos/Senum2001/EN2091_Laboratory_Practice_and_Projects",
    },
  },
  {
    image: "/images/robot-design.webp",
    title: "Robot Design & Competition",
    description: "Competition robot for line-following and object interaction tasks.",
    technologies: ["SolidWorks", "C"],
    links: {
      github: "https://github.com/SahanDissanayaka/Robot-Design-for-EN2553-Module-Competition",
      githubApi: "https://api.github.com/repos/SahanDissanayaka/Robot-Design-for-EN2553-Module-Competition",
    },
  },
  {
    image: "/images/trashmonitor.webp",
    title: "TrashMonitor Engineering Project",
    description: "Sensor-based system for monitoring and managing waste levels in bins.",
    technologies: ["Arduino", "C++"],
    links: {
      github: "https://github.com/LahiruCooray/TrashMonitor",
      githubApi: "https://api.github.com/repos/LahiruCooray/TrashMonitor",
    },
  },
] as const

export const experiencesData = [
  {
    company: 'OCTAVE – John Keells Holdings PLC',
    title: 'Machine Learning Engineer Intern',
    period: 'Dec 2024 – Present',
    description: [
      'Designed and implemented a custom model drift detection framework, capable of detecting concept drift in large-scale data environments.',
      'Collaborated cross-functionally to deliver project milestones on time, honing strong project management skills.',
      'Developed a document and signature classification system for the GenAI project at Union Assurance.',
    ],
    technologies: [
      'Python',
      'PySpark',
      'TensorFlow',
      'Keras',
      'Evidently AI',
      'Azure ML',
    ],
  },
  {
    company: 'WIWIS.AI',
    title: 'AI Engineer (Contract, Part-time)',
    period: 'Nov 2024 – Present',
    description: [
      'Designed and deployed a computer vision–based passenger bus management system on an Orange Pi 5 Pro, enabling passenger tracking, real-time monitoring, and route optimization.',
    ],
    technologies: [
      'Python',
      'OpenCV',
      'Computer Vision',
      'Orange Pi 5 Pro',
      'TensorFlow',
    ],
  },
] as const;


export const skillsData = [
  {
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/python.svg",
    label: "Python",
  },
  {
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/tensorflow.svg",
    label: "TensorFlow",
  },
  {
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/keras.svg",
    label: "Keras",
  },
  {
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/apachespark.svg",
    label: "PySpark",
  },
  {
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/databricks.svg",
    label: "Evidently AI",
  },
  {
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/microsoftazure.svg",
    label: "Azure ML",
  },
  {
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/opencv.svg",
    label: "OpenCV",
  },
  {
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/scikitlearn.svg",
    label: "scikit-learn",
  },
  {
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/cplusplus.svg",
    label: "C/C++",
  },
  {
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/espressif.svg",
    label: "ESP32",
  },
  {
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/mqtt.svg",
    label: "MQTT",
  },
  {
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/react.svg",
    label: "React",
  },
  {
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/typescript.svg",
    label: "TypeScript",
  },
  {
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/tailwindcss.svg",
    label: "Tailwind CSS",
  },
  {
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/nodered.svg",
    label: "Node-RED",
  },
  {
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/dassaultsystemes.svg",
    label: "SolidWorks",
  },
  {
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/arduino.svg",
    label: "Arduino",
  },
] as const
