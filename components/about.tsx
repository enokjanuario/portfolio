"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, BookOpen, Users, Zap } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const highlights = [
    {
      icon: Zap,
      titleKey: "about.highlight1.title",
      descKey: "about.highlight1.desc",
    },
    {
      icon: Users,
      titleKey: "about.highlight2.title",
      descKey: "about.highlight2.desc",
    },
    {
      icon: Award,
      titleKey: "about.highlight3.title",
      descKey: "about.highlight3.desc",
    },
    {
      icon: BookOpen,
      titleKey: "about.highlight4.title",
      descKey: "about.highlight4.desc",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-4">
            {t("about.title")} <span className="gradient-text">{t("about.titleHighlight")}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("about.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">{t("about.heading")}</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                {t("about.p1")} <span className="text-foreground font-semibold">{t("about.p1Role")}</span> {t("about.p1Company")} <span className="text-primary font-semibold">Zig. The Global Funtech</span>, {t("about.p1Rest")}
              </p>
              <p>
                {t("about.p2")} <span className="text-foreground font-semibold">{t("about.p2Highlight")}</span> {t("about.p2Rest")}
              </p>
              <p>
                {t("about.p3")} <span className="text-foreground font-semibold">{t("about.p3Highlight1")}</span> {t("about.p3To")} <span className="text-foreground font-semibold">{t("about.p3Highlight2")}</span>, {t("about.p3Rest")}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 bg-secondary/50 backdrop-blur-sm rounded-xl border border-border hover:border-primary/50 transition-all"
              >
                <highlight.icon className="w-8 h-8 text-primary mb-3" />
                <h4 className="font-semibold mb-2">{t(highlight.titleKey)}</h4>
                <p className="text-sm text-muted-foreground">{t(highlight.descKey)}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div>
            <div className="text-4xl font-bold text-primary mb-2">4+</div>
            <div className="text-muted-foreground">{t("about.stat1")}</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">{t("about.stat2")}</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">10+</div>
            <div className="text-muted-foreground">{t("about.stat3")}</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">100%</div>
            <div className="text-muted-foreground">{t("about.stat4")}</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

