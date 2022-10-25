import React from "react";
import { OrderInfoWrap } from "./OrderInfo.elements";
// dataText
import {dataText} from "../../dataText";

function OrderInfo() {
  return (
    <OrderInfoWrap>
      <div>
      <h4>Zóna 1:</h4>
        <p>
          <span>do 6km, zdarma</span> <br />
          Raškovice, Skalice Pražmo, Morávka
        </p>
        <br></br>
        <h4>Zóna 2:</h4>
        <p>
          <span>od 6km do 12km, +55 Kč rozvoz <br />(nad 500 Kč zdarma)</span> <br />
          Krásná, Visalaje, Nižní Lhoty, Vyšní Lhoty
        </p>
        <br></br>
        <h4>Zóna 3:</h4>
        <p>
          <span>dle domluvy</span>
        </p>
      </div>
      <div>
        <h3>Objednávejte na:</h3>
        <a href={dataText.telefon2}>{dataText.telefon}</a>
        <br />
        <br />
        <h4>PROVOZNÍ DOBA</h4>

        <p>
          po-čt: <span>{dataText.otevrenoPizzaPoCt}</span>
        </p>
        <p>
          pá-so: <span>{dataText.otevrenoPizzaPaSo}</span>
        </p>
        <p>
          ne: <span>{dataText.otevrenoPizzaNe}</span>
        </p>
      </div>

    </OrderInfoWrap>
  );
}

export default OrderInfo;
