import React from "react";
import { motion } from "framer-motion";
import "../styles/team.css";

export default function Team() {
  const teamMembers = [
    { name: "Kenneth Dankwa-Smith", role: "Investor", photo: "/images/team/Smith.jpeg" },
    { name: "Redeemer Domie", role: "General Manager", photo: "/images/team/Domie.jpeg" },
    { name: "Mary Darkwah", role: "Legal Partner", photo: "/images/team/Mary Darkwah.jpeg" },
    { name: "Jerry John Mensah", role: "Public Relations Officer", photo: "/images/team/Jerry John Mensah.jpeg" },
    { name: "Joshua Edem Aflakpui", role: "Social Media and Advertising Manager", photo: "/images/team/Joshua Edem Aflakpui.jpeg" },
    { name: "Douglas Asare", role: "Finance Manager", photo: "/images/team/Douglas Asare.jpeg" },
    { name: "Francis Pakyie", role: "PA to the CEO", photo: "/images/team/Francis Pakyie.jpeg" },
    { name: "Paa Kwesi Wallace", role: "Freelance Graphic Designer", photo: "/images/team/Paa Kwesi Wallace.jpeg" },
    { name: "Derrick Karikari", role: "Procurement Officer", photo: "/images/team/Derrick Karikari.jpeg" },
    { name: "David Siaw Frimpong", role: "Head of Operations", photo: "/images/team/David Siaw Frimpong.jpeg" },
    { name: "Cyrus Sarpong", role: "Business Development Manager", photo: "/images/team/Cyrus Sarpong.jpeg" },
    { name: "Joseph Andoh", role: "Accounts Executive", photo: "/images/team/Joseph Andoh.jpeg" },
  ];

  // Fade-in animations that trigger WHEN IN VIEW
  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -30 },
    show: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: i * 0.06, // left → right sequence
      },
    }),
  };

  return (
    <section id="team" className="team-wrapper">
      
      {/* HEADER - Scroll Trigger */}
      <motion.div
        className="team-header"
        variants={headerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h4 className="team-subtitle"
        initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          >Our Team
          </motion.h4>

        <motion.h2 className="team-title"
        initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >Meet our Team
        </motion.h2>

        <motion.h3 className="team-tagline"
        initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >Passionate. Proactive. Expert.
        </motion.h3>
        <motion.p className="team-description"
        initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}>
          We lead with care, our core value and a shared passion for 
          connecting the world.
        </motion.p>
      </motion.div>

      {/* TEAM CARDS - Scroll-triggered, left-to-right fade */}
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <motion.div
            className="team-card"
            key={index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            
          >
            <div className="team-photo">
              <img src={member.photo} alt={member.name} />
            </div>
            <h4 className="team-name">{member.name}</h4>
            <p className="team-role">{member.role}</p>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
