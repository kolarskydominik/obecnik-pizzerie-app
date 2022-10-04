import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 600px;
  flex: 1;

  p{
    margin: 2rem 0 3rem 0;
    max-width: 450px;
    text-align: center;
    color: var(--color-white90);
    font-weight: 500;
    font-size: 1.1rem;

    @media screen and (min-width: 600px) {
      margin: 2rem 2rem 3rem 2rem;

    }
  }

  input,
  textarea {
    border: none;
    border-radius: 1px;
    width: 90%;
    max-width: 450px;
    height: 2rem;
    padding: 0.5rem;
    margin: 0.5rem;
    background-color: var(--color-lightYellow);
    color: var(--color-black);
    transition: 0.4s ease;
  }

  input:focus,
  input:hover,
  textarea:focus,
  textarea:hover {
    outline: none;
    /* outline: 1px solid var(--color-primary80); */
    box-shadow: 0 0 5px var(--color-primary80);
    background-color: rgba(212, 157, 86, 0.1);
    color: var(--color-lightYellow);
  }

  input:focus::placeholder,
  input:hover::placeholder,
  textarea:hover::placeholder,
  textarea:focus::placeholder {
    color: var(--color-lightYellow);
  }

  input[type="submit"] {
    width: 200px;
    height: 40px;
    margin: 1rem 0.5rem;
    padding: 0;
    text-decoration: none;
    white-space: nowrap;
    font-size: 1.1rem;
    background: unset;
    cursor: pointer;

    color: var(--color-primary);
    border: 2px solid var(--color-primary);

    &:hover {
      color: var(--color-lightYellow);
      background: var(--color-primary);
      font-weight: 500;
      box-shadow: 0 0 5px var(--color-primary80);
    }
  }

  textarea {
    height: 6rem;

    @media screen and (min-width: 600px) {
      height: 7rem;
    }
  }
`;
