'use client';

import { motion } from 'framer-motion';

import { Icons } from '@/components/icons';
import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { cn } from '@/lib/utils';

const educationData = [
  {
    institution: 'University of Moratuwa',
    location: 'Moratuwa, Sri Lanka',
    degree: 'B.Sc. in Electronic and Telecommunication Engineering',
    cgpa: '3.62/4.00',
    period: 'Feb 2022 – Present',
    description: [],
  },
  {
    institution: 'C.W.W. Kannangara Central College',
    location: 'Mathugama, Sri Lanka',
    degree: 'Advanced Level - Physical Science (3As), Ordinary Level (9As)',
    zScore: '2.1001',
    period: '2007 – 2020',
    description: [],
  },
  {
    institution: 'ESOFT Metro Campus',
    location: 'Kalutara, Sri Lanka',
    degree: 'Diploma in English, Diploma in Information Technology',
    achievements: 'Dual Medalist',
    period: '2021',
    description: [],
  },
];

export function Education() {
  const { ref: sectionRef } = useSectionInView('Education');

  return (
    <section
      ref={sectionRef}
      id="education"
      className="my-10 scroll-mt-28 md:mb-20"
    >
      <SectionHeading
        heading="Education"
        content="My academic background and achievements."
      />
      <div className="relative max-w-screen-md">
        {educationData.map(
          (
            {
              institution,
              location,
              degree,
              cgpa,
              zScore,
              achievements,
              period,
              description,
            },
            index
          ) => (
            <div
              key={institution}
              className="relative pl-8 [&:not(:last-child)]:pb-10"
            >
              <div className="bg-muted absolute left-0 top-2.5 h-full w-[2px] first:top-6 first:h-[calc(100%-24px)]">
                <div className="border-primary bg-background absolute left-[-5px] top-0 size-3 rounded-full border-2" />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.175 * index }}
                viewport={{ once: true }}
                className={cn('space-y-3 opacity-0')}
              >
                <div className="flex items-center gap-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-full border">
                    <Icons.building className="size-5" />
                  </div>
                  <span className="text-lg font-semibold">{institution}</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium">{degree}</h3>
                  <p className="text-sm">{location}</p>
                  {cgpa && <p className="text-sm">CGPA: {cgpa}</p>}
                  {zScore && <p className="text-sm">Z-Score: {zScore}</p>}
                  {achievements && <p className="text-sm">{achievements}</p>}
                  <div className="mt-1 flex items-center gap-2 text-sm">
                    <Icons.calendar className="size-4" />
                    <span>{period}</span>
                  </div>
                </div>
                {description && description.length > 0 && (
                  <ul className="text-muted-foreground list-disc pl-5">
                    {description.map((line, idx) => (
                      <li key={idx}>{line}</li>
                    ))}
                  </ul>
                )}
              </motion.div>
            </div>
          )
        )}
      </div>
    </section>
  );
}
