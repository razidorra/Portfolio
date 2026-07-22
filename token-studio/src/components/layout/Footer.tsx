import { Code2, FileDown, Link, Mail } from "lucide-react";
import type { ComponentType } from "react";
import type { ContactLink } from "../../data/portfolio";

interface FooterProps {
  contactLinks: ContactLink[];
  coreSkills: string[];
}

const icons: Record<ContactLink["icon"], ComponentType<{ "aria-hidden": true; size: number; strokeWidth: number }>> = {
  mail: Mail,
  link: Link,
  code: Code2,
  document: FileDown,
};

export default function Footer({ contactLinks, coreSkills }: FooterProps) {
  return (
    <footer className="site-footer">
      <section className="footer-connect" id="connect" aria-labelledby="contact-heading">
        <div className="footer-connect__inner">
          <div className="footer-skills">
            <h2>Core Skills</h2>
            <p>
              The tools and practices I use to turn ideas into clear,
              maintainable web experiences.
            </p>
            <ul aria-label="Core skills">
              {coreSkills.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
          </div>

          <div className="footer-card">
            <h2 id="contact-heading">Let&apos;s Connect</h2>
            <ul aria-label="Contact links">
              {contactLinks.map((contact) => {
                const Icon = icons[contact.icon];
                return (
                  <li key={contact.href}>
                    <a
                      href={contact.href}
                      target={contact.external ? "_blank" : undefined}
                      rel={contact.external ? "noopener noreferrer" : undefined}
                      download={contact.download || undefined}
                    >
                      <Icon aria-hidden={true} size={22} strokeWidth={2.2} />
                      <span>{contact.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      <div className="footer-bottom">
        <strong>Razieh Dorrazaei</strong>
        <p>Building the web, one thoughtful interface at a time.</p>
        <small>Copyright © {new Date().getFullYear()} – All rights reserved</small>
      </div>
    </footer>
  );
}
