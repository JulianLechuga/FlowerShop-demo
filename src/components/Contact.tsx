import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contacto" className="section-padding contact">
      <div className="container">
        <div className="section-header text-center">
          <span className="subtitle">Contacto</span>
          <h2 className="section-title">Hablemos de Flores</h2>
          <div className="divider"></div>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <h3>Visítanos en nuestra Boutique</h3>
            <p className="contact-desc">
              Estamos encantados de atenderte personalmente y ayudarte a elegir el arreglo perfecto.
            </p>

            <div className="info-items">
              <div className="info-item">
                <MapPin className="info-icon" />
                <div>
                  <h4>Ubicación</h4>
                  <p>Calle Serrano, 45, Madrid, España</p>
                </div>
              </div>
              <div className="info-item">
                <Phone className="info-icon" />
                <div>
                  <h4>Teléfono</h4>
                  <p>+34 912 345 678</p>
                </div>
              </div>
              <div className="info-item">
                <Mail className="info-icon" />
                <div>
                  <h4>Email</h4>
                  <p>hola@flordelis.es</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <a href="#"><Instagram /></a>
              <a href="#"><Facebook /></a>
            </div>
          </div>

          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <input type="text" placeholder="Nombre completo" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Correo electrónico" required />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Asunto (ej. Boda, Pedido Especial)" />
            </div>
            <div className="form-group">
              <textarea placeholder="Cuéntanos qué necesitas..." rows={5} required></textarea>
            </div>
            <button type="submit" className="btn-primary w-full">Enviar Mensaje</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
