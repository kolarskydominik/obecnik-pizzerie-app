import styled from "styled-components";
import { dataWebImages } from "../../dataImages";

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

  > div {
    background-color: rgba(0, 0, 0, 0.2);
    margin: 1rem;
    display: flex;
    flex-direction: column;
    overflow: auto;
    max-width: 600px;
    max-height: 80vh;
    border-radius: 20px;
  }
`;

export const DialogAktualne = styled.p`
  display: flex;
  flex-direction: column;
`;

export const DialogContent = styled.div`
  background-color: var(--color-lightYellow);

  margin: 16px;
  display: flex;
  flex-direction: column;
  overflow: auto;
  max-width: 100%;
  max-height: 100%;
  padding-bottom: 1.5rem;
  border-radius: 10px;

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
    font-size: 2rem;
    border-radius: 0 0 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background-color: var(--color-primary80);
    }
  }

  h3 {
    margin: 0.5rem 1.5rem;
    font-size: 1.75rem;
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
    border-radius: 2px;
  }
`;
