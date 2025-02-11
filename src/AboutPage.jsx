import React from "react";
import { motion } from "framer-motion";
import "./AboutPage.css"; 

const links = [
  { title: "LinkedIn", url: "https://www.linkedin.com/in/ilknur-sert-416b65256/" },
  { title: "GitHub", url: "https://github.com/iilknursert" },
  { title: "E-posta", url: "mailto:iilknursert@gmail.com" }
];

export default function AboutPage() {
  return (
    <div className="about-container">
      <header className="text-center">
        <h1 className="title">Hakkımda</h1>
        <p className="description">
          Ben İlknur Sert, Staj yapıyorum ve bu bir deneme projesidir.
        </p>
      </header>

      {/* KUTULARIN İÇİNDE 3 TANE LİNK */}
      <section className="link-container">
        {links.map((link, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="link-card"
          >
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="link-text"
            >
              {link.title}
            </a>
          </motion.div>
        ))}
      </section>

      {/* CV İndir Butonu - ORTADAKİ KUTUNUN ALTINA */}
      <div className="cv-container">
        <a href="/cv.pdf" download className="cv-button">
          CV İndir
        </a>
      </div>
    </div>
  );
}
