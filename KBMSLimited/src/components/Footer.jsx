import React from "react";
import "../styles/footer.css";
import { MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <>
      {/* TOP GIF / IMAGE */}
      <div className="footer-hero">
        <video src="/images/footer.mp4" autoPlay loop muted />
      </div>

      <footer className="footer">
        {/* MAIN FOOTER */}
        <div className="footer-main">
          {/* CENTER LOGO */}
          <div className="footer-logo">
            <img src="/logo.png" alt="KBMS Logo" />
          </div>

          {/* FOOTER CONTENT GRID */}
          <div className="footer-grid">
            {/* CONTACT SECTION */}
            <div className="footer-contact">
              <h4>Contact</h4>

              <div className="footer-item">
                <Phone size={18} />
                <span>055 398 8078</span>
              </div>

              <div className="footer-item">
                <MapPin size={18} />
                <span>Adenta</span>
              </div>

              <a
                href="https://maps.app.goo.gl/jQDYvWM2AexTYFvs5"
                className="footer-map-btn"
              >
                Google maps →
              </a>
            </div>

            {/* NAVIGATION */}
            <div className="footer-nav">
              <h4>Navigation</h4>
              <a href="#">Home</a>
              <a href="#">About Us</a>
              <a href="#">Product</a>
              <a href="#">Why Choose</a>
              <a href="#">Contact</a>
            </div>

            {/* SOCIAL SECTION */}
            <div className="footer-socials">
              <h4>Follow Our socials</h4>

              <div className="social-icons">
                <a href="https://www.tiktok.com/@kbms_limited">
                  <img src="/icons/tiktok.png" alt="tiktok" />
                </a>
                <a href="https://m.facebook.com/kbmslimited/">
                  <img src="/icons/facebook.png" alt="facebook" />
                </a>
                <a href="https://www.instagram.com/kbms_limited/">
                  <img src="/icons/instagram.png" alt="instagram" />
                </a>
                <a href="https://wa.link/oc34li">
                  <img src="/icons/whatsapp.png" alt="whatsapp" />
                </a>
                <a href="https://x.com/kbms_limited">
                  <img src="/icons/twitter.png" alt="x" />
                </a>
                <a href="https://www.linkedin.com/company/kbms-limited/">
                  <img src="/icons/linkedin.png" alt="linkedin" />
                </a>
              </div>
            </div>
          </div>

          <hr className="footer-divider" />

          {/* COPYRIGHT */}
          <p className="footer-copy">
            KBMS Limited. © 2025. All Rights Reserved.{" "}
            <a href="#">Privacy Policy</a>
          </p>
        </div>
      </footer>
    </>
  );
}
