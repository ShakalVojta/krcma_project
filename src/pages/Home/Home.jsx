import { Link } from "react-router-dom";
import Contact from "../../components/Contact/Contact";
import "./home.css";
import OpeningHours from "../../components/OpeningHours/OpeningHours";

export default function Home() {
  return (
    <div className="home">
      <nav className="home__nav">
        <a href="#opening">Otevírací doba</a>
        <a href="#menu">Menu</a>
        <a href="#gallery">Galerie</a>
        <a href="#contact">Kontakty</a>
      </nav>

      <section id="opening" className="opening-hours">
        <OpeningHours />
      </section>

      <section id="menu" className="menu">
        <div className="menu__intro">
          <p>
            Stylová zámecká krčma poskytuje kapacitu pohodlných 60 míst k sezení,
            včetně salonku. Disponujeme připojením wifi free. Zároveň nabízíme
            možnost středověké hostiny, včetně programu na míru dle Vašich přání a
            představ, dle individuální domluvy. Máme zkušenosti s pořádáním
            kompletních firemních programů, stylových svateb a večírků.
          </p>
        </div>
      </section>

      <section id="gallery" className="gallery">
        <h2>Galerie</h2>
        {/* Přidáš sem galerii */}
      </section>

      <section id="contact" className="contact-section">
        <Contact />
      </section>
    </div>
  );
}
