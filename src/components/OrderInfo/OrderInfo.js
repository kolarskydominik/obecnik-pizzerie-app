import React from "react";
import { OrderInfoWrap } from "./OrderInfo.elements";

function OrderInfo() {
  return (
    <OrderInfoWrap>
      <h3>Objednávejte telefonicky:</h3>
      <p>po-pá: 11:00-19:30</p>
      <p>so-ne: 12:00-21:30</p>
      <a href="tel:+420123456789">+420 123 456 789</a>
      <p>Platba při doručení, lze i kartou.</p>
      <p>Cena rozvozu: 29kč</p>
    </OrderInfoWrap>
  );
}

export default OrderInfo;
