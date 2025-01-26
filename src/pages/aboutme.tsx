import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Mail, MapPin } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
/* import { Button } from "../components/ui/button"; */
import SocialIcons from "../components/ui/socialicon"
import Button from '@mui/material/Button';
const AboutMe = () => {
  return (
    <div style={{ backgroundColor: "#000000", minHeight: "100vh", padding: "24px" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        {/* Header Section */}
        <header style={{ textAlign: "center", padding: "40px 0" }}>
          <motion.h1
            style={{
              fontSize: "2.98rem",
              fontWeight: "bold",
              color: "#AEAEAC",
            }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Ritesh Sonawane
          </motion.h1>
          <div className="App">

          </div>
          <motion.p
            style={{
              fontSize: "0.8rem",
              color: "#AEAEAC",
              marginTop: "5px",
            }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            SRE | CKA | Kubernetes | Golang | Backend Engineering
          </motion.p>
          <SocialIcons></SocialIcons>

        </header>

        {/* About Section */}
        <section style={{ background: "#000000", borderRadius: "16px", boxShadow: "20 2px 8px rgba(0,0,0,0.1)", padding: "24px", marginBottom: "24px" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: "600", color: "#333", marginBottom: "16px" }}>
            About Me
          </h2>
          <p style={{ color: "#b5b5b5", lineHeight: "1.6" }}>
            Greetings! 👋 I'm Ritesh, a 22-year-old Associate SRE, currently contributing remotely at CloudRaft ⛵. My expertise lies in Kubernetes and Golang, where I focus on driving efficiency and scalability.
            I take great pride in sharing my insights through blogs—feel free to explore them! <p></p>

            Beyond blogging, I curate a POC and Learnings section, showcasing innovative approaches to streamlining distributed systems like Kubernetes. <p></p>
            My current focus is on transforming SRE practices through unified toolsets, advancing toward Platform Engineering. I'm also exploring AI agents and their integration with SRE tools to unlock new possibilities.
            <p></p>
            If you're passionate about this field, currently exploring similar areas, or eager to learn, I’d love to connect and exchange ideas.
          </p>
          <h3 style={{ fontSize: "0.7rem", fontWeight: "1000", color: "#333", marginBottom: "0px", alignItems: "center" }} >Don't forget to <a href="https://www.linkedin.com/in/ritesh-sonawane-794b6a226/">connect!</a></h3>
        </section>

        {/* Experience Section */}
        <section style={{ background: "#000000", borderRadius: "16px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)", padding: "24px", marginBottom: "24px" }}>
          <h2 style={{
            fontSize: "1.75rem",
            fontWeight: "600",
            color: "#333",
            marginBottom: "16px",
            display: "flex",
            alignItems: "center",
            gap: "8px"
          }}>
            <Briefcase style={{ color: "#999" }} size={32} />
            Experience
          </h2>
          <div style={{ display: "flex", gap: "16px", alignItems: "center", marginBottom: "16px" }}>
            <div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "600", color: "#b5b5b5" }}>Associate SRE</h3>
              <p style={{ color: "#666", marginBottom: "8px" }}>CloudRaft (Remote) | April 2024 - Present </p>
              <p style={{ color: "#b5b5b5", lineHeight: "1.6" }}>
                ✦ Worked on Kubernetes, Observability, and Golang. Managed production Kubernetes
                clusters across AWS, Azure, and Bare Metal environments.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={{ textAlign: "center", color: "#666", fontSize: "0.875rem", marginTop: "40px" }}>
          &copy; {new Date().getFullYear()} Ritesh Sonawane. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default AboutMe;
