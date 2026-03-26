import { useState, useEffect } from 'react';
import { Menu, X, Flower2, ShoppingBag } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo">
          <Flower2 size={32} className="logo-icon" />
          <span className="logo-text">Flor de Lis</span>
        </div>

        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <a href="#inicio" onClick={() => setIsMenuOpen(false)}>Inicio</a>
          <a href="#colecciones" onClick={() => setIsMenuOpen(false)}>Colecciones</a>
          <a href="#nosotros" onClick={() => setIsMenuOpen(false)}>Nosotros</a>
          <a href="#contacto" onClick={() => setIsMenuOpen(false)}>Contacto</a>
        </nav>

        <div className="header-actions">
          <button className="cart-btn">
            <ShoppingBag size={24} />
            <span className="cart-count">0</span>
          </button>
          <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
