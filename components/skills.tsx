"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  TestTube2, 
  Code2, 
  GitBranch, 
  Database,
  Smartphone,
  Cloud,
  Terminal,
  Workflow
} from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const skillCategories = [
    {
      titleKey: "skills.cat1",
      icon: TestTube2,
      color: "text-blue-500",
      skills: [
        "Selenium WebDriver",
        "Selenide",
        "WebdriverIO",
        "Appium",
        "Rest Assured",
        "Cypress",
        "Robot Framework",
      ],
    },
    {
      titleKey: "skills.cat2",
      icon: Code2,
      color: "text-green-500",
      skills: [
        "Java",
        "JavaScript/TypeScript",
        "Python",
        "Gherkin",
      ],
    },
    {
      titleKey: "skills.cat3",
      icon: Database,
      color: "text-purple-500",
      skills: [
        "Postman",
        "Swagger/OpenAPI",
        "Rest Assured",
        "PactumJS",
        "SoapUI",
      ],
    },
    {
      titleKey: "skills.cat4",
      icon: Workflow,
      color: "text-orange-500",
      skills: [
        "Cucumber",
        "Gherkin",
        "JUnit",
        "TestNG",
        "Mocha",
        "Jest",
      ],
    },
    {
      titleKey: "skills.cat5",
      icon: Smartphone,
      color: "text-pink-500",
      skills: [
        "Appium",
        "Android Studio",
        "Xcode",
        "Mobile Automation",
      ],
    },
    {
      titleKey: "skills.cat6",
      icon: GitBranch,
      color: "text-red-500",
      skills: [
        "Jenkins",
        "GitLab CI",
        "GitHub Actions",
        "Docker",
        "Git",
      ],
    },
    {
      titleKey: "skills.cat7",
      icon: Cloud,
      color: "text-cyan-500",
      skills: [
        "Jira",
        "Zephyr",
        "TestRail",
        "Azure DevOps",
        "Confluence",
      ],
    },
    {
      titleKey: "skills.cat8",
      icon: Terminal,
      color: "text-yellow-500",
      skills: [
        "Agile/Scrum",
        "Kanban",
        "Shift-Left Testing",
        "TDD/BDD",
      ],
    },
  ];

  const certifications = [
    "Testes Automáticos - Automation Testing",
    "Manipulando o D.O.M. com Javascript",
    "Automação de testes de API com Postman",
    "Fundamentos e prática do teste de software",
    "Posicionando elementos com Flexbox em CSS",
  ];

  return (
    <section id="skills" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-4">
            {t("skills.title")} <span className="gradient-text">{t("skills.titleHighlight")}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("skills.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-background border border-border rounded-xl p-6 hover:border-primary/50 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <category.icon className={`w-6 h-6 ${category.color}`} />
                <h3 className="font-bold">{t(category.titleKey)}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-secondary text-sm rounded-full hover:bg-accent transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-secondary/30 border border-border rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">
            {t("skills.cert.title")}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="flex items-start gap-3 p-4 bg-background rounded-lg"
              >
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-sm">{cert}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Language Proficiency */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12 grid md:grid-cols-2 gap-6"
        >
          <div className="bg-background border border-border rounded-xl p-6">
            <h4 className="font-bold mb-4">{t("skills.lang.english")}</h4>
            <div className="w-full bg-secondary rounded-full h-3">
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: "80%" } : {}}
                transition={{ duration: 1, delay: 1.2 }}
                className="bg-primary h-full rounded-full"
              />
            </div>
            <p className="text-sm text-muted-foreground mt-2">{t("skills.lang.englishLevel")}</p>
          </div>
          <div className="bg-background border border-border rounded-xl p-6">
            <h4 className="font-bold mb-4">{t("skills.lang.portuguese")}</h4>
            <div className="w-full bg-secondary rounded-full h-3">
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: "100%" } : {}}
                transition={{ duration: 1, delay: 1.3 }}
                className="bg-primary h-full rounded-full"
              />
            </div>
            <p className="text-sm text-muted-foreground mt-2">{t("skills.lang.portugueseLevel")}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

