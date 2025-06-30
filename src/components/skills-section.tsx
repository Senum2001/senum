'use client';

import { SkillIcon } from '@/components/skill-icon';
import { skillsData } from '@/lib/data';

export function SkillsSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold">Skills</h2>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6">
          {skillsData.map((skill, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <SkillIcon
                src={skill.icon}
                alt={skill.label}
                className="size-12 transition-transform duration-200 hover:scale-110"
              />
              <span className="text-center text-sm font-medium">
                {skill.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
