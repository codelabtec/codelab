import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import About from '../../components/About/About';
import Cases from '../../components/Cases/Cases';
import Feedbacks from '../../components/Feedbacks/Feedbacks';
import Process from '../../components/Process/Process.jsx';
import Animation from '../../components/Animation/Animation.jsx';
import Newsletter from '../../components/Newsletter/Newsletter.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import './Main.css'

function Main() {
  

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
