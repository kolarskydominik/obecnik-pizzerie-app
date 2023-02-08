import React from 'react';
import { OrderInfoWrap } from './OrderInfo.elements';
// dataText
import { dataText } from '../../dataText';

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
          <span>
            od 6km do 12km, +55 Kč rozvoz <br />
            (nad 500 Kč zdarma)
          </span>{' '}
          <br />
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
          po: <span>{dataText.otevrenoClose}</span>
        </p>
        <p>
          ut-st: <span>{dataText.otevrenoShort}</span>
        </p>
        <p>
          ct-so: <span>{dataText.otevrenoLong}</span>
        </p>
        <p>
          ne: <span>{dataText.otevrenoClose}</span>
        </p>
        <p style={{ maxWidth: '400px', margin: '0 auto' }}>
          <br />
          Poslední objednávky přijímáme 30&nbsp;minut před koncem pracovní doby.
        </p>
        <p style={{ maxWidth: '400px', margin: '0 auto' }}>
          <br />
          Platit při doručení lze <span>hotově</span> nebo <span>kartou</span>.
        </p>
      </div>
    </OrderInfoWrap>
  );
}

export default OrderInfo;
