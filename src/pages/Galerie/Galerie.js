import React from "react";
// components
import { Navbar, Footer, CopyrightFooter, Gallery } from "../../components";
// styled
import { SectionContainer, SectionWrapper } from "../../globalStyles";
import { SectionHeaderHome } from "./Galerie.elements";
// galleryImages data
import galleryImages from "../../galleryImages";

function Galerie() {
  return (
    <>
      <Navbar />
      <SectionHeaderHome>Galerie</SectionHeaderHome>
      <SectionContainer>
        <SectionWrapper>
          <Gallery galleryImages={galleryImages} />
        </SectionWrapper>
      </SectionContainer>
      <Footer />
      <CopyrightFooter />
    </>
  );
}

export default Galerie;
