import React from "react";
import { Navbar, Footer, CopyrightFooter } from "../../components";

import styled from "styled-components";
import {
  SectionContainer,
  SectionWrapper,
  SectionHeader,
} from "../../globalStyles";
import img from "../../images/pizza.jpg";

export const SectionHeaderHome = styled(SectionHeader)`
  background-image: url(${img});
  height: 60vh;
  background-attachment: fixed;
  position: relative;
  z-index: 0;

  &:before {
    background: linear-gradient(
      var(--color-gray80),
      var(--color-gray30),
      var(--color-gray30)
    );
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
  }
  ${SectionHeader}
`;

export const Container = styled(SectionContainer)``;
export const Wrapper = styled(SectionWrapper)``;

function Rozvoz() {
  return (
    <>
      <Navbar />
      <SectionHeaderHome>Rozvoz</SectionHeaderHome>
      <Container>
        <Wrapper>
          test page Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Dicta excepturi accusantium exercitationem maxime harum. Dolorem a
          similique perferendis perspiciatis vel magni adipisci. Voluptates sed
          excepturi et mollitia necessitatibus aut quo qui iure architecto!
          Praesentium incidunt delectus accusamus perspiciatis, esse minima
          eveniet dignissimos doloribus maxime pariatur, inventore quibusdam.
          Quas molestiae veniam magni commodi tenetur totam iste voluptas
          corporis deleniti vitae, impedit culpa voluptatem, natus iure dicta,
          odit repellat eaque nisi? Cum vitae labore voluptatem autem maiores
          soluta tempora tempore rem consequuntur earum sapiente laboriosam
          suscipit, nisi mollitia voluptatibus assumenda exercitationem dolore,
          est alias facilis iusto eaque distinctio incidunt. Odio nam
          consectetur saepe, sed nihil similique, illo corporis aliquam nesciunt
          ipsum accusamus fugiat rem. Magnam, unde? Numquam deleniti accusamus
          deserunt ratione molestiae, quia nulla, dolorum nobis blanditiis
          dolore recusandae soluta hic ad voluptas distinctio at ut. Iste
          aperiam magnam est a qui fuga soluta facere. Fugit quidem voluptatem
          quos facilis blanditiis enim obcaecati provident esse quod. Laudantium
          ipsum deserunt repudiandae vero. Sed ipsum fuga nemo quibusdam
          repellendus suscipit ea distinctio eveniet quam nostrum laudantium,
          dignissimos porro deserunt nesciunt explicabo voluptates autem tempore
          alias harum mollitia libero dolorem. Praesentium ducimus tenetur
          incidunt qui! Illum tenetur adipisci beatae ipsam sunt nesciunt optio,
          eligendi soluta eius officiis porro, error fugiat harum nemo minus
          quaerat fugit incidunt perferendis, id quidem sint modi deserunt!
          Nostrum exercitationem eos excepturi tempora impedit quidem, quam
          laboriosam at quaerat, reprehenderit voluptatibus iure, itaque
          officiis dolorem ipsa adipisci voluptatem porro illum dolores a
          quaerat architecto. Alias quo, ex sapiente minima ad deleniti saepe
          quasi, ipsam perferendis, voluptatem dolore id molestiae minus nulla
          maxime ipsum fugit error voluptatibus quisquam cum modi accusamus esse
          debitis eum. Recusandae earum sit libero omnis sed. Necessitatibus
          quidem rerum facilis velit harum hic dignissimos reprehenderit
          doloribus repellat! Eum corrupti qui nam ab iure, architecto
          laboriosam laudantium. Itaque molestias dignissimos repellat libero
          ratione saepe incidunt perferendis, assumenda animi aut quibusdam est
          dolorem, qui, officiis alias? Sit, tempora consectetur voluptate
          soluta harum at eveniet sequi quisquam cum officia nihil amet saepe
          est molestias nobis. Illum nobis atque doloremque beatae cupiditate?
          Quo, ex libero mollitia aliquam culpa dolore voluptas possimus placeat
          nostrum sequi suscipit corporis illo ab earum ratione doloremque illum
          omnis excepturi modi ad! Saepe deserunt eaque, laboriosam animi
          explicabo quas laborum libero adipisci exercitationem mollitia
          assumenda optio cupiditate ullam corporis enim veritatis porro veniam,
          voluptatem voluptas velit magnam. Molestiae amet tempore suscipit
          magnam.
        </Wrapper>
      </Container>
      <Footer />
      <CopyrightFooter />
    </>
  );
}

export default Rozvoz;
