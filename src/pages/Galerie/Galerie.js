import React from "react";
import styled from "styled-components";

import {
  SectionContainer,
  SectionWrapper,
  SectionHeader,
} from "../../globalStyles";
import img from "../../images/galerie.jpg";

// galleryImages
import galleryImages from '../../galleryImages'
import { Gallery } from "../../components";

export const SectionHeaderHome = styled(SectionHeader)`
  background-image: url(${img});
  height: 60vh;
  background-attachment: fixed;
  position: relative;
  z-index: 0;

  &:before {
    background: var(--color-gray30);
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
  }
  ${SectionHeader}
`;
export const Container = styled(SectionContainer)``;
export const Wrapper = styled(SectionWrapper)``;


function Galerie() {




  return (
    <>
      <SectionHeaderHome>Galerie</SectionHeaderHome>
      <Container>
        <Wrapper>
          <Gallery
            galleryImages={galleryImages} />
        </Wrapper>
      </Container>
    </>
  );
}

export default Galerie;
