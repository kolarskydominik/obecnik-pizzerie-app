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
// maps
const iframe =
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.067922118789!2d18.464188915729775!3d49.62259457936968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4714099c38542849%3A0x5881bb0c3ebae8e3!2sRa%C5%A1kovice%20207%2C%20739%2004%20Ra%C5%A1kovice!5e1!3m2!1sen!2scz!4v1664813316176!5m2!1sen!2scz" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
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
                    href="https://www.google.com/maps"
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
                  <HiPhone /> telefon:<span> +420 123 456 789</span>
                </FooterItem>
                <FooterItem>
                  <HiMail /> email:<span> info@pizzerieobecnik.cz</span>
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
                  <HiOutlineClock /> po-pá:<span> 11:00-20:00</span>
                </FooterItem>
                <FooterItem>
                  <HiOutlineClock /> so-ne:<span> 12:00-22:00</span>
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
