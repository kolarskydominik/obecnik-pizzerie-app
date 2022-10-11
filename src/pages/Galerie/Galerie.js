import React from "react";
// components
import { Navbar, Footer, CopyrightFooter, Gallery } from "../../components";
// elements
import { SectionHeaderHome, SectionContainer, SectionWrapper } from "../../globalStyles";
// galleryImages data
import {dataWebImages, dataGalleryImages} from "../../dataImages";

function Galerie() {
  return (
    <>
      <Navbar />
      <SectionHeaderHome image={dataWebImages.galerieHeader}>Galerie</SectionHeaderHome>
      <SectionContainer>
        <SectionWrapper style={{padding: '0'}}>
          <Gallery dataGalleryImages={dataGalleryImages} />
        </SectionWrapper>
      </SectionContainer>
      <Footer />
      <CopyrightFooter />
    </>
  );
}

export default Galerie;
