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
          <span>do 5km, zdarma</span> <br />
          Raškovice, Pražmo
        </p>
        <br></br>
        <h4>Zóna 2:</h4>
        <p>
          <span>
            od 5km do 10km, <br />
            +55Kč rozvoz (nad 500Kč zdarma,
            <br />
            minimální objednávka 2 pizzy)
          </span>{' '}
          <br />
          Skalice, Morávka, Krásná, Visalaje, Nižní Lhoty, Vyšní Lhoty
        </p>
        <br></br>
        <h4>Zóna 3:</h4>
        <p>
          {' '}
          <span>
            od 10km do 15km,  <br /> +69Kč rozvoz (minimální objednávka 3&nbsp;pizzy){' '}
            <br />
          </span>{' '}
          {/* <span>dle domluvy</span> */}
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
          út: <span>{dataText.otevrenoShort}</span>
        </p>
        <p>
          st-čt: <span>{dataText.otevrenoLong}</span>
        </p>
        <p>
          pá-so: <span>{dataText.otevrenoLonger}</span>
        </p>
        <p>
          ne: <span>{dataText.otevrenoClose}</span>
        </p>
        <p style={{ maxWidth: '400px', margin: '0 auto' }}>
          <br />
          Poslední objednávky pro rozvoz přijímáme v&nbsp;20:00.
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
