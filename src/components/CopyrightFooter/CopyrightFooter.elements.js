import styled from "styled-components";

export const CopyContainer = styled.div`
  width: 100%;
  padding: .9rem 0 1rem 0;
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
    top: 1px;
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