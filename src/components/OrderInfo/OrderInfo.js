import React from "react";
import { OrderInfoWrap } from "./OrderInfo.elements";
// dataText
import {dataText} from "../../dataText";

function OrderInfo() {
  return (
    <OrderInfoWrap>
      <div>
        <h3>Objednávejte na:</h3>
        <a href={dataText.telefon2}>{dataText.telefon}</a>
        <br />
        <p>
          po-čt: <span>{dataText.otevrenoPizzaPoCt}</span>
        </p>
        <p>
          pá-so: <span>{dataText.otevrenoPizzaPaSo}</span>
        </p>
        <p>
          ne: <span>{dataText.otevrenoPizzaNe}</span>
        </p>
        <p>
          <br />
          Platit při doručení lze <span>hotově</span>, <span>kartou</span> i{" "}
          <span>stravenkami</span>.
        </p>
      </div>
      <div>
        <h4>Zóna 1:</h4>
        <p>
          <span>zdarma</span> <br />
          Raškovice, Pražmo, Skalice
        </p>
        <br></br>
        <h4>Zóna 2:</h4>
        <p>
          <span>+55 Kč rozvoz (nad 500 Kč zdarma)</span> <br />
          Morávka, Krásná, Visalaje, Nižní Lhoty, Vyšní Lhoty, Nošovice,
          Hnojník, Střítež, Dobratice, Komorní Lhotka, Vojkovice
        </p>
      </div>
    </OrderInfoWrap>
  );
}

export default OrderInfo;
