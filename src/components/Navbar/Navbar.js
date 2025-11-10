import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"
import "./Navbar.css";


const Navbar = () => {
    const [showCollapsedNav, setShowCollapsedNav] = useState(false)
    const [activeNavLink, setactiveNavLink] = useState('')

    const location = useLocation()

    const handleNavButton = () => {
        setShowCollapsedNav(prevShowCollapsedNav => !prevShowCollapsedNav)
    }

    const handleNavLink = (e) => {
        setShowCollapsedNav(false)
        setactiveNavLink(e.target.innerHTML)

    }

    useEffect(() => {
       const path = location.pathname
       if (path === '/') setactiveNavLink ('HOME')
    }, [location]);


    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <p className="navbar-brand">John Doe</p>
                <button className={showCollapsedNav ? "navbar-toggler collapsed" : "navbar-toggler"} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded={showCollapsedNav ? "true" : "false"} aria-label="Toggle navigation" onClick={handleNavButton}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={showCollapsedNav ? "collapse navbar-collapse show" : "collapse navbar-collapse"} id="navbarNav">
                    <div className="navbar-nav">

                        <Link className={activeNavLink === "HOME" ? "nav-link active" : "nav-link"} aria-current="page" to="/" onClick={handleNavLink}>HOME</Link>

                        <Link className={activeNavLink === "SERVICES" ? "nav-link active" : "nav-link"} to="/services" onClick={handleNavLink}>SERVICES</Link>

                        <Link className={activeNavLink === "PORTFOLIO" ? "nav-link active" : "nav-link"} to="/portfolio" onClick={handleNavLink}>PORTFOLIO</Link>

                        <Link className={activeNavLink === "CONTACT" ? "nav-link active" : "nav-link"} to="/contact" onClick={handleNavLink}>CONTACT</Link>

                        <Link className={activeNavLink === "MENTIONS LÉGALES" ? "nav-link active" : "nav-link"} to="/legales" onClick={handleNavLink} >MENTIONS LÉGALES</Link>


                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar