import styled from "styled-components";

export const DialogWrap = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  background-color: var(--color-gray50);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const DialogAktualne = styled.p`
  display: flex;
  flex-direction:column;
`;

export const DialogContent = styled.div`
  background-color: var(--color-lightYellow);
  margin: 1rem;
  display: flex;
  flex-direction: column;
  overflow: auto;
  max-width: 600px;
  max-height: 80vh;
  padding-bottom: 1.5rem;

  button {
    width: 2.5rem;
    height: 2.5rem;
    margin-left: auto;
    border: unset;
    background-color: var(--color-primary);
    color: var(--color-lightYellow);
    cursor: pointer;
    line-height: 2.5rem;
    font-weight: bold;
    font-size: 1.2rem;

    &:hover {
      background-color: var(--color-primary80);
    }
  }

  h3 {
    margin: 0.5rem 1.5rem;
    font-size: 1.4rem;
    color: var(--color-primary);
    text-shadow: 0px 1px 2px rgba(0, 0, 0, 1);
  }

  p {
    margin: 0.5rem 1.5rem;
  }

  .dialogBtn {
    margin: 0.5rem 1.5rem;
    padding: 0.25rem 0.5rem;
    width: fit-content;
  }
`;
