import { motion } from 'framer-motion';
import './Services.css';
import weddingImg from '../assets/images/wedding.png';
import birthdayImg from '../assets/images/birthday.png';
import funeralImg from '../assets/images/funeral.png';
import plantsImg from '../assets/images/plants.png';

const services = [
  {
    title: 'Ramos de Boda',
    description: 'Diseños exclusivos para el día más especial de tu vida.',
    image: weddingImg,
    link: '#bodas'
  },
  {
    title: 'Cumpleaños',
    description: 'Sorprende con una explosión de color y fragancia.',
    image: birthdayImg,
    link: '#cumpleaños'
  },
  {
    title: 'Arreglos Fúnebres',
    description: 'Homenajes respetuosos y elegantes en momentos difíciles.',
    image: funeralImg,
    link: '#funeral'
  },
  {
    title: 'Plantas de Interior',
    description: 'Lleva la naturaleza a tu hogar con nuestra selección premium.',
    image: plantsImg,
    link: '#plantas'
  }
];

const Services = () => {
  return (
    <section id="colecciones" className="section-padding services">
      <div className="container">
        <div className="section-header text-center">
          <span className="subtitle">Nuestras Colecciones</span>
          <h2 className="section-title">Encuentra el Detalle Perfecto</h2>
          <div className="divider"></div>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="service-image">
                <img src={service.image} alt={service.title} />
                <div className="service-overlay">
                  <a href={service.link} className="btn-secondary">Ver Más</a>
                </div>
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
