import "../styles/about.css";
function AboutUs() {
  return (
    <section id="aboutus">
      <div className="imgHeaderContainer">

        <img src="/images/aboutus.webp" alt="About Us img" className="introimg" />

        {/* Semi-transparent overlay text box */}
          <div className="slider-overlay-text">
            About Us
          </div>
      </div>



       {/* About us Section */}
      
        <div className="aboutus-content-container">
         
            <div className="aboutus-context">
              <h2 className="aboutus-context-heading">About KBMS Limited</h2>
              <p className="aboutus-context-text">
             KBMS Limited is a dynamic management and consultancy company committed to providing reliable, 
             professional, and efficient solutions to businesses and individuals. Our expertise spans Business
              Consulting, Regulatory and Business Compliance, Office Space & Property Management, E-commerce, Logistics,
               and Visa Processing Support.
 
              We pride ourselves on delivering personalized services tailored to meet the unique
              needs of every client — ensuring seamless operations, strategic growth, and exceptional 
              service delivery from start to finish.</p>
            </div>
            <div className="">
              <img src="/images/aboutkbml.jpg" alt="KBMS about us" className="aboutusimg" />
            </div>
         
        </div>

        {/* vision mission Section */}

        <div className="mission-content-container">
         
            <div className="">
              <img src="/images/mission.webp" alt="KBMS about us" className="aboutusimg" />
            </div>

            <div className="mission-context">
              <h2 className="mission-context-heading">Our Mission</h2>
              <p className="mission-context-text">
                 To deliver world-class business
                  solutions that empower individuals, 
                  startups, and established companies to
                  operate with confidence, efficiency, and 
                  excellence. We aim to simplify complex 
                  business processes—from Business 
                  Consulting and Regulatory and
                  Compliance Support to HR Solutions, 
                  Property Management,
                  Financial Advisory, Concierge Services, 
                  and E-Commerce Logistics—while
                  providing exceptional customer service,
                  professionalism, and value.
              </p>
          
            </div>
            
         
        </div>

        {/* vision values Section */}
        <div className="vision-content-container">
         
            <div className="vision-context">
              <h2 className="vision-context-heading">Our Vision</h2>
              <p className="vision-context-text">
                  To become Ghana’s most trusted and 
                  innovative one-stop business solutions 
                  provider, recognized across Africa and 
                  beyond for driving growth, enabling
                  opportunities, and supporting
                  businesses to thrive in a fast-changing 
                  global economy   
                  </p>
          
            </div>
            <div className="">
              <img src="/images/vision.webp" alt="KBMS about us" className="aboutusimg" />
            </div>
         
        </div>
        <div className="values-container">
          <div className="">
              <img src="/images/values.webp" alt="KBMS about us" className="aboutusimg" />
            </div>
         
            <div className="aboutus-context">
              <h2 className="values-context-heading">Our Values</h2>

              <ul className="values-text">
                <li><p><span>Integrity</span>: We operate with honesty and transparency</p></li>
                <li> <p><span>Professionalism</span>:  We uphold high standards across all engagements.</p></li>
                <li> <p><span>Efficiency</span>: We deliver fast, accurate, and reliable results</p></li>
                <li> <p><span>Confidentiality</span>: We protect all client information securely.</p></li>
                <li> <p><span>Excellence</span>:  We exceed expectations in service delivery</p></li>
              </ul>
             
          
            </div>
            
         
        </div>
     
    </section>
  );
}
export default AboutUs;