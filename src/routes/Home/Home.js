import ProgressBar from '../../components/ProgressBar/ProgressBar'
import ModalHome from '../../components/Modals/Modals';
import '../../assets/css/Home.css';
import aboutImage from '../../assets/images/john-doe-about.jpg';

function Home() {
  return (
    <>
      <title>Home</title>
      <div className='hero-home'>
        <h1>Bonjour, je suis John Doe</h1>
        <h2>Développeur web full stack</h2>
        < ModalHome />
      </div>
      <section className='about-skills'>
        <div className='about'>
          <h3>A propos</h3>
          <img src={aboutImage} alt='John Doe' className='about-image' />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, necessilatibus consectetur tempore perferendis nostrum,
            ex delectus reiciendis impedit aut iure enim placeat? Natus, neque at?
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, necessilatibus consectetur tempore perferendis nostrum,
            ex delectus reiciendis impedit aut iure enim placeat? Natus, neque at?
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, necessilatibus consectetur tempore perferendis nostrum,
            ex delectus reiciendis impedit aut iure enim placeat? Natus, neque at?
          </p>
        </div>
        <div className='skills'>
          <h3>Mes compétences</h3>
          <ProgressBar />
        </div>
      </section>
    </>
  )
}

export default Home
