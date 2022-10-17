import React from "react";

import {CopyContainer} from './CopyrightFooter.elements';

function CopyrightFooter() {
  return (
    <CopyContainer>
      <p>
        &copy;&nbsp;Copyright 2022 Restaurace a Pizzerie Obecník Raškovice | <a rel="noreferrer" href="https://www.kolarsky.eu/" target="_blank">
        Vytvořeno <svg
            className="love"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg> Dominik&nbsp;Kolarský</a>
      </p>
    </CopyContainer>
  );
}

export default CopyrightFooter;
