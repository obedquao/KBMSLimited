import React from "react";
import "../styles/contact.css";
import { MapPin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      {/* LEFT: CONTACT DETAILS */}
      <motion.div
        className="contact-left"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h4 className="contact-subtitle">contact us</h4>
        <h2 className="contact-title">
          Have Questions? <br /> Get in touch!
        </h2>

        <p className="contact-desc">
          Have questions, need support or want to purchase our services?
          <br />
          We're here to help! Reach out to us.
        </p>

        {/* LOCATION */}
        <div className="contact-item contact-location">
          <MapPin className="contact-icon" />
          <a href="https://share.google/Py1Q6NYR0737LNM3F">Adenta - Accra</a>
        </div>

        {/* PHONE NUMBERS */}
        <div className="contact-item ">
          <Phone className="contact-icon" />
          <div className="contact-phone-list">
            <p>+233 55 398 8078</p>
          </div>
        </div>

        {/* EMAIL */}
        <div className="contact-item">
          <Mail className="contact-icon" />
          <a href="mailto:info@kbmslimited.com" className="contact-email">
            info@kbmslimited.com
          </a>
        </div>

        {/* BUTTON */}
        <button
          className="contact-btn"
          onClick={() => (window.location.href = "mailto:info@kbmslimited.com")}
        >
          Get In Touch
        </button>
      </motion.div>

      {/* RIGHT: MAP */}
      <motion.div
        className="contact-map"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.936246791873!2d-0.15531570000000003!3d5.7223237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9d006403afff%3A0x13c05fb2fcddeb7!2sK.Bennito%20Management%20Services%20LTD!5e0!3m2!1sen!2sgh!4v1778918981482!5m2!1sen!2sgh"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.div>
    </section>
  );
}
