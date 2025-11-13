import React from "react";
import { Link } from "react-router-dom";
import "./FooterNav.css"; // on importe le CSS séparé

const FooterNav = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <nav className="footer-nav">
                    <Link to="/" className="footer-link">Accueil</Link>
                    <Link to="/services" className="footer-link">Services</Link>
                    <Link to="/portfolio" className="footer-link">Portfolio</Link>
                    <Link to="/contact" className="footer-link">Me contacter</Link>
                    <Link to="/legales" className="footer-link">Mentions légales</Link>
                </nav>
            </div>
        </footer>
    );
};

export default FooterNav;
