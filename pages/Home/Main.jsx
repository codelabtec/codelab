import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import About from '../../components/About/About';
import Cases from '../../components/Cases/Cases';
import Feedbacks from '../../components/Feedbacks/Feedbacks';
import './Main.css'

function Main() {
  

  return (
    <>
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
    </>
  )
}

export default Main;
