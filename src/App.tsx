import React from 'react';
import './App.css';
import { Layout, Database, BarChart3, ChevronRight, Star, Quote, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const App: React.FC = () => {
  const exportBrochure = async () => {
    const element = document.getElementById('pricing-content');
    if (!element) return;
    
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      backgroundColor: '#FAF7F2'
    });
    
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('l', 'mm', 'a4');
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('LaunchLive_Professional_Brochure.pdf');
  };

  return (
    <div className="landing-page">
      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">
          Launch Live <span>Studio</span>
        </div>
        <div className="nav-links">
          <a href="#workflow" className="nav-link">Intelligence</a>
          <a href="#pricing" className="nav-link">Investment</a>
          <button 
            className="btn-primary" 
            style={{ padding: '12px 24px', fontSize: '0.95rem' }}
            onClick={() => window.location.href = 'https://www.launchlive.studio/book-a-call'}
          >
            Book a Demo
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <img src="/hero.png" alt="Culinary Backdrop" className="hero-image-bg" />
        <div className="container">
          <div className="hero-content">
            <span className="hero-tagline">The Gold Standard in Restaurant Intelligence</span>
            <h1>Elevate Your Culinary Operations</h1>
            <p className="hero-description">
              A bespoke POS ecosystem designed for the world's most demanding kitchens.
              Seamlessly bridge the gap between back-of-house precision and front-of-house excellence.
            </p>
            <div className="cta-group">
              <button className="btn-primary">Get Started <ChevronRight size={18} style={{ marginLeft: '8px' }} /></button>
              <button className="btn-outline">Explore Solutions</button>
            </div>

            <div className="hero-badges">
              <span className="badge-item"><ShieldCheck size={16} /> Enterprise Security</span>
              <span className="badge-item"><Zap size={16} /> Instant Sync</span>
              <span className="badge-item"><Database size={16} /> Real-time Cloud</span>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section id="features" className="features">
        <div className="container">
          <h2 className="section-title">Engineered for Excellence</h2>
          <p className="section-subtitle">
            Every feature is meticulously crafted to eliminate friction, providing you with the clarity
            needed to focus on what truly matters: the culinary craft.
          </p>

          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon"><Layout size={32} /></div>
              <h3>Artisanal POS</h3>
              <p>A zero-latency interface that anticipates your staff's needs. Optimized for fine dining and high-volume operations alike.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon"><Database size={32} /></div>
              <h3>Intelligent Inventory</h3>
              <p>Automated tracking from farm to table. Predictive analytics help you manage seasonality and minimize waste with surgical precision.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon"><BarChart3 size={32} /></div>
              <h3>Revenue Intelligence</h3>
              <p>Beyond basic reporting. Gain deep insights into menu engineering, staff performance, and guest preferences in real-time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Visualization */}
      <section id="workflow" className="workflow">
        <div className="container">
          <div className="workflow-header">
            <h2 className="section-title">The Unified Workflow</h2>
            <p className="section-subtitle">A singular, connected ecosystem from reservation to revenue.</p>
          </div>
          
          <div className="workflow-visual">
            <div className="workflow-step">
              <div className="step-number">01</div>
              <div className="step-content">
                <h4>Acquisition</h4>
                <p>Digital reservations and guest profiling seamlessly synced.</p>
              </div>
            </div>
            <div className="workflow-connector"></div>
            <div className="workflow-step active">
              <div className="step-number">02</div>
              <div className="step-content">
                <h4>Execution</h4>
                <p>High-precision POS and KDS coordination in real-time.</p>
              </div>
            </div>
            <div className="workflow-connector"></div>
            <div className="workflow-step">
              <div className="step-number">03</div>
              <div className="step-content">
                <h4>Analysis</h4>
                <p>Automated reconciliation and AI-driven growth insights.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section id="showcase" className="showcase">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 className="section-title" style={{ color: 'white' }}>High-Fidelity Interface</h2>
            <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '0' }}>
              A masterclass in interface design. Monitor every table, every transaction, and every ingredient through a singular, high-fidelity lens.
            </p>
          </div>
          <div className="mockup-container">
            <div className="mockup-grid">
              <div className="mockup-main">
                <img src="/dashboard.png" alt="Admin Dashboard" className="dashboard-image" />
              </div>
              <div className="mockup-side">
                <img src="/mobile-app.png" alt="Staff Application" className="mobile-image" />
                <img src="/kds.png" alt="Kitchen Display System" className="kds-image" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing">
        <div className="container">
          <div className="pricing-header">
            <h2 className="section-title">Investment Packages</h2>
            <p className="section-subtitle">Tailored intelligence for every scale of excellence.</p>
            <button className="btn-brochure" onClick={exportBrochure}>
              <Database size={18} /> Export Professional Brochure (PDF)
            </button>
          </div>

          <div className="pricing-grid" id="pricing-content">
            <div className="pricing-card">
              <div className="package-tag">Boutique</div>
              <h3>Essentials</h3>
              <div className="price">₹12,500<span>/mo</span></div>
              <ul>
                <li><ShieldCheck size={16} /> 2 Concurrent POS Terminals</li>
                <li><ShieldCheck size={16} /> Core Inventory Engine</li>
                <li><ShieldCheck size={16} /> Real-time Revenue Tracking</li>
                <li><ShieldCheck size={16} /> 24/7 Digital Support</li>
              </ul>
              <button className="btn-primary-small">Select Plan</button>
            </div>

            <div className="pricing-card featured">
              <div className="package-tag">Most Preferred</div>
              <h3>Professional</h3>
              <div className="price">₹28,000<span>/mo</span></div>
              <ul>
                <li><ShieldCheck size={16} /> Unlimited Terminals</li>
                <li><ShieldCheck size={16} /> AI Predictive Inventory</li>
                <li><ShieldCheck size={16} /> Advanced Menu Engineering</li>
                <li><ShieldCheck size={16} /> Multi-location Sync</li>
                <li><ShieldCheck size={16} /> Dedicated Account Manager</li>
              </ul>
              <button className="btn-primary-small gold">Select Plan</button>
            </div>

            <div className="pricing-card">
              <div className="package-tag">Global</div>
              <h3>Enterprise</h3>
              <div className="price">₹55,000<span>/mo</span></div>
              <ul>
                <li><ShieldCheck size={16} /> Custom API Integrations</li>
                <li><ShieldCheck size={16} /> White-labeled Experience</li>
                <li><ShieldCheck size={16} /> On-site Deployment Team</li>
                <li><ShieldCheck size={16} /> Fraud Detection Intelligence</li>
                <li><ShieldCheck size={16} /> Priority Executive Support</li>
              </ul>
              <button className="btn-primary-small">Select Plan</button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section id="testimonials" className="testimonials">
        <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="testimonial-card">
            <Quote size={80} color="var(--amber-gold)" style={{ position: 'absolute', top: '-10px', right: '20px', opacity: 0.05 }} />
            <div className="stars" style={{ display: 'flex', gap: '4px', marginBottom: '30px' }}>
              {[1, 2, 3, 4, 5].map(i => <Star key={i} size={20} fill="var(--amber-gold)" color="var(--amber-gold)" />)}
            </div>
            <p className="testimonial-text">
              "Launch Live Studio is the first platform that understands the visceral nature of high-end dining. It doesn't just manage our data; it enhances our ability to deliver magic."
            </p>
            <div className="testimonial-author">
              <div style={{ width: '60px', height: '60px', borderRadius: '16px', backgroundColor: 'var(--forest-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '1.2rem' }}>
                MC
              </div>
              <div className="author-info">
                <h4>Marco Cassani</h4>
                <p>Owner & Executive Chef, L'Elite Gastronomy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <div className="container">
          <h2 className="cta-title">Join the Elite.</h2>
          <p className="cta-subtitle">
            Experience the future of restaurant management. Limited integrations available for Q3 2026.
          </p>
          <div className="cta-actions">
            <button 
              className="btn-primary large" 
              onClick={() => window.location.href = 'https://www.launchlive.studio/book-a-call'}
            >
              Inquire Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-content">
            <div>
              <div className="footer-logo">Launch Live <span>Studio</span></div>
              <p style={{ marginTop: '20px', opacity: 0.5, fontSize: '0.95rem', maxWidth: '400px' }}>
                The definitive operating system for modern culinary excellence.
                Built for chefs, by engineers who love food.
              </p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ display: 'flex', gap: '40px', marginBottom: '30px', justifyContent: 'flex-end' }}>
                <a href="#" className="nav-link" style={{ color: 'white' }}>Privacy</a>
                <a href="#" className="nav-link" style={{ color: 'white' }}>Terms</a>
                <a href="#" className="nav-link" style={{ color: 'white' }}>Intelligence</a>
              </div>
              <p style={{ opacity: 0.3, fontSize: '0.85rem' }}>
                &copy; 2026 Launch Live Studio. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
