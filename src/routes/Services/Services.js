import React from 'react'
import ServicesCards from '../../components/Cards/Cards'
import '../../assets/Services.css'

function Services() {
  return (
    <>
      <section className='hero'></section>
      <div className='page-services'>
        <h1 className='services-titre'>Mon offre de services</h1>
        <ServicesCards />
      </div>
    </>
  )
}

export default Services
