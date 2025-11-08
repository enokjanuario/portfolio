"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      company: "Base2 Tecnologia",
      role: "Test Automation Analyst",
      period: "Oct 2023 - Present",
      location: "Belo Horizonte, MG",
      description: "Leading quality automation initiatives for banking applications",
      highlights: [
        "Focal point for Cheque-related demands, implementing automation with Rest Assured",
        "Leading frontend test automation using Selenide",
        "Daily monitoring of regression tests, identifying environment issues and performance improvements",
        "Collaborating with cross-functional teams to implement shift-left testing practices",
      ],
      current: true,
    },
    {
      company: "OPUS Software",
      role: "Quality Assurance Engineer III",
      period: "Jun 2023 - Oct 2023",
      location: "Remote",
      description: "Focused on regulatory demands for Open Finance and Open Insurance",
      highlights: [
        "Planned and executed comprehensive API tests using Postman and Swagger",
        "Created automated test scenarios using Gherkin/BDD framework",
        "Actively participated in planning sessions with development teams",
      ],
    },
    {
      company: "OPUS Software",
      role: "Quality Assurance Engineer II",
      period: "Nov 2022 - Jun 2023",
      location: "Remote",
      description: "Continued work on Open Finance and Open Insurance projects",
      highlights: [
        "Created detailed test reports and documentation",
        "Implemented BDD testing practices with Gherkin syntax",
        "Mentored junior QA engineers on testing best practices",
      ],
    },
    {
      company: "OPUS Software",
      role: "Quality Assurance Engineer I",
      period: "Feb 2022 - Nov 2022",
      location: "Remote",
      description: "Worked on projects for BRK Ambiental and PagBem",
      highlights: [
        "Conducted API, E2E, and mobile testing using Agile methodologies",
        "Maintained test automation framework using Appium",
        "Utilized Jira and Zephyr for test documentation",
      ],
    },
    {
      company: "Synergia",
      role: "Junior Development Analyst",
      period: "Oct 2021 - Jan 2022",
      location: "Belo Horizonte, MG",
      description: "Development for the State of Minas Gerais Procurement Portal",
      highlights: [
        "Developed features for the auction system",
        "Worked with Java, React, Spring, and Hibernate",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-32 bg-secondary/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-4">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A timeline of growth, learning, and impact in quality assurance
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 items-start ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background" />

                {/* Content card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`flex-1 ml-16 md:ml-0 ${
                    index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div className="bg-background border border-border rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    {exp.current && (
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3">
                        Current Role
                      </span>
                    )}
                    
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>

                    <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-primary font-semibold mb-3">
                      <Briefcase className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>

                    <p className="text-muted-foreground mb-4">{exp.description}</p>

                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <span className="text-primary mt-1">▸</span>
                          <span className="text-muted-foreground">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 grid md:grid-cols-2 gap-6"
        >
          <div className="bg-background border border-border rounded-xl p-6">
            <h3 className="text-xl font-bold mb-2">Post-Graduate Specialization</h3>
            <p className="text-primary font-semibold mb-1">Software Quality Management</p>
            <p className="text-sm text-muted-foreground mb-2">Faculdade UniBF • May 2022 - Sep 2022</p>
          </div>
          <div className="bg-background border border-border rounded-xl p-6">
            <h3 className="text-xl font-bold mb-2">BSc Computer Science</h3>
            <p className="text-primary font-semibold mb-1">Federal University of Minas Gerais (UFMG)</p>
            <p className="text-sm text-muted-foreground">2016 - 2021</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

