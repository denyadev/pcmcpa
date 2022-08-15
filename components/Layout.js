import Hero from '../components/Hero.js'
import Services from '../components/Services.js'
import Contact from '../components/Contact.js'
import Header from '../components/Header.js'


function Layout() {
  return (
    <>
        <Header/>
        <section id="home">
            <Hero/>
        </section>
        <section id="services">
            <Services/>
        </section>
        <section id="contact">
            <Contact/>
        </section>
    </>
  )
}

export default Layout