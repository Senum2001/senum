"use client"

import { skillsData } from "@/lib/data"
import { SkillIcon } from "@/components/skill-icon"

export function SkillsSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {skillsData.map((skill, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <SkillIcon
                src={skill.icon}
                alt={skill.label}
                className="size-12 hover:scale-110 transition-transform duration-200"
              />
              <span className="text-sm font-medium text-center">{skill.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
