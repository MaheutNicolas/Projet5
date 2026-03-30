import Banner from '../components/Banner';
import img from '../assets/image/banner_about.webp';

function About() {
  return (
    <div className="page">
      <section id="presentation" className="presentation">
        <Banner img={img} />
      </section>

      <section id="faq" className="faq">
        
      </section>
    </div>
  )
}

export default About