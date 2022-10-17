import React from "react";
import { OrderInfoWrap } from "./OrderInfo.elements";

function OrderInfo() {
  return (
    <OrderInfoWrap>
      <div>
      <h3>Objednávejte na:</h3>
      <a href="tel:+420123456789">+420 123 456 789</a>
      <br/>
      <p>po-čt: <span>11:00-21:00</span></p>
      <p>pá-so: <span>11:00-22:00</span></p>
      <p>ne:  <span>zavřeno</span></p>
      <p><br/>Platit při doručení lze <span>hotově</span>, <span>kartou</span> i <span>stravenkami</span>.</p>
      </div>
      <div>
          <h4>Zóna 1:</h4>
          <p><span>zdarma</span> <br/>Raškovice, Pražmo, Skalice</p>
          <h4>Zóna 2:</h4>
          <p><span>+45 Kč rozvoz (nad 500 Kč zdarma)</span> <br/>Morávka, Krásná, Visalaje, Nižní Lhoty, Vyšní Lhoty</p>
          <h4>Zóna 3:</h4>
          <p><span>+85 Kč rozvor (min. objednávka 200 Kč, nad 500 Kč zdarma)</span><br/>Nošovice, Hnojník, Střítež, Dobratice, Komorní Lhotka, Vojkovice</p>
      </div>
    </OrderInfoWrap>
  );
}

export default OrderInfo;
