import React from 'react'
import { Helmet } from 'react-helmet';
import Mentions from '../../components/Accordion/Accordion'
import '../../assets/Legales.css';




function Legales() {
  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
        <title>Mentions Légales</title>
      </Helmet>
      <div className="page-legales">
        <h1 className="legales-titre">Mentions Légales</h1>
        <Mentions />
      </div>
    </>
  )
}


export default Legales
