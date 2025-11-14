import React from "react";
import '../../assets/css/Contact.css';
import ContactForm from '../../components/ContactForm/ContactForm';
import { BsMap, BsGeoAlt, BsPhone, BsEnvelopeAt } from 'react-icons/bs';



function Contact() {
  return (
    <>
    <title>Contact</title>
    <div className='page-contact'>
      <section className='contact-titre'>
        <h1>Contact</h1>
        <p>Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact</p>
      </section>

      <section className="form-map">
        <div className="form">
          <h3>Formulaire de contact</h3>
          <ContactForm />
        </div>
        <div className="map">
          <h3>Mes coordonnées</h3>
          <h4>John Doe</h4>
          <p><BsMap /> 40 rue Laure Diebold</p>
          <p><BsGeoAlt /> 69009 Lyon, France</p>
          <p><BsPhone /> 10 20 30 40 50</p>
          <p><BsEnvelopeAt /> john.doe@gmail.com</p>
          <div className="map-container">
          <iframe
            title="Localisation Lyon"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5565.280248356809!2d4.799122531299901!3d45.77840203878227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1763130244769!5m2!1sfr!2sfr"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          </div>

        </div>
      </section>
    </div>
    </>
  );
}

export default Contact;
