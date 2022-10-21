import React from 'react'
import styled from 'styled-components'
// images
import { dataWebImages } from "../../dataImages";

export const Wrapper = styled.div`
display: flex;
width: 100%;
height: 100vh;
justify-content: center;
place-items: center;

img {
    animation:r 5s linear infinite;
}
@keyframes r {
 to {transform:rotate(360deg)}
}
`


function Fallback() {
  return (
    <Wrapper>
                <img
          src={dataWebImages.logoIcon}
          alt="Obecník logo loading"
          title="Obecník"
        />
    </Wrapper>
  )
}

export default Fallback