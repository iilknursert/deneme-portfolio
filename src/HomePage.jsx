import React from "react";
import { motion } from "framer-motion";
import "./HomePage.css"; 
import profilePhoto from "./assets/ilknursertphoto.jpg";  // Resmi doğru şekilde içe aktarıyoruz

export default function HomePage() {
  return (
    <div className="home-container">
      <div className="content-wrapper">
        {/* Sol tarafa fotoğraf */}
        <motion.img
          src={profilePhoto}
          alt="İlknur Sert"
          className="profile-photo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        
        {/* Sağ tarafa yazılar */}
        <div className="text-container">
          <motion.h1
            className="name"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            İlknur Sert
          </motion.h1>
          <motion.p
            className="bio"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Bu bir deneme projesidir
          </motion.p>
        </div>
      </div>
    </div>
  );
}
