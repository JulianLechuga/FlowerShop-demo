import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <section id="inicio" className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="hero-subtitle">Arte Floral & Diseño Boutique</span>
          <h1 className="hero-title">Flores que cuentan <br /><span>tu historia</span></h1>
          <p className="hero-description">
            Creamos arreglos únicos con las flores más frescas y exclusivas. 
            Envío a domicilio en 24h para que la emoción nunca espere.
          </p>
          <div className="hero-btns">
            <a href="#colecciones" className="btn-primary">Ver Colecciones</a>
            <a href="#contacto" className="btn-secondary">Pedir Ahora</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
