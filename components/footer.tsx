"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/enokjanuario",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/enokjrocha",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:ejrocha07@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="relative border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold font-space-grotesk mb-4">
              <span className="gradient-text">&lt;Enok Rocha/&gt;</span>
            </h3>
            <p className="text-sm text-muted-foreground">
              {t("footer.brand")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">{t("footer.quickLinks")}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#about" className="hover:text-primary transition-colors">
                  {t("footer.aboutMe")}
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-primary transition-colors">
                  {t("nav.experience")}
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-primary transition-colors">
                  {t("nav.skills")}
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-primary transition-colors">
                  {t("nav.projects")}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  {t("nav.contact")}
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold mb-4">{t("footer.connect")}</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-secondary hover:bg-accent rounded-lg transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              {t("footer.openTo")}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>
            {t("footer.rights")}
          </p>
          <p className="flex items-center gap-2">
            {t("footer.builtWith")}{" "}
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            {" "}{t("footer.using")}
          </p>
        </div>
      </div>
    </footer>
  );
}

