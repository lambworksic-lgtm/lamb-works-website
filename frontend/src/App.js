import { useState } from "react";
import "@/App.css";
import { Menu, X, ChevronRight, Users, Leaf, TrendingUp, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "", category: "general" });
  const [loading, setLoading] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${API}/contact`, formData);
      toast.success("Message sent successfully! We'll get back to you soon.");
      setFormData({ name: "", email: "", phone: "", message: "", category: "general" });
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="nav-bar">
        <div className="nav-container">
          <div className="nav-logo">
            <img src="https://customer-assets.emergentagent.com/job_farm-integrate/artifacts/dg1tcpri_Main%20Logo.png" alt="Lamb Works Logo" className="logo-icon" />
            <span className="company-name-vertical">LAMB WORKS CORPORATION</span>
          </div>
          
          <div className="nav-links desktop-nav">
            <button onClick={() => scrollToSection("home")} data-testid="nav-home">Home</button>
            <button onClick={() => scrollToSection("about")} data-testid="nav-about">About</button>
            <button onClick={() => scrollToSection("network")} data-testid="nav-network">Network</button>
            <button onClick={() => scrollToSection("subsidiaries")} data-testid="nav-subsidiaries">Subsidiaries</button>
            <button onClick={() => scrollToSection("services")} data-testid="nav-services">Services</button>
            <button onClick={() => scrollToSection("investors")} data-testid="nav-investors">Investors</button>
            <button onClick={() => scrollToSection("contact")} data-testid="nav-contact">Contact</button>
          </div>

          <button 
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="mobile-menu" data-testid="mobile-menu">
            <button onClick={() => scrollToSection("home")}>Home</button>
            <button onClick={() => scrollToSection("about")}>About</button>
            <button onClick={() => scrollToSection("network")}>Network</button>
            <button onClick={() => scrollToSection("subsidiaries")}>Subsidiaries</button>
            <button onClick={() => scrollToSection("services")}>Services</button>
            <button onClick={() => scrollToSection("investors")}>Investors</button>
            <button onClick={() => scrollToSection("contact")}>Contact</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <div className="hero-badge" data-testid="hero-badge">
            <span className="badge-dot"></span>
            India's Next-Gen Farming Network
          </div>
          <h1 className="hero-title" data-testid="hero-title">
            Building India's next-gen<br />
            <span className="highlight">integrated farming network</span><br />
            for sheep and goat
          </h1>
          <p className="hero-subtitle" data-testid="hero-subtitle">
            Connecting traditional farming with modern technology to create a sustainable,
            profitable, and scalable livestock ecosystem across India.
          </p>
          <div className="hero-cta">
            <Button 
              className="cta-button large"
              onClick={() => scrollToSection("network")}
              data-testid="hero-join-button"
            >
              Join Our Network <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              className="outline-button large"
              onClick={() => scrollToSection("investors")}
              data-testid="hero-invest-button"
            >
              Invest With Us
            </Button>
          </div>
        </div>
        <div className="hero-stats">
          <div className="stat-card" data-testid="stat-partners">
            <div className="stat-number">24+</div>
            <div className="stat-label">Partner Farms</div>
          </div>
          <div className="stat-card" data-testid="stat-livestock">
            <div className="stat-number">4.5K+</div>
            <div className="stat-label">Livestock</div>
          </div>
          <div className="stat-card" data-testid="stat-districts">
            <div className="stat-number">18+</div>
            <div className="stat-label">Districts</div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title" data-testid="about-title">About Lamb Works</h2>
            <p className="section-subtitle" data-testid="about-subtitle">
              Revolutionizing livestock farming through integration, technology, and sustainable practices
            </p>
          </div>
          <div className="about-content">
            <div className="about-text">
              <p data-testid="about-description">
                Lamb Works is pioneering India's first integrated farming network for sheep and goat livestock.
                We connect traditional farmers with modern agricultural technology, creating a sustainable ecosystem
                that benefits everyone in the supply chain.
              </p>
              <p>
                Our mission is to transform the livestock sector by implementing best practices in animal husbandry,
                providing access to quality feed and veterinary care, and ensuring fair prices for farmers while
                delivering premium quality products to consumers.
              </p>
              <div className="mission-cards">
                <Card className="mission-card">
                  <CardHeader>
                    <Users className="mission-icon" />
                    <CardTitle data-testid="mission-empower-title">Empower Farmers</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Providing resources, training, and market access to small-scale farmers</p>
                  </CardContent>
                </Card>
                <Card className="mission-card">
                  <CardHeader>
                    <Leaf className="mission-icon" />
                    <CardTitle data-testid="mission-sustainable-title">Sustainable Practices</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Implementing eco-friendly and ethical farming methods across our network</p>
                  </CardContent>
                </Card>
                <Card className="mission-card">
                  <CardHeader>
                    <TrendingUp className="mission-icon" />
                    <CardTitle data-testid="mission-quality-title">Quality Assurance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Ensuring premium quality products through stringent standards and monitoring</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Network Section */}
      <section id="network" className="section network-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title" data-testid="network-title">Our Farming Network</h2>
            <p className="section-subtitle" data-testid="network-subtitle">
              A growing ecosystem of farmers, suppliers and distributors working together
            </p>
          </div>
          <div className="network-grid">
            <Card className="network-card" data-testid="network-card-farmers">
              <CardHeader>
                <div className="network-icon-wrapper">
                  <Users className="network-icon" />
                </div>
                <CardTitle>Partner Farmers</CardTitle>
                <CardDescription>24+ verified farms across 18+ districts</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Our partner farmers follow best practices in animal welfare, sustainable grazing and quality fattening. We provide ongoing support, training and fair pricing.</p>
                <Button 
                  className="network-cta"
                  onClick={() => scrollToSection("contact")}
                  data-testid="network-join-farmers-button"
                >
                  Become a Partner
                </Button>
              </CardContent>
            </Card>

            <Card className="network-card" data-testid="network-card-supply">
              <CardHeader>
                <div className="network-icon-wrapper">
                  <Leaf className="network-icon" />
                </div>
                <CardTitle>Supply Chain</CardTitle>
                <CardDescription>End-to-end integrated supply chain</CardDescription>
              </CardHeader>
              <CardContent>
                <p>From feed suppliers to veterinary services, logistics partners to processing facilities - we've built a complete ecosystem that ensures quality at every step.</p>
                <Button 
                  className="network-cta"
                  onClick={() => scrollToSection("contact")}
                  data-testid="network-partner-supply-button"
                >
                  Partner With Us
                </Button>
              </CardContent>
            </Card>

            <Card className="network-card" data-testid="network-card-distribution">
              <CardHeader>
                <div className="network-icon-wrapper">
                  <TrendingUp className="network-icon" />
                </div>
                <CardTitle>Distribution Network</CardTitle>
                <CardDescription>Reaching customers across India</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Our distribution partners ensure fresh, quality products reach consumers quickly. We serve restaurants, retailers, and direct-to-consumer channels.</p>
                <Button 
                  className="network-cta"
                  onClick={() => scrollToSection("contact")}
                  data-testid="network-distribute-button"
                >
                  Distribute With Us
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Subsidiaries Section */}
      <section id="subsidiaries" className="section products-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title" data-testid="subsidiaries-title">Our Subsidiaries</h2>
            <p className="section-subtitle" data-testid="subsidiaries-subtitle">
              Diversified portfolio of companies serving the complete agricultural value chain
            </p>
          </div>
          <div className="products-content">
            <div className="product-features-grid">
              <div className="feature-item" data-testid="subsidiary-farmers-market-farms">
                <div className="feature-number">01</div>
                <h4>Farmers Market Farms</h4>
                <p>Integrated sheep and goat farming operations providing premium quality livestock and sustainable farming solutions</p>
              </div>
              <div className="feature-item" data-testid="subsidiary-farmers-market-training">
                <div className="feature-number">02</div>
                <h4>Farmers Market Training</h4>
                <p>Comprehensive training programs for farmers on modern animal husbandry, breeding techniques, and farm management</p>
              </div>
              <div className="feature-item" data-testid="subsidiary-rapid-feeds">
                <div className="feature-number">03</div>
                <h4>Rapid Feeds™</h4>
                <p>High-quality nutritional feed solutions designed for optimal livestock growth and health across all farming stages</p>
              </div>
              <div className="feature-item" data-testid="subsidiary-farmers-market-poultry">
                <div className="feature-number">04</div>
                <h4>Farmers Market Poultry</h4>
                <p>Modern poultry farming operations delivering quality products and expanding our integrated farming ecosystem</p>
              </div>
              <div className="feature-item" data-testid="subsidiary-classic-gudde">
                <div className="feature-number">05</div>
                <h4>Classic Gudde™</h4>
                <p>In association with Ambe Farms, our Classic Gudde Mamsa represents the traditional way of selling mutton where the entire carcass is included - meat, bones, fat, and every natural part, just like how villages followed in the old days</p>
              </div>
              <div className="feature-item" data-testid="subsidiary-farmcuts">
                <div className="feature-number">06</div>
                <h4>Farmcuts™</h4>
                <p>Your premium destination for the finest selection of fresh, tender chicken, mutton, and fish. We deliver farm-fresh quality with expert butchery, ensuring every cut meets the highest standards of freshness and taste</p>
              </div>
            </div>
            <div className="products-cta">
              <Button 
                className="cta-button large"
                onClick={() => scrollToSection("contact")}
                data-testid="subsidiaries-contact-button"
              >
                Partner With Us <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section network-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title" data-testid="services-title">Our Services</h2>
            <p className="section-subtitle" data-testid="services-subtitle">
              Comprehensive solutions for farmers, partners, and investors in the livestock ecosystem
            </p>
          </div>
          <div className="products-content">
            <div className="product-features-grid">
              <div className="feature-item" data-testid="service-exclusive-buying">
                <div className="feature-number">01</div>
                <h4>Exclusive Animal Buying</h4>
                <p>Direct procurement of premium sheep and goats from markets to farmers, ensuring quality breeding stock and competitive pricing</p>
              </div>
              <div className="feature-item" data-testid="service-buyback">
                <div className="feature-number">02</div>
                <h4>Buy Back Guarantee</h4>
                <p>Assured buyback of fattened sheep from farmers at fair market prices, eliminating market risks and ensuring steady income</p>
              </div>
              <div className="feature-item" data-testid="service-feed-supply">
                <div className="feature-number">03</div>
                <h4>Feed Supplements Supply</h4>
                <p>Premium nutritional feed supplements for sheep and goat, formulated for optimal growth, health, and productivity</p>
              </div>
              <div className="feature-item" data-testid="service-integration">
                <div className="feature-number">04</div>
                <h4>Integration Services</h4>
                <p>Complete end-to-end support from buying to selling, similar to poultry integration model, covering all aspects of livestock farming</p>
              </div>
              <div className="feature-item" data-testid="service-investment">
                <div className="feature-number">05</div>
                <h4>Investment Opportunities</h4>
                <p>Attractive investment options for interested investors looking to participate in India's growing livestock farming sector</p>
              </div>
            </div>
            <div className="products-cta">
              <Button 
                className="cta-button large"
                onClick={() => scrollToSection("contact")}
                data-testid="services-join-button"
              >
                Join Now <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Investors Section */}
      <section id="investors" className="section investors-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title" data-testid="investors-title">Investor Opportunities</h2>
            <p className="section-subtitle" data-testid="investors-subtitle">
              Join us in building India's largest integrated livestock farming network
            </p>
          </div>
          <div className="investors-content">
            <div className="opportunity-grid">
              <Card className="opportunity-card" data-testid="opportunity-growth">
                <CardHeader>
                  <CardTitle>Market Opportunity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="opportunity-stat">₹2.5L Cr+</p>
                  <p className="opportunity-label">Indian Livestock Market Size</p>
                  <p className="opportunity-desc">
                    India's livestock sector is growing at 8% annually. With increasing demand for
                    quality meat products and organized supply chains, the opportunity is immense.
                  </p>
                </CardContent>
              </Card>

              <Card className="opportunity-card" data-testid="opportunity-model">
                <CardHeader>
                  <CardTitle>Business Model</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="opportunity-stat">Asset-Light</p>
                  <p className="opportunity-label">Network-Based Model</p>
                  <p className="opportunity-desc">
                    We operate an asset-light model by partnering with farmers and leveraging
                    existing infrastructure while adding technology and management layer.
                  </p>
                </CardContent>
              </Card>

              <Card className="opportunity-card" data-testid="opportunity-traction">
                <CardHeader>
                  <CardTitle>Current Traction</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="opportunity-stat">24+ Farms</p>
                  <p className="opportunity-label">Growing Network</p>
                  <p className="opportunity-desc">
                    Our expanding network of 24+ partner farms manages over 4,500 livestock across 18 districts,
                    demonstrating proven scalability and robust unit economics in the integrated farming model.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="investors-cta">
              <h3>Ready to invest in the future of farming?</h3>
              <p>Join us in revolutionizing India's livestock industry</p>
              <Button 
                className="cta-button large"
                onClick={() => {
                  setFormData({ ...formData, category: "investor" });
                  scrollToSection("contact");
                }}
                data-testid="investors-contact-button"
              >
                Get Investment Deck <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title" data-testid="contact-title">Get In Touch</h2>
            <p className="section-subtitle" data-testid="contact-subtitle">
              Let's discuss how we can work together
            </p>
          </div>
          <div className="contact-grid">
            <div className="contact-info">
              <h3>Contact Information</h3>
              <p className="contact-desc">Reach out to us for partnerships, investments, or general inquiries.</p>
              
              <div className="contact-details">
                <div className="contact-item" data-testid="contact-email">
                  <Mail className="contact-icon" />
                  <div>
                    <div className="contact-label">Email</div>
                    <div className="contact-value">info@lambworks.in</div>
                  </div>
                </div>
                <div className="contact-item" data-testid="contact-phone">
                  <Phone className="contact-icon" />
                  <div>
                    <div className="contact-label">Phone</div>
                    <div className="contact-value">+91 9902514269</div>
                    <div className="contact-value">+91 9108208475</div>
                  </div>
                </div>
                <div className="contact-item" data-testid="contact-address">
                  <MapPin className="contact-icon" />
                  <div>
                    <div className="contact-label">Address</div>
                    <div className="contact-value">Lamb Works India Corporation Limited, Hebbal, Bengaluru, Karnataka 560032</div>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <a href="#" className="social-link" data-testid="social-facebook"><Facebook /></a>
                <a href="#" className="social-link" data-testid="social-twitter"><Twitter /></a>
                <a href="#" className="social-link" data-testid="social-linkedin"><Linkedin /></a>
                <a href="#" className="social-link" data-testid="social-instagram"><Instagram /></a>
              </div>
            </div>

            <Card className="contact-form-card">
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription>We'll get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleContactSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      data-testid="contact-form-name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      data-testid="contact-form-email"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <Input
                      id="phone"
                      placeholder="+91 9902514269"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      data-testid="contact-form-phone"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="category">I'm interested in</label>
                    <select
                      id="category"
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="form-select"
                      data-testid="contact-form-category"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="partner">Becoming a Partner</option>
                      <option value="investor">Investment Opportunity</option>
                      <option value="customer">Product Orders</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your inquiry..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={4}
                      data-testid="contact-form-message"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="cta-button full-width"
                    disabled={loading}
                    data-testid="contact-form-submit"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="footer-logo">
              <img src="https://customer-assets.emergentagent.com/job_farm-integrate/artifacts/dg1tcpri_Main%20Logo.png" alt="Lamb Works Logo" className="logo-icon" />
              <span className="company-name-vertical">LAMB WORKS CORPORATION</span>
            </div>
              <p className="footer-tagline">Building India's next-gen integrated farming network for sheep and goat</p>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Company</h4>
                <button onClick={() => scrollToSection("about")}>About Us</button>
                <button onClick={() => scrollToSection("network")}>Our Network</button>
                <button onClick={() => scrollToSection("subsidiaries")}>Subsidiaries</button>
                <button onClick={() => scrollToSection("services")}>Services</button>
              </div>
              <div className="footer-column">
                <h4>Opportunities</h4>
                <button onClick={() => scrollToSection("investors")}>For Investors</button>
                <button onClick={() => scrollToSection("network")}>For Farmers</button>
                <button onClick={() => scrollToSection("contact")}>For Partners</button>
              </div>
              <div className="footer-column">
                <h4>Legal</h4>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Cookie Policy</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Lamb Works India Corporation Limited. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;