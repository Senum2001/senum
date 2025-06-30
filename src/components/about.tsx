'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

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
      <div className="-mt-5 flex max-w-2xl flex-col items-center text-center leading-7 md:flex-row md:items-start md:space-x-4 md:text-left">
        <Image
          src="/images/my.jpg"
          alt="Senum Dodangoda"
          width={160}
          height={160}
          className="mb-6 rounded-full object-cover md:mb-0"
          priority
        />
        <div>
          <p className="mb-4">
            I’m <span className="font-semibold">Senum Dodangoda</span>, based in
            Kalutara, Sri Lanka. I’m passionate about exploring innovations and
            research in Machine Learning, Deep Learning, Computer Vision, Signal
            Processing, Generative AI, Explainable AI, TinyML, and IoT.
          </p>
          <p className="mb-4">
            I worked as a Machine Learning Engineer Intern at OCTAVE – John
            Keells Holdings PLC (Dec 2024–June 2025), where I designed and
            implemented a custom model drift detection framework capable of
            identifying concept drift in large-scale data environments. I’m
            eager to apply my skills in Python, PySpark, TensorFlow, and cloud
            platforms like Azure and AWS to build scalable, production-ready
            solutions.
          </p>
          <p>
            Beyond ML, I enjoy electronics and IoT projects, leveraging tools
            like ESP32, Node-RED, and SolidWorks. When I’m not coding, you’ll
            find me playing cricket, swimming, or exploring new technologies.
          </p>
        </div>
      </div>
      <Skills />
    </motion.section>
  );
};
