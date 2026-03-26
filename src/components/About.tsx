import './About.css';

const About = () => {
  return (
    <section id="nosotros" className="section-padding about">
      <div className="container about-grid">
        <div className="about-image">
          <img src="/images/hero.png" alt="Nuestra Floristería" className="main-img" />
          <div className="about-experience">
            <span className="years">25</span>
            <span className="exp-text">Años de Pasión Floral</span>
          </div>
        </div>
        
        <div className="about-content">
          <span className="subtitle">Nuestra Historia</span>
          <h2 className="section-title">El Arte de Flor de Lis</h2>
          <p>
            Fundada en el corazón de la ciudad, Flor de Lis nació del deseo de transformar 
            momentos ordinarios en recuerdos extraordinarios a través del lenguaje de las flores.
          </p>
          <p>
            Nuestro equipo de maestros floristas selecciona cada tallo con precisión, 
            asegurando una frescura inigualable y composiciones que evocan emociones puras. 
            No solo vendemos flores; diseñamos experiencias sensoriales.
          </p>
          
          <ul className="about-features">
            <li><strong>Flores de Origen:</strong> Importamos variedades exóticas y apoyamos el cultivo local.</li>
            <li><strong>Diseño Personalizado:</strong> Cada ramo es una pieza única adaptada a tu visión.</li>
            <li><strong>Sostenibilidad:</strong> Utilizamos empaques eco-amigables y procesos residuo cero.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
