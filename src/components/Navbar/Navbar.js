import React, { useState, useEffect } from "react";
// ikony hamburgeru
import { FaBars, FaTimes } from "react-icons/fa";
// pro obarveni loga
import { IconContext } from "react-icons/lib";

// import elements
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./Navbar.elements";

import logo from '../../obecnik-logo.png'

function Navbar() {
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

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={closeMobileMenu}>

            <img src={logo}/>
          </NavLogo>
          
          <MobileIcon onClick={handleIsOpen}>
            {/* obarveni icon */}
            <IconContext.Provider value={{ color: "#fff" }}>
              {isOpen ? <FaTimes /> : <FaBars />}
            </IconContext.Provider>
          </MobileIcon>
          <NavMenu onClick={handleIsOpen} isOpen={isOpen}>
            <NavItem>
              <NavLinks to="/restaurace" onClick={closeMobileMenu}>
                Restaurace
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/menu" onClick={closeMobileMenu}>
                Menu
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/pizza" onClick={closeMobileMenu}>
                Pizza
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/galerie" onClick={closeMobileMenu}>
                Galerie
              </NavLinks>
            </NavItem>
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
