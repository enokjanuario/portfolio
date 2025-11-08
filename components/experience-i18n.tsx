"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const experiences = [
    {
      companyKey: "exp.job1.company",
      roleKey: "exp.job1.role",
      periodKey: "exp.job1.period",
      locationKey: "exp.job1.location",
      descKey: "exp.job1.desc",
      highlightKeys: [
        "exp.job1.item1",
        "exp.job1.item2",
        "exp.job1.item3",
        "exp.job1.item4",
        "exp.job1.item5",
      ],
      current: true,
    },
    {
      companyKey: "exp.job2.company",
      roleKey: "exp.job2.role",
      periodKey: "exp.job2.period",
      locationKey: "exp.job2.location",
      descKey: "exp.job2.desc",
      highlightKeys: [
        "exp.job2.item1",
        "exp.job2.item2",
        "exp.job2.item3",
        "exp.job2.item4",
      ],
    },
    {
      companyKey: "exp.job3.company",
      roleKey: "exp.job3.role",
      periodKey: "exp.job3.period",
      locationKey: "exp.job3.location",
      descKey: "exp.job3.desc",
      highlightKeys: [
        "exp.job3.item1",
        "exp.job3.item2",
        "exp.job3.item3",
      ],
    },
    {
      companyKey: "exp.job4.company",
      roleKey: "exp.job4.role",
      periodKey: "exp.job4.period",
      locationKey: "exp.job4.location",
      descKey: "exp.job4.desc",
      highlightKeys: [
        "exp.job4.item1",
        "exp.job4.item2",
        "exp.job4.item3",
      ],
    },
    {
      companyKey: "exp.job5.company",
      roleKey: "exp.job5.role",
      periodKey: "exp.job5.period",
      locationKey: "exp.job5.location",
      descKey: "exp.job5.desc",
      highlightKeys: [
        "exp.job5.item1",
        "exp.job5.item2",
        "exp.job5.item3",
      ],
    },
    {
      companyKey: "exp.job6.company",
      roleKey: "exp.job6.role",
      periodKey: "exp.job6.period",
      locationKey: "exp.job6.location",
      descKey: "exp.job6.desc",
      highlightKeys: [
        "exp.job6.item1",
        "exp.job6.item2",
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
            {t("exp.title")} <span className="gradient-text">{t("exp.titleHighlight")}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("exp.subtitle")}
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
                        {t("exp.current")}
                      </span>
                    )}
                    
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>{t(exp.periodKey)}</span>
                    </div>

                    <h3 className="text-xl font-bold mb-1">{t(exp.roleKey)}</h3>
                    <div className="flex items-center gap-2 text-primary font-semibold mb-3">
                      <Briefcase className="w-4 h-4" />
                      <span>{t(exp.companyKey)}</span>
                    </div>

                    <p className="text-muted-foreground mb-4">{t(exp.descKey)}</p>

                    <ul className="space-y-2">
                      {exp.highlightKeys.map((key, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <span className="text-primary mt-1">▸</span>
                          <span className="text-muted-foreground">{t(key)}</span>
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
            <h3 className="text-xl font-bold mb-2">{t("exp.edu1.title")}</h3>
            <p className="text-primary font-semibold mb-1">{t("exp.edu1.course")}</p>
            <p className="text-sm text-muted-foreground mb-2">{t("exp.edu1.institution")}</p>
          </div>
          <div className="bg-background border border-border rounded-xl p-6">
            <h3 className="text-xl font-bold mb-2">{t("exp.edu2.title")}</h3>
            <p className="text-primary font-semibold mb-1">{t("exp.edu2.course")}</p>
            <p className="text-sm text-muted-foreground">{t("exp.edu2.institution")}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

