import React from "react";
//elements
import { Meal, MealName, MealDescription } from "./MenuList.elements";
import { LineDivider } from "../../globalStyles";

function MenuList({ dataMenu }) {
  return (
    <div>
      {dataMenu &&
        dataMenu.map((item) => {
          return (
            <Meal>
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
    </div>
  );
}

export default MenuList;
