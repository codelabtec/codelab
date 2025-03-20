import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import About from '../../components/About/About';
import Cases from '../../components/Cases/Cases';
import Feedbacks from '../../components/Feedbacks/Feedbacks';
import Process from '../../components/Process/Process.jsx';
import Animation from '../../components/Animation/Animation.jsx';
import Newsletter from '../../components/Newsletter/Newsletter.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import { Helmet } from 'react-helmet';
import './Main.css'

function Main() {
  
  <Helmet>
    <title>CodeLab Tecnologia | Transformando Ideias em Soluções Digitais Únicas</title>
    <meta
      name="description"
      content="Agência especializada em desenvolvimento web e mobile, unindo design criativo, tecnologia de ponta e estratégia para impulsionar marcas e gerar resultados mensuráveis para seu negócio."
    />
    <meta name="keywords" content="desenvolvimento web, aplicativos, design criativo, tecnologia, soluções digitais, agência digital" />
    <meta property="og:title" content="CodeLab Tecnologia - Soluções Digitais que Transformam Negócios" />
    <meta property="og:description" content="Transformamos ideias em soluções digitais únicas com design criativo e tecnologia de ponta para impulsionar sua marca no mercado digital." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.codelabtec.com/" />
    <meta property="og:image" content="https://www.codelab.com/public/thumb.png" />
    <meta name="twitter:card" content="summary_large_image" />
    <link rel="canonical" href="https://www.codelabtec.com/" />
  </Helmet>

  return (
    <section className='main'>
      <header className='header'>
        <Header />
      </header>
      <main className='banner'>
        <Banner />
      </main>
      <section className='about'>
        <About />
      </section>
      <section className='cases'>
        <Cases />
      </section>
      <section className='feedbacks'>
        <Feedbacks />
      </section>
      <section className='process'>
        <Process />
      </section>
      <section className='animation'>
        <Animation />
      </section>
      <section className='newsletter'>
        <Newsletter />
      </section>
      <section>
        <Footer />
      </section>
    </section>

  )
}

export default Main;
