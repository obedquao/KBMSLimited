import { motion } from "framer-motion";
import Lottie from "lottie-react";
import emailanimation from "../lottie/email.json";
import linkedInanimation from "../lottie/linkedin.json";
import "../styles/join.css";

function Join() {
  return (
    <section id="join" className="join-section">

      {/* SECTION TITLE ANIMATION */}
      <motion.h1
        className="join-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Join Us
      </motion.h1>

      {/* SUBTEXT ANIMATION */}
      <motion.p
        className="join-subtext"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
      >
        We’re always on the lookout for passionate, innovative people who want to
        make an impact. <br />
        Though we don’t have any open roles at the moment, you can:
      </motion.p>

      {/* BOXES WRAPPER WITH STAGGER */}
      <motion.div
        className="join-boxes"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.25 },
          },
        }}
      >
        {/* LINKEDIN BOX */}
        <motion.div
          className="join-box"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 160 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Lottie
              animationData={linkedInanimation}
              loop
              autoPlay
              className="join-icon"
            />
          </motion.div>

          <h3>Connect with us on LinkedIn</h3>
          <p>Follow us for company news, culture insights and future job postings.</p>
        </motion.div>

        {/* RESUME BOX */}
        <motion.div
          className="join-box"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 160 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Lottie
              animationData={emailanimation}
              loop
              autoPlay
              className="join-icon"
            />
          </motion.div>

          <h3>Send us your resume</h3>
          <p>Even without a current opening, we’d love to keep your info on file.</p>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Join;
