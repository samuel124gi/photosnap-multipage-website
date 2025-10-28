import styled from "@emotion/styled";
import colors from "../../../styles/colors";

interface SmallCardPropps {
  isPro?: boolean;
}

export const SmallCard = styled.div<SmallCardPropps>`
  background-color: #f5f5f5;
  padding: 50px 25px;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-between;
  height: 407px;
  transition: all 0.3s ease;

  ${({ isPro }) =>
    isPro &&
    `
    background-color: black;
    color: white;
    border: none;
    height: 470px;
    border-top: 5px solid;
    border-image: linear-gradient(to right, #ff7b7b, #007bff 100%);
    border-image-slice: 1;
  `}
`;

export const BudgetType = styled.h1`
  font-size: 24px;
  font-weight: bold;
  line-height: 25px;
  letter-spacing: 0px;
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const BudgetDescription = styled.p`
  font-size: 15px;
  line-height: 25px;
  opacity: 0.5;
`;
export const BudgetPrice = styled.h1`
  font-size: 40px;
  line-height: 48px;
  letter-spacing: 4.17px;
  font-weight: bold;
`;
