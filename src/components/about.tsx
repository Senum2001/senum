'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/section-heading';
import { Skills } from '@/components/skills';
import { useSectionInView } from '@/hooks/use-section-in-view';

export const About = () => {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      id="about"
      className="my-10 flex w-full scroll-mt-28 flex-col items-center md:mb-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading heading="About Me" />
      <div className="flex flex-col items-center md:flex-row md:items-start md:space-x-4 -mt-5 max-w-2xl text-center md:text-left leading-7">
        <img
          src="/images/my.jpg"
          alt="Senum Dodangoda"
          className="mb-6 w-40 h-40 rounded-full object-cover md:mb-0"
        />
        <div>
          <p className="mb-4">
            I’m <span className="font-semibold">Senum Dodangoda</span>, based in Kalutara, Sri Lanka.
            I’m passionate about exploring innovations and research in Machine Learning, Deep Learning,
            Computer Vision, Signal Processing, Generative AI, Explainable AI, TinyML, and IoT.
          </p>
          <p className="mb-4">
            I worked as a Machine Learning Engineer Intern at OCTAVE – John Keells Holdings PLC (Dec 2024–June 2025),
            where I designed and implemented a custom model drift detection framework
            capable of identifying concept drift in large-scale data environments. I’m eager to apply my skills in
            Python, PySpark, TensorFlow, and cloud platforms like Azure and AWS to build scalable, production-ready solutions.
          </p>
          <p>
            Beyond ML, I enjoy electronics and IoT projects, leveraging tools like ESP32, Node-RED, and SolidWorks.
            When I’m not coding, you’ll find me playing cricket, swimming, or exploring new technologies.
          </p>
        </div>
      </div>
      <Skills />
    </motion.section>
  );
};
