import React, { useState, useRef } from "react";
import "../styles/products.css";

const productGroups = [
  {
    title: "1. Furniture",
    items: [
      "Office Furniture (Desks, Chairs, Filing Cabinets)",
      "Home Furniture (Sofas, Beds, Dining Sets)",
      "Outdoor Furniture (Patio Sets, Garden Chairs)",
      "Custom-Made Furniture",
      "Storage Solutions & Shelving",
    ],
  },
  {
    title: "2. Electronics & Gadgets",
    items: [
      "Laptops, Desktops & All-in-One PCs",
      "Tablets & Smartphones",
      "Printers, Scanners & Copiers",
      "Smart Devices & Wearables",
      "Cameras & Surveillance Systems",
    ],
  },
  {
    title: "3. Office Equipment & Supplies",
    items: [
      "Office Machines (Shredders, Fax)",
      "Stationery & Writing Materials",
      "Desk Organizers & Accessories",
      "Filing Systems & Cabinets",
      "Whiteboards & Flipcharts",
    ],
  },
  {
    title: "4. IT Products & Accessories",
    items: [
      "Network Routers & Modems",
      "External Storage Devices",
      "Keyboards, Mice & Webcams",
      "Power Strips & Adaptors",
      "Headphones & Microphones",
    ],
  },
  {
    title: "5. Cleaning & Hygiene Supplies",
    items: [
      "Disinfectants & Detergents",
      "Cleaning Tools",
      "Paper Products",
      "Sanitation Stations",
      "Pest Control Products",
    ],
  },
  {
    title: "6. Safety & Security Equipment",
    items: [
      "PPE & Safety Wear",
      "Fire Extinguishers",
      "CCTV & Alarm Systems",
      "Security Safes & Locks",
      "High-Visibility Clothing",
    ],
  },
  {
    title: "7. Facility & Maintenance Tools",
    items: [
      "Hand Tools",
      "Power Tools",
      "Electrical Equipment",
      "Paints & Hardware",
      "HVAC Systems",
    ],
  },
  {
    title: "8. Kitchen & Breakroom Supplies",
    items: [
      "Appliances",
      "Water Dispensers",
      "Utensils & Cutlery",
      "Snack Packs",
      "Cleaning Supplies",
    ],
  },
  {
    title: "9. Branding & Promotional Items",
    items: [
      "Business Cards & Flyers",
      "Branded Merchandise",
      "Event Branding Materials",
      "Corporate Gifts",
      "Packaging & Labels",
    ],
  },
  {
    title: "10. Apparel & Uniforms",
    items: [
      "Corporate Uniforms",
      "Workwear & Safety Clothing",
      "School Uniforms",
      "Promotional Apparel",
      "Embroidery & Printing",
    ],
  },
  {
    title: "11. Home & Living Products",
    items: [
      "Home Appliances",
      "Kitchenware",
      "Decor Items",
      "Bedding & Linens",
      "Storage Organizers",
    ],
  },
  {
    title: "12. Educational & School Supplies",
    items: [
      "Textbooks & Notebooks",
      "School Bags",
      "Calculators",
      "Educational Charts",
      "Classroom Furniture",
    ],
  },
  {
    title: "13. Automotive Supplies",
    items: [
      "Car Accessories",
      "Motor Oils & Lubricants",
      "Battery Chargers",
      "Cleaning Kits",
      "Spare Parts",
    ],
  },
  {
    title: "14. Health & Wellness",
    items: [
      "First Aid Kits",
      "Thermometers",
      "Fitness Equipment",
      "Wellness Gadgets",
      "Air Purifiers",
    ],
  },
  {
    title: "15. Packaging & Shipping Supplies",
    items: [
      "Cartons & Boxes",
      "Bubble Wrap",
      "Shipping Labels",
      "Pallets & Stretch Films",
      "Tapes & Dispensers",
    ],
  },
  {
    title: "16. Event & Hospitality Supplies",
    items: [
      "Tents & Canopies",
      "Tables & Chairs",
      "Catering Equipment",
      "Sound & Lighting Systems",
      "Event Staff Uniforms",
    ],
  },
];

export default function Products() {
  const [index, setIndex] = useState(0);
  const cardsPerSlide = 4;
  const slides = [];

  for (let i = 0; i < productGroups.length; i += cardsPerSlide) {
    slides.push(productGroups.slice(i, i + cardsPerSlide));
  }

  const maxIndex = slides.length - 1;

  return (
    <section id="products" className="products-section">
      <div className="products-container">
        <h2 className="products-title">Products & Sourcing Capabilities</h2>

        <div className="products-grid">
          {/* INTRO CARD */}
          <div className="products-intro-card">
            <h3>Your One-Stop Sourcing & Logistics Hub</h3>
            <p>
              We source, manage, and deliver products across multiple industries
              with reliability, speed, and competitive pricing.
            </p>
            <p>
              From procurement to final delivery — we handle everything.
            </p>
          </div>

          {/* SLIDER */}
          <div className="product-slider-wrapper">
            <button
              className={`product-arrow left ${index === 0 ? "disabled" : ""}`}
              onClick={() => setIndex(index - 1)}
            >
              ‹
            </button>

            <div
              className="product-slider-track"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {slides.map((slide, i) => (
                <div key={i} className="product-slide">
                  {slide.map((group, idx) => (
                    <div key={idx} className="product-card">
                      <h4>{group.title}</h4>
                      <ul>
                        {group.items.map((item, j) => (
                          <li key={j}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <button
              className={`product-arrow right ${
                index === maxIndex ? "disabled" : ""
              }`}
              onClick={() => setIndex(index + 1)}
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
