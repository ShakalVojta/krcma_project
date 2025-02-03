import React, { useState } from 'react'
import "./contact.css";
import Map from '../../assets/mapa.jpg'

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  }

  const handleCloseModal = () => {
    setIsModalOpen(false);
  }

  return (
    <section className="contact">
      <h2>Kontakty</h2>
      <div className="contactcontent">
        <div className="contactinfo">
          <h3>Provozovatel:</h3>
          <p><strong>Festonia, s.r.o.</strong></p>
          <p><strong>IČO:</strong> 05007682</p>
          <p><strong>Odpovědný vedoucí:</strong> Tomáš Mařík</p>

          <h3>Krčma:</h3>
          <p><strong>Adresa:</strong></p>
          <p>Zámek I/110, 379 01 Třeboň</p>
          <p><strong>Telefon:</strong> 
          <a href="tel:+420384721530" className="contact-link"> 384 721 530</a>, 
          <a href="tel:+420777267701" className="contact-link"> 777 267 701</a>
          </p>
          <p><strong>Email:</strong> 
            <a href="mailto:krcmakelly@seznam.cz" className="contact-link"> krcmakelly@seznam.cz</a> 
            <br /><small>(neslouží pro rezervace)</small>
          </p>
        </div>

        <div className="contact__map">
          <img src={Map} alt="Mapa lokace" onClick={handleImageClick} />
          <p>Kliknutím se mapa zvětší</p>
        </div>
      </div>

      <p className="contact__note">Najdete nás v průchodu z náměstí do zámeckého parku.</p>

      {isModalOpen && (
        <div className="modal" onClick={handleCloseModal}>
          <span className="close">&times;</span>
          <img className="modal-content" src={Map} alt="Zvětšená mapa" />
        </div>
      )}
    </section>
  );
  
}

export default Contact
