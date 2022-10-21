import styled from "styled-components";

export const Meal = styled.li`
list-style: none;
`;

export const MealName = styled.h5`
  font-size: 18px;
  color: var(--color-gray90);
  display: flex;
  justify-content: space-between;

  >span:nth-child(2){
    padding-left: 16px;
  }
`;

export const MealDescription = styled.p`
  font-style: italic;
  padding: 0 30px 0 4px;
  color: var(--color-gray80);
  font-size: 15px;

  span {
    white-space: nowrap;
  }
`;
