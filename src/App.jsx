import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ChefHat } from "lucide-react";
import { menuCategories, menuItems } from "./menuData";

function App() {
  const [activeCategory, setActiveCategory] = useState("Coffee");
  const [isScrolled, setIsScrolled] = useState(false);
  const containerRef = useRef(null);
  const categoryScrollRef = useRef(null);
  
  // Table info from query parameters (simulating a real QR scan)
  const [tableNumber, setTableNumber] = useState("Table 04");

  useEffect(() => {
    // Check url search params for table number
    const params = new URLSearchParams(window.location.search);
    const table = params.get("table");
    if (table) {
      setTableNumber(`Table ${table.padStart(2, "0")}`);
    }
    
    // Mouse glow coordinate listener for desktop spotlight
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        containerRef.current.style.setProperty("--mouse-x", `${x}px`);
        containerRef.current.style.setProperty("--mouse-y", `${y}px`);
      }
    };

    // Scroll listener for header background change
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Filter items based on active category
  const filteredItems = menuItems.filter(
    (item) => item.category === activeCategory
  );

  // Local card mouse glow tracker for premium hover effects on desktop
  const handleCardMouseMove = (e, cardId) => {
    const card = document.getElementById(cardId);
    if (card) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--card-mouse-x", `${x}px`);
      card.style.setProperty("--card-mouse-y", `${y}px`);
    }
  };

  // Generate 25 static ambient particles configs to render via optimized CSS animations
  const particles = Array.from({ length: 25 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}vw`,
    delay: `${Math.random() * 8}s`,
    duration: `${6 + Math.random() * 8}s`,
    drift: `${-30 + Math.random() * 60}px`,
    size: `${2 + Math.random() * 5}px`,
    maxOpacity: 0.15 + Math.random() * 0.25,
  }));

  // Automatically scroll selected category pill into center view
  const selectCategory = (category) => {
    setActiveCategory(category);
    const pill = document.getElementById(`pill-${category.replace(/\s+/g, "-")}`);
    const wrapper = categoryScrollRef.current;
    
    if (pill && wrapper) {
      const pillRect = pill.getBoundingClientRect();
      const wrapperRect = wrapper.getBoundingClientRect();
      const scrollLeft = wrapper.scrollLeft + (pillRect.left - wrapperRect.left) - (wrapperRect.width / 2) + (pillRect.width / 2);
      
      wrapper.scrollTo({
        left: scrollLeft,
        behavior: "smooth"
      });
    }
  };

  return (
    <div ref={containerRef} className="app-container">
      {/* Background Particles */}
      <div className="particle-container">
        {particles.map((p) => (
          <div
            key={p.id}
            className="particle"
            style={{
              left: p.left,
              "--delay": p.delay,
              "--duration": p.duration,
              "--drift": p.drift,
              width: p.size,
              height: p.size,
              "--max-opacity": p.maxOpacity,
            }}
          />
        ))}
      </div>

      {/* Sticky Header */}
      <header className={`sticky-header ${isScrolled ? "scrolled" : ""}`}>
        <div className="header-content">
          <div className="header-logo-container">
            {/* Custom Premium Café Cup Logo */}
            <svg
              className="header-logo-svg"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 21h18v-2H2v2zM20 8h-2V5h2v3zm2-5H2v14h18v-4h2c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM4 5h12v10H4V5z" />
            </svg>
            <h1 className="header-title">VELVET BREW</h1>
          </div>
          <p className="header-subtitle">Cafe & Roastery</p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-logo-wrapper">
          <div className="hero-logo-halo" />
          <div className="hero-logo-box">
            {/* Centered Glowing Cafe Cup Logo */}
            <svg
              className="hero-logo-svg"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 21h18v-2H2v2zM20 8h-2V5h2v3zm2-5H2v14h18v-4h2c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM4 5h12v10H4V5z" />
            </svg>
          </div>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="serif-heading hero-title"
        >
          Digital Menu
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hero-subtitle"
        >
          Handcrafted beverages, gourmet bites, and unforgettable café experiences.
        </motion.p>
        
        <div className="table-indicator">
          <span>{tableNumber}</span>
        </div>
      </section>

      {/* Sticky Category Filters */}
      <div className="category-container-sticky">
        <div ref={categoryScrollRef} className="category-wrapper">
          {menuCategories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                id={`pill-${category.replace(/\s+/g, "-")}`}
                className={`category-pill ${isActive ? "active" : ""}`}
                onClick={() => selectCategory(category)}
              >
                {/* Framer motion sliding active indicator */}
                {isActive && (
                  <motion.span
                    layoutId="activePillGlow"
                    className="active-pill-glow-bg"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      borderRadius: "30px",
                      background: "var(--accent-gold)",
                      zIndex: -1,
                    }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span style={{ position: "relative", zIndex: 2 }}>{category}</span>
              </button>
            );
          })}
        </div>
        {/* Subtle Horizontal Scroll Hint on Mobile */}
        <div className="scroll-hint">
          <div className="scroll-dot"></div>
          <div className="scroll-dot"></div>
          <div className="scroll-dot"></div>
        </div>
      </div>

      {/* Menu Items Grid */}
      <main className="menu-grid">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            style={{ display: "grid", gap: "20px", width: "100%" }}
          >
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                id={item.id}
                className="menu-card"
                onMouseMove={(e) => handleCardMouseMove(e, item.id)}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                initial={{ opacity: 0.85, y: 10 }}
                transition={{ duration: 0.4 }}
              >
                {/* Food Image */}
                <div className="card-image-container">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="card-image"
                    loading="lazy"
                  />
                </div>

                {/* Card Details */}
                <div className="card-info">
                  <div>
                    {/* Header Row */}
                    <div className="card-header-row">
                      <div className="card-title-badge-group">
                        <h3 className="card-item-title">{item.name}</h3>
                        
                        {/* Badges Container */}
                        <div className="card-badges">
                          {item.isPopular && (
                            <span className="menu-badge popular">
                              <Sparkles size={10} style={{ display: "inline", marginRight: "3px", verticalAlign: "middle" }} />
                              Popular
                            </span>
                          )}
                          {item.isChefRecommended && (
                            <span className="menu-badge chef">
                              <ChefHat size={10} style={{ display: "inline", marginRight: "3px", verticalAlign: "middle" }} />
                              Chef's Choice
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Veg / Non-Veg Indicator */}
                      <div className={`veg-nonveg-badge ${item.isVeg ? "veg" : "nonveg"}`} title={item.isVeg ? "Vegetarian" : "Non-Vegetarian"}>
                        <div className="badge-dot" />
                      </div>
                    </div>

                    {/* Item Description */}
                    <p className="card-description">{item.description}</p>
                  </div>

                  {/* Price Row */}
                  <div className="card-price-row">
                    <span className="card-price">{item.price}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Premium Footer */}
      <footer className="footer-logo-row">
        <svg
          className="footer-logo"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2 21h18v-2H2v2zM20 8h-2V5h2v3zm2-5H2v14h18v-4h2c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM4 5h12v10H4V5z" />
        </svg>
        <span className="footer-text">VELVET BREW</span>
        <span className="footer-text" style={{ fontSize: "0.6rem", opacity: 0.7, marginTop: "-4px" }}>
          Premium Digital Menu Experience
        </span>
      </footer>
    </div>
  );
}

export default App;
