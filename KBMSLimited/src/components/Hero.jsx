import { useState, useEffect } from "react";
import "../styles/hero.css";

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { image: "/images/hero1.webp", alt: "logistics and transportation services" },
    { image: "/images/hero2.webp", alt: "logistics and transportation services 2" },
    { image: "/images/hero3.webp", alt: "logistics and transportation services 3" }
  ];

  // Auto slide every 6 seconds (optional)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => setCurrentSlide(index);

  return (
    <section id="hero">
         <div className="slider-container">
      {/* Slides */}
      <div
        className="slides-wrapper"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <img src={slide.image} alt={slide.alt} loading="lazy" />
          </div>
        ))}
      </div>

      {/* Semi-transparent overlay text box */}
      <div className="slider-overlay-text">
        Your Trusted Partner in Business, Procurement, HR, E-commerce, Shipping & Logistics Solutions 
      </div>

      {/* Dots */}
      <div className="slider-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${currentSlide === index ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
     {/* Hero About Section */}
      
        <div className="Hero-about-container">
          <div className="">
          <img src="/kbmsblue.png" alt="KBMS Logo" className="herologo" />
            </div>
            <div className="Hero-text-button">
             <p className="Hero-about-text">
                KBMS Limited is a dynamic management and consultancy 
                company committed to providing reliable, professional, 
                and efficient solutions to businesses and individuals.Our Business expertise spans 
                Business Consulting,  HR Consulting, Regulatory and Compliance Support, Office Space Solutions & 
                Property Management,  Financial Management & Due Diligence Services, Concierge Services, Assistance 
                with Navigating Business Regulations and Visa Procurement and E-commerce,  Shipping & Logistics.

                We pride ourselves on delivering personalized services tailored to meet the 
                unique needs of every client — ensuring seamless operations, strategic growth, and
                 exceptional service delivery from start to finish.
              </p>
              <button className="Hero-about-button" 
              onClick={() => {
                        document.getElementById('aboutus').scrollIntoView({ behavior: 'smooth' });
                      }}
              >Learn More</button>
            </div>
         
        </div>
      
    </section>
  );
}

export default Hero;
