import React, { useState } from 'react';
import '../styles/services.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ServicesPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const introText =
    'We offer a wide range of specialized services designed to support your operations, streamline your processes, and help you achieve your goals effortlessly.';

  const services = [
    {
      id: 1,
      title: 'Business Consulting',
      image: '/images/services/business.jpg',
      description:
        'We provide strategic advisory, business development support, process optimization, and guidance for startups and established companies. Our goal is to help you build strong foundations and scale with confidence.',
    },
    {
      id: 2,
      title: 'HR Consulting',
      image: '/images/services/hr.webp',
      description:
        'Our HR experts manage recruitment, staffing, employee documentation, HR audits, workforce planning, and talent management. We ensure your HR processes are professional, compliant, and efficient.',
    },
    {
      id: 3,
      title: 'Legal Services',
      image: '/images/services/legal.webp',
      description:
        'From business registration to contract preparation, due diligence, and compliance support — we help you navigate corporate legal requirements with ease.',
    },
    {
      id: 4,
      title: 'Office Space Solutions & Property Management',
      image: '/images/services/property.webp',
      description:
        'We secure and manage office spaces, oversee facility operations, and ensure your work environment is conducive, safe, and productive.',
    },
    {
      id: 5,
      title: 'Financial Management & Due Diligence Services',
      image: '/images/services/finance.webp',
      description:
        'We provide financial documentation support, bookkeeping, due diligence, and financial oversight to help businesses maintain accurate and compliant financial records.',
    },
    {
      id: 6,
      title: 'Concierge Services',
      image: '/images/services/concierge.webp',
      description:
        'Our concierge services include procurement, travel support, lifestyle assistance, personal shopping, and flexible errand services for busy individuals and companies.',
    },
    {
      id: 7,
      title: 'Assistance with Business Regulations & Visa Procurement',
      image: '/images/services/visa.webp',
      description:
        'We guide clients through visa applications, document preparation, and immigration support for both individuals and corporate staff.',
    },
    {
      id: 8,
      title: 'E-commerce, Shipping & Logistics',
      image: '/images/services/logistics.webp',
      description:
        'From sourcing goods internationally (including Dubai & China), to shipping, customs, warehousing, and delivery — we handle end-to-end logistics efficiently and professionally.',
    },
  ];

  const getItemsPerView = () => {
  if (window.innerWidth <= 480) return 1;
  if (window.innerWidth <= 768) return 2;
  if (window.innerWidth <= 1200) return 3;
  return 4;
};

const [itemsPerView, setItemsPerView] = useState(getItemsPerView());

  const maxIndex = services.length - itemsPerView;

  const handleNext = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const visibleServices = services.slice(currentIndex, currentIndex + itemsPerView);
  React.useEffect(() => {
  const handleResize = () => {
    setItemsPerView(getItemsPerView());
    setCurrentIndex(0); // reset safely
  };

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

const [touchStartX, setTouchStartX] = useState(null);

const handleTouchStart = (e) => {
  setTouchStartX(e.touches[0].clientX);
};

const handleTouchEnd = (e) => {
  if (touchStartX === null) return;

  const touchEndX = e.changedTouches[0].clientX;
  const diff = touchStartX - touchEndX;

  if (diff > 50) handleNext();     // swipe left
  if (diff < -50) handlePrev();    // swipe right

  setTouchStartX(null);
};

  return (
    <div className="services-page" id="services">
      <div className="services-header">
        <h1>Our Services</h1>
        <p className="services-intro">{introText}</p>
        <div className="header-line"></div>
      </div>

      <div className="services-carousel-container"
      onTouchStart={handleTouchStart}
  onTouchEnd={handleTouchEnd}>
        <button
          className={`carousel-arrow left-arrow ${currentIndex === 0 ? 'disabled' : ''}`}
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          <ChevronLeft size={32} />
        </button>

        <div className="services-grid">
          {visibleServices.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-image">
                <img src={service.image} alt={service.title} />
              </div>

              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <a href="#contact" className="know-more">
                  Request Service →
                </a>
              </div>
            </div>
          ))}
        </div>

        <button
          className={`carousel-arrow right-arrow ${currentIndex === maxIndex ? 'disabled' : ''}`}
          onClick={handleNext}
          disabled={currentIndex === maxIndex}
        >
          <ChevronRight size={32} />
        </button>
      </div>
    </div>
  );
}
