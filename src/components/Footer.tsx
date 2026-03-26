import { Flower2, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo">
              <Flower2 size={24} className="logo-icon" />
              <span className="logo-text">Flor de Lis</span>
            </div>
            <p className="footer-tagline">
              Llevando la belleza de la naturaleza a tu puerta desde 1999. 
              Calidad premium y diseño artesanal en cada pétalo.
            </p>
            <div className="footer-social">
              <a href="#"><Instagram size={20} /></a>
              <a href="#"><Facebook size={20} /></a>
              <a href="#"><Twitter size={20} /></a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Enlaces Rápidos</h4>
            <ul>
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#colecciones">Colecciones</a></li>
              <li><a href="#nosotros">Sobre Nosotros</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Colecciones</h4>
            <ul>
              <li><a href="#bodas">Ramos de Boda</a></li>
              <li><a href="#cumpleaños">Cumpleaños</a></li>
              <li><a href="#eventos">Eventos Corporativos</a></li>
              <li><a href="#plantas">Plantas de Interior</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contacto Directo</h4>
            <ul>
              <li><MapPin size={18} className="footer-icon" /> Calle Serrano, 45, Madrid</li>
              <li><Phone size={18} className="footer-icon" /> +34 912 345 678</li>
              <li><Mail size={18} className="footer-icon" /> hola@flordelis.es</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Flor de Lis. Todos los derechos reservados.</p>
          <div className="footer-legal">
            <a href="#">Política de Privacidad</a>
            <a href="#">Términos y Condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
