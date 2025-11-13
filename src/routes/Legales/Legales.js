import React, { useEffect } from 'react'
import Mentions from '../../components/Accordion/Accordion'
import '../../assets/css/Legales.css';




function Legales() {
  /* noindex import */
  useEffect(() => {
    const meta = document.createElement('meta');
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);

    return () => {
      document.head.removeChild(meta);
    };
  }, []);
  
  return (
    <>
    <title>Mentions Légales</title>
      <div className="page-legales">
        <h1 className="legales-titre">Mentions Légales</h1>
        <Mentions />
      </div>
    </>
  )
}


export default Legales
