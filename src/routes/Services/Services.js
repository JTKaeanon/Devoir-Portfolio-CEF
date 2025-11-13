import React from 'react'
import ServicesCards from '../../components/ServicesCards/ServicesCards'
import '../../assets/css/Services.css'

function Services() {
  return (
    <>
      <p className='hero-services'></p>
      <div className='page-services'>
        <section className='services-titre'>
          <h1>Mon offre de services</h1>
          <p>Voici les prestations sur lesquelles je peux intervenir</p>
        </section>
        <ServicesCards />
      </div>
    </>
  )
}

export default Services
