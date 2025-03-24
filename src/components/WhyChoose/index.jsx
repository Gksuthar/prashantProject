import React from 'react';
import './index.css';

const WhyChooseObiztec = () => {
  return (
    <section className="why-section">
      <div className="header">
        <h2 className="why-heading">Why Choose Obiztec?</h2>
        <div className="question-icon">
          <div className="vector-1"></div>
          <div className="vector-2"></div>
        </div>
      </div>
      <div className="why-img-box">
        <div className="img-rectangle"></div>
        <div className="img-1">
          <img src="/pexels-alphatradezone-5833320.jpg" alt="Team Collaboration" />
        </div>
        <div className="img-2">
          <img src="/pexels-aathif-10457031.jpg" alt="Professional at Work" />
        </div>
      </div>
      <div className="why-text-box">
        {/* Why 1: Affordable & Scalable Solutions */}
        <div className="why-item why-1">
          <div className="icon">
            <div className="check-icon">
              <div className="check-vector-1"></div>
              <div className="check-vector-2"></div>
            </div>
          </div>
          <div className="text-box">
            <h3>Affordable & Scalable Solutions</h3>
            <p>Designed for growing businesses.</p>
          </div>
        </div>
        {/* Why 2: Custom Development */}
        <div className="why-item why-2">
          <div className="icon">
            <div className="check-icon">
              <div className="check-vector-1"></div>
              <div className="check-vector-2"></div>
            </div>
          </div>
          <div className="text-box">
            <h3>Custom Development</h3>
            <p>No templates, fully tailored to your needs.</p>
          </div>
        </div>
        {/* Why 3: Fast Turnaround */}
        <div className="why-item why-3">
          <div className="icon">
            <div className="check-icon">
              <div className="check-vector-1"></div>
              <div className="check-vector-2"></div>
            </div>
          </div>
          <div className="text-box">
            <h3>Fast Turnaround</h3>
            <p>High-quality results, delivered efficiently.</p>
          </div>
        </div>
        {/* Why 4: Post-Launch Support */}
        <div className="why-item why-4">
          <div className="icon">
            <div className="check-icon">
              <div className="check-vector-1"></div>
              <div className="check-vector-2"></div>
            </div>
          </div>
          <div className="text-box">
            <h3>Post-Launch Support</h3>
            <p>1 to 6 months of maintenance included.</p>
          </div>
        </div>
        {/* Why 5: Proven Expertise */}
        <div className="why-item why-5">
          <div className="icon">
            <div className="check-icon">
              <div className="check-vector-1"></div>
              <div className="check-vector-2"></div>
            </div>
          </div>
          <div className="text-box">
            <h3>Proven Expertise</h3>
            <p>A team experienced in web development, marketing, and app design.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseObiztec;