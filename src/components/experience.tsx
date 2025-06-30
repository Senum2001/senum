'use client';

import React from 'react';
import { motion } from 'framer-motion';

import { Icons } from '@/components/icons';
import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { cn } from '@/lib/utils';

// Updated experiencesData based on your CV :contentReference[oaicite:3]{index=3}
const experiencesData = [
  {
    company: 'OCTAVE – John Keells Holdings PLC',
    title: 'Machine Learning Engineer Intern',
    period: 'Dec 2024 – June 2025',
    description: [
      'Designed and implemented a custom model drift detection framework, capable of detecting concept drift in large-scale data environments.',
      'Collaborated cross-functionally to deliver project milestones on time, honing strong project management skills.',
      'Developed a document and signature classification system for the GenAI project at Union Assurance.'
    ],
    technologies: [
      'Python', 'PySpark', 'TensorFlow', 'Keras', 'Evidently AI', 'Azure ML'
    ]
  },
  {
    company: 'WIWIS.AI',
    title: 'AI Engineer (Contract, Part-time)',
    period: 'Nov 2024 – Present',
    description: [
      'Designed and deployed a computer vision–based passenger bus management system on an Orange Pi 5 Pro, enabling passenger tracking, real-time monitoring, and route optimization.'
    ],
    technologies: [
      'Python', 'OpenCV', 'Computer Vision', 'Orange Pi 5 Pro', 'TensorFlow'
    ]
  }
];

export const Experience = () => {
  const { ref: sectionRef } = useSectionInView('Experience');

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="my-10 scroll-mt-28 md:mb-20"
    >
      <SectionHeading
        heading="My Experience"
        content="Professional roles and projects I’ve contributed to."
      />
      <div className="relative max-w-screen-md">
        {experiencesData.map(
          ({ company, title, period, description, technologies }) => (
            <div
              key={company}
              className="relative pl-8 [&:not(:last-child)]:pb-10"
            >
              <div className="bg-muted absolute left-0 top-2.5 h-full w-[2px] first:top-6 first:h-[calc(100%-24px)]">
                <div className="border-primary bg-background absolute left-[-5px] top-0 size-3 rounded-full border-2" />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.175 }}
                viewport={{ once: true }}
                className={cn('space-y-3 opacity-0')}
              >
                <div className="flex items-center gap-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-full border">
                    <Icons.building className="size-5" />
                  </div>
                  <span className="text-lg font-semibold">{company}</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium">{title}</h3>
                  <div className="mt-1 flex items-center gap-2 text-sm">
                    <Icons.calendar className="size-4" />
                    <span>{period}</span>
                  </div>
                </div>
                <ul className="list-disc pl-5 text-muted-foreground">
                  {description.map((line, idx) => (
                    <li key={idx}>{line}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border px-3 py-1 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          )
        )}
      </div>
    </section>
  );
};
