// src/index.js
import React from "react";
import { Container } from "reactstrap";
import CustomNavbar from "components/Navbars/DemoNavbar";
import CardsFooter from "components/Footers/CardsFooter";
import Hero from "IndexSections/Hero";
import Services from "IndexSections/Services";
import Testimonials from "IndexSections/Testimonials";
import Contact from "IndexSections/Contact";

class Index extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

  render() {
    return (
      <>
        <style>
          {`
            .main-content {
              padding-top: 80px; /* Ajustez selon la hauteur de la navbar */
            }
            
            .section-hero {
              padding-top: 20px; /* Espace supplémentaire pour le contenu principal */
            }
          `}
        </style>
        
        {/* Barre de navigation */}
        <CustomNavbar />
        
        <main ref="main" className="main-content">
          {/* Section de Héros */}
          <section className="section-hero">
            <Hero />
          </section>
          
          {/* Section des Services */}
          <section className="section section-components bg-light">
            <Container>
              <Services />
            </Container>
          </section>
          
          {/* Section des Témoignages */}
          <section className="section bg-white">
            <Container>
              <Testimonials />
            </Container>
          </section>
          
          {/* Section de Contact */}
          <section className="section section-lg bg-light">
            <Container>
              <Contact />
            </Container>
          </section>
        </main>
        
        {/* Pied de page */}
        <CardsFooter />
      </>
    );
  }
}

export default Index;
