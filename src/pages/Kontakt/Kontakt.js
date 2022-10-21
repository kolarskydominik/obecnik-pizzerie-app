import React from "react";
// components
import { Navbar, CopyrightFooter, ContactForm } from "../../components";
// icons
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import {
  HiLocationMarker,
  HiPhone,
  HiMail,
  HiOutlineClock,
} from "react-icons/hi";
// elements
import { SectionHeaderHome } from "../../globalStyles";
import { Container, Wrapper } from "./Kontakt.elements";
import {
  FooterContainer,
  FooterWrap,
  FooterItems,
  FooterHeader,
  FooterItem,
  FooterLink,
  SocialIcons,
  SocialIconLink,
} from "../../components/Footer/Footer.elements";
//images
import { dataWebImages } from "../../dataImages";
//datatext
import {dataText} from "../../dataText";
// maps
const iframe =
  '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d24590.934978238776!2d18.453772263347155!3d49.620306567285624!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8b0c8ce6a9526154!2sRestaurace%20a%20Pizzerie%20Obecn%C3%ADk!5e0!3m2!1sen!2scz!4v1666353675331!5m2!1sen!2scz" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
function Iframe(props) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
    />
  );
}

function Kontakt() {
  return (
    <>
      <Navbar />
      <SectionHeaderHome image={dataWebImages.kontaktHeader}>
        Kontakt
      </SectionHeaderHome>
      <Container>
        <Wrapper>
          <FooterContainer>
            <FooterWrap style={{ flexDirection: "column-reverse" }}>
              {/* address */}
              <FooterItems>
                <FooterHeader>KDE NÁS NAJDETE</FooterHeader>
                <FooterItem>Restaurace Obecník</FooterItem>
                <FooterItem>Raškovice 207, 739 04</FooterItem>
                <FooterItem>
                  <FooterLink
                    href="https://goo.gl/maps/ofZQbcaPbob6QgAD7"
                    target="_blank"
                  >
                    <HiLocationMarker /> zobrazit na mapě
                  </FooterLink>
                </FooterItem>
              </FooterItems>
              {/* kontakty */}
        <FooterItems>
          <FooterHeader>KONTAKTY</FooterHeader>
          <FooterItem>
            <HiPhone /> telefon:<span> {dataText.telefon}</span>
          </FooterItem>
          <FooterItem>
            <HiMail /> email:<span> {dataText.email}</span>
          </FooterItem>
          <SocialIcons>
            <SocialIconLink
              href="https://www.facebook.com"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebookSquare />
            </SocialIconLink>
            <SocialIconLink
              href="https://instagram.com"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram />
            </SocialIconLink>
          </SocialIcons>
        </FooterItems>
        {/* otviracka */}
        <FooterItems>
          <FooterHeader>OTEVÍRACÍ DOBA</FooterHeader>
          <FooterItem>
            <HiOutlineClock /> po-čt:<span> {dataText.otevrenoPoCt}</span>
          </FooterItem>
          <FooterItem>
            <HiOutlineClock /> pá-so:<span> {dataText.otevrenoPaSo}</span>
          </FooterItem>
          <FooterItem>
          <HiOutlineClock /> ne:<span> {dataText.otevrenoNe} &nbsp;</span>
          </FooterItem>
        </FooterItems>
            </FooterWrap>
          </FooterContainer>
          <ContactForm />
        </Wrapper>
      </Container>
      <Iframe iframe={iframe} />
      <CopyrightFooter />
    </>
  );
}

export default Kontakt;
