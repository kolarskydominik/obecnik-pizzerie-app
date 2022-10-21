import React from "react";
//elements
import { Meal, MealName, MealDescription } from "./MenuList.elements";
import { LineDivider } from "../../globalStyles";

function MenuList({ dataMenu }) {
  return (
    <ul>
      {dataMenu &&
        dataMenu.map((item, index) => {
          return (
            <Meal key={index}>
              <MealName>
                <span>{item.name}</span>
                <span>{item.price}</span>
              </MealName>
              <MealDescription>
                {item.ingredients.join(", ")} <span>{item.allergens}</span>
              </MealDescription>
              <LineDivider />
            </Meal>
          );
        })}
    </ul>
  );
}

export default MenuList;
