import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FooterNav.css";

const FooterNav = () => {
    return (
        <footer className="footer bg-dark text-light">
            <div className="container">
                <div className="row text-md-start">

                    {/* Informations de contact */}
                    <div className="col-12 col-md-4 mb-4">
                        <p className="h5">John Doe</p>
                        <p className="mb-1">40 rue Laure Diebold</p>
                        <p className="mb-1">69009 Lyon, France</p>
                        <p className="mb-1">Tél : 10 20 30 40 50</p>
                        <p className="mb-3">john.doe@gmail.com</p>

                        <div className="d-flex justify-content-md-start gap-3 fs-4 footer-socials">
                            <a href="https://github.com/github-john-doe" target="_blank" rel="noopener noreferrer" className="text-light social-link">
                                <BsGithub />
                            </a>
                            <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="text-light social-link">
                                <BsTwitter />
                            </a>
                            <a href="https://fr.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-light social-link">
                                <BsLinkedin />
                            </a>
                        </div>
                    </div>

                    {/* Liens utiles */}
                    <div className="col-12 col-md-4 mb-4">
                        <h3 className="h5">Liens utiles</h3>
                        <ul className="list-unstyled">
                            <li><Link to="/" className="footer-link">Accueil</Link></li>
                            <li><Link to="/services" className="footer-link">Services</Link></li>
                            <li><Link to="/portfolio" className="footer-link">Portfolio</Link></li>
                            <li><Link to="/contact" className="footer-link">Me contacter</Link></li>
                            <li><Link to="/legales" className="footer-link">Mentions légales</Link></li>
                        </ul>
                    </div>

                    {/* Dernières réalisations */}
                    <div className="col-12 col-md-4 mb-4">
                        <h3 className="h5">Mes dernières réalisations</h3>
                        <ul className="list-unstyled">
                            <li><Link to="/portfolio" className="footer-link">Fresh Food</Link></li>
                            <li><Link to="/portfolio" className="footer-link">Restaurant Akira</Link></li>
                            <li><Link to="/portfolio" className="footer-link">Espace bien-être</Link></li>
                            <li><Link to="/portfolio" className="footer-link">SEO</Link></li>
                            <li><Link to="/portfolio" className="footer-link">Création d'une API</Link></li>
                            <li><Link to="/portfolio" className="footer-link">Maquette d’un site</Link></li>
                        </ul>
                    </div>
                </div>


            </div>
        </footer>
    );
};

export default FooterNav;
