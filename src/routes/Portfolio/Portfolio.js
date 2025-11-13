import React from 'react'
import '../../assets/css/Portfolio.css'
import PortfolioCards from '../../components/PortfolioCards/PortfolioCards'

function Portfolio() {


  return (
    <>
       <title>Portfolio</title>
      <p className='hero-portfolio'></p>
      <div className='page-portfolio'>
        <section className='portfolio-titre'>
          <h1> Portfolio</h1>
          <p>Voici quelques-unes de mes réalisations</p>
        </section>
        <PortfolioCards/>
      </div>
    </>
  )
}

export default Portfolio
