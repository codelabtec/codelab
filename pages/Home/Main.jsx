import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import About from '../../components/About/About';
import './Main.css'

function Main() {
  

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Banner />
      </main>
      <section>
        <About />
      </section>
    </>
  )
}

export default Main;
