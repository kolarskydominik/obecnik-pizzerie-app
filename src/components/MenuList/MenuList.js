import React from "react";

import { Meal, Meal__name, Meal__description } from "./MenuList.elements";
import { LineDivider } from "../../globalStyles";

function MenuList({ dataMenu }) {
  return (
    <div>
      {dataMenu &&
        dataMenu.map((item) => {
          return (
            <Meal>
              <Meal__name>
                <span>{item.name}</span>
                <span>{item.price}</span>
              </Meal__name>
              <Meal__description>
                {item.ingredients.join(", ")} <span>{item.allergens}</span>
              </Meal__description>
              <LineDivider />
            </Meal>
          );
        })}
    </div>
  );
}

export default MenuList;
