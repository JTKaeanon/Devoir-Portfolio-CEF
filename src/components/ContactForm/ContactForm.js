import React, { useState } from "react";
import './ContactForm.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    tel: "",
    sujet: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields
    const allFilled = Object.values(formData).every((field) => field.trim() !== "");
    if (!allFilled) {
      alert("Merci de remplir tous les champs !");
      return;
    }

    console.log("Données envoyées :", formData);

    // Reset from
    setFormData({
      nom: "",
      email: "",
      tel: "",
      sujet: "",
      message: "",
    });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input
        name="nom"
        placeholder="Votre nom"
        value={formData.nom}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Votre adresse email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="tel"
        name="tel"
        placeholder="Votre numéro de téléphone"
        value={formData.tel}
        onChange={handleChange}
        required
      />
      <input
        name="sujet"
        placeholder="Sujet"
        value={formData.sujet}
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        placeholder="Votre message"
        value={formData.message}
        onChange={handleChange}
        required
      />

      <button type="submit" className="btn btn-primary mt-3 mx-auto d-block">
        Envoyer
      </button>
    </form>
  );
}
