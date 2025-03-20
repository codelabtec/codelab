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
  
 

  return (
    <section className='main'>

      <Helmet>
          <title>CodeLab Tecnologia | Transformando Ideias em Soluções Digitais Únicas</title>
          <meta
            name="description"
            content="Agência especializada em desenvolvimento web e mobile, unindo design criativo, tecnologia de ponta e estratégia para impulsionar marcas e gerar resultados mensuráveis para seu negócio. Solicite um orçamento hoje!"
          />
          <meta name="keywords" content="desenvolvimento web, aplicativos mobile, design de interface, UI/UX design, desenvolvimento fullstack, criação de sites, sistemas web, aplicativos personalizados, programação react, empresa tecnologia" />
          <meta property="og:title" content="CodeLab Tecnologia - Soluções Digitais que Transformam Negócios" />
          <meta property="og:description" content="Transformamos ideias em soluções digitais únicas com design criativo e tecnologia de ponta para impulsionar sua marca no mercado digital." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.codelabtec.com/" />
          <meta property="og:image" content="https://www.codelabtec.com/public/thumb.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <link rel="canonical" href="https://www.codelabtec.com/" />

          <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "CodeLab Tecnologia",
      "url": "https://www.codelabtec.com",
      "logo": "https://www.codelabtec.com/../../src/assets/logo.svg'",
      "description": "Agência especializada em desenvolvimento web e mobile, unindo design criativo, tecnologia de ponta e estratégia para impulsionar marcas e gerar resultados mensuráveis para seu negócio.",
      "sameAs": [
        "https://www.instagram.com/codelabtec",
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+5522992877496",
        "contactType": "customer service",
        "email": "wearecodelab@gmail.com",
        "availableLanguage": "Portuguese"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Rio de Janeiro",
        "addressRegion": "RJ",
        "addressCountry": "BR"
      },
      "offers": [
        {
          "@type": "Offer",
          "name": "Desenvolvimento Web",
          "description": "Criação de sites e sistemas web personalizados"
        },
        {
          "@type": "Offer",
          "name": "Desenvolvimento Mobile",
          "description": "Aplicativos para Android e iOS"
        },
        {
          "@type": "Offer",
          "name": "Design de Interface",
          "description": "UI/UX design para produtos digitais"
        }
      ]
    })}

  </script>

        </Helmet>

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
