import React from "react";
import styled from "styled-components";

export const CopyContainer = styled.div`
  width: 100%;
  padding: 1.4rem 0 1.5rem 0;
  /* -webkit-box-shadow: inset 0px 11px 11px -6px rgba(0, 0, 0, 0.3);
  box-shadow: inset 0px 11px 11px -6px rgba(0, 0, 0, 0.3); */
  font-size: 0.75rem;
  /* background-color: #14151a; */
  background-color: black;
  /* background-color: #1E1E1E; */
  /* background-color: rgba(0, 0, 0, 0.9); */
  display: flex;
  place-content: center center;

  p {
    color: rgba(255, 255, 255, 0.8);
    text-align: center;
  }
  a {
    position: relative;
    top: 1.5px;
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    white-space: nowrap;
    &:hover {
      color: rgba(255, 255, 255, 0.7);
    }

    .love {
      height: 1.1rem;
      color: rgb(169, 0, 0);
      position: relative;
      top: 4px;
    }
  }
`;

function CopyrightFooter() {
  return (
    <CopyContainer>
      <p>
        &copy;&nbsp;Copyright 2022 Restaurace a pizzerie Obecník, Raškovice | <a rel="noreferrer" href="https://www.kolarsky.eu/" target="_blank">
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
