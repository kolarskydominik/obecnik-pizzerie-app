import React, { useState, useEffect } from "react";
// icons
import { FaBars, FaTimes } from "react-icons/fa";
// pro obarveni loga
import { IconContext } from "react-icons/lib";
//elements
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./Navbar.elements";
//images
import { dataWebImages } from "../../dataImages";

function Navbar(props) {
  // logika hamburgeru
  const [isOpen, setIsOpen] = useState(false);
  const handleIsOpen = () => setIsOpen(!isOpen);
  const closeMobileMenu = () => setIsOpen(false);

  // logika zmeny barvy pri scrollu
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  // disableBodyScroll
  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "initial";
  }

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <h1>
            <NavLogo to="/" onClick={closeMobileMenu}>
              <img
                src={dataWebImages.logoNavbar}
                alt="Obecník Raškovice logo"
                title="Obecník - restaurace a pizzerie Raškovice"
              />
            </NavLogo>
          </h1>
          <MobileIcon onClick={handleIsOpen}>
            {/* obarveni icon */}
            <IconContext.Provider value={{ color: "#fff" }}>
              {isOpen ? <FaTimes /> : <FaBars />}
            </IconContext.Provider>
          </MobileIcon>
          <NavMenu onClick={handleIsOpen} isOpen={isOpen} scrollNav={scrollNav}>
            <NavItem>
              <NavLinks to="/uvod" onClick={closeMobileMenu}>
                Úvod
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/jidelni-listek" onClick={closeMobileMenu}>
                Jídelní lístek
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/rozvoz" onClick={closeMobileMenu}>
                Rozvoz
              </NavLinks>
            </NavItem>
            {/* <NavItem>
              <NavLinks to="/galerie" onClick={closeMobileMenu}>
                Galerie
              </NavLinks>
            </NavItem> */}
            <NavItem>
              <NavLinks to="/kontakt" onClick={closeMobileMenu}>
                Kontakt
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar;
