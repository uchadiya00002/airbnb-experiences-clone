import hero from "../images/photo-grid.png";
import "./Hero.style.css";
const Hero = () => (
  <section className="hero">
    <img src={hero} className="hero-image" alt="airbnb-front-page" />
    <h1 className="hero-title">Online Experiences</h1>
    <p className="hero-subtitle">
      Join unique interactive activities led by one-of-a-kind hosts—all without
      leaving home.
    </p>
  </section>
);

export default Hero;
