"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n";

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const projects = [
    {
      title: "Professional Portfolio",
      description: "Modern, responsive portfolio website built with Next.js, React, TypeScript, and Framer Motion. Features dark/light theme, smooth animations, and optimized performance.",
      image: "https://via.placeholder.com/600x400/3b82f6/ffffff?text=Portfolio+Website",
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/enokjanuario/portfolio",
      demo: "https://portfolio-beta-one-18.vercel.app/",
    },
    {
      title: "WebdriverIO Automation Exercise",
      description: "Comprehensive web automation testing framework using WebdriverIO for the Automation Exercise website. Implements Page Object Model and BDD patterns.",
      image: "https://via.placeholder.com/600x400/8b5cf6/ffffff?text=WebdriverIO+Tests",
      tags: ["WebdriverIO", "JavaScript", "BDD", "Page Object Model", "Automation"],
      github: "https://github.com/enokjanuario/qa.automationexercise-web.webdriverio",
      demo: null,
    },
    {
      title: "Mantis Bug Tracker Automation",
      description: "Selenium-based test automation suite for Mantis Bug Tracker. Includes comprehensive test cases for bug reporting, tracking, and management workflows.",
      image: "https://via.placeholder.com/600x400/06b6d4/ffffff?text=Mantis+Automation",
      tags: ["Selenium", "Java", "TestNG", "Maven", "CI/CD"],
      github: "https://github.com/enokjanuario/mantisTest",
      demo: null,
    },
    {
      title: "ReqRes API Testing",
      description: "Automated REST API testing suite for ReqRes endpoints. Validates authentication, CRUD operations, and error handling with comprehensive assertions.",
      image: "https://via.placeholder.com/600x400/10b981/ffffff?text=API+Testing",
      tags: ["Rest Assured", "Java", "API Testing", "JSON", "Postman"],
      github: "https://github.com/enokjanuario/ReqRes",
      demo: null,
    },
    {
      title: "BDD with CucumberJS",
      description: "Behavior-Driven Development project showcasing CucumberJS implementation with Gherkin syntax. Includes feature files and step definitions for E2E scenarios.",
      image: "https://via.placeholder.com/600x400/f59e0b/ffffff?text=BDD+Framework",
      tags: ["CucumberJS", "Gherkin", "BDD", "JavaScript", "Node.js"],
      github: "https://github.com/enokjanuario/qa.bdd-cucumberjs.javascript",
      demo: null,
    },
    {
      title: "PactumJS API Testing",
      description: "Modern API test automation framework using PactumJS for the Automation Exercise API. Implements contract testing and data-driven approaches.",
      image: "https://via.placeholder.com/600x400/ec4899/ffffff?text=PactumJS+Tests",
      tags: ["PactumJS", "JavaScript", "API Testing", "Contract Testing"],
      github: "https://github.com/enokjanuario/qa.automationexercise-api.pactumjs",
      demo: null,
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 bg-secondary/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-4">
            {t("projects.title")} <span className="gradient-text">{t("projects.titleHighlight")}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("projects.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-background border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-secondary">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-secondary text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </motion.a>
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Demo</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            {t("projects.cta")}
          </p>
          <motion.a
            href="https://github.com/enokjanuario"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            <Github className="w-5 h-5" />
            <span>{t("projects.viewGithub")}</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

