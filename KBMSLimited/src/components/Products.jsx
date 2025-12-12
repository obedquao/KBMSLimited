import React from "react";
import "../styles/products.css";

export default function Products() {
  return (
    <section id="products" className="products-section animate">
      <div className="products-container">

        <h2 className="products-title">
          Products & Sourcing Capabilities
        </h2>

        <div className="products-grid">

          {/* LEFT COLUMN — INTRO CARD */}
          <div className="products-intro-card">
            <h3>Your One-Stop Sourcing & Logistics Hub</h3>
            <p>
              As part of our E-commerce, Shipping, and Logistics service, we provide reliable sourcing
              for a vast range of products across 15 key categories, ensuring quality and competitive pricing.
            </p>
            <p>
              We manage the entire supply chain, from procurement in international markets (Dubai & China)
              to final delivery.
            </p>
          </div>

          {/* RIGHT SIDE — PRODUCT GROUP CARDS */}
          <div className="product-list-grid">

            {/* Group 1–4 */}
            <div className="product-card">
              <h4>1–4. Furniture, Electronics, Office Supplies & IT</h4>
              <ul>
                <li>Office Furniture (Desks, Chairs)</li>
                <li>Home Furniture (Sofas, Beds)</li>
                <li>Computers (Laptops, Desktops)</li>
                <li>Smartphones & Printers</li>
                <li>Stationery & Desk Organizers</li>
                <li>Network Routers & External Hard Drives</li>
              </ul>
            </div>

            {/* Group 5–8 */}
            <div className="product-card">
              <h4>5–8. Facility Management & Kitchen</h4>
              <ul>
                <li>Cleaning & Hygiene Supplies</li>
                <li>Safety & Security Equipment (CCTV, PPE)</li>
                <li>Hand & Power Tools</li>
                <li>Kitchen Appliances & Water Dispensers</li>
              </ul>
            </div>

            {/* Group 9–12 */}
            <div className="product-card">
              <h4>9–12. Branding & Living</h4>
              <ul>
                <li>Branding & Promotional Items (Mugs, Apparel)</li>
                <li>Corporate & School Uniforms</li>
                <li>Home Appliances & Decor Items</li>
                <li>Educational & School Supplies</li>
              </ul>
            </div>

            {/* Group 13–16 */}
            <div className="product-card">
              <h4>13–16. Automotive, Health & Events</h4>
              <ul>
                <li>Automotive Supplies & Accessories</li>
                <li>Health & Wellness (First Aid Kits, Fitness)</li>
                <li>Packaging & Shipping Supplies</li>
                <li>Event & Hospitality Supplies</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
