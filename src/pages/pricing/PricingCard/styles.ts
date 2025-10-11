import styled from "@emotion/styled";
import colors from "../../../styles/colors";

// interface SwitchButtonProps {
//   left: boolean;
// }

export const MainContainer = styled.div`
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;

export const BudgetContainer = styled.div`
  margin: 0px auto;
  height: 32px;
  width: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
`;
export const SwitchContainer = styled.div`
  margin: 0px auto;
  height: 32px;
  width: 100px;
  border-radius: 16px;
  display: flex;
  gap: 32px;
  align-items: center;
  padding-left: 10px;
  background: #979797;
`;
export const CurrentBudget = styled.p`
  font-size: 18px;
  font-weight: bold;
  line-height: 25px;
  color: ${colors.black};
`;
export const OtherBudget = styled.p`
  font-size: 18px;
  font-weight: bold;
  line-height: 25px;
  color: ${colors.black};
  opacity: 0.5;
`;
export const InnerContainer = styled.div`
  width: 1000px;
  display: flex;
  align-items: center;
  gap: 30px;
`;
export const SwitchButton = styled.button`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${colors.black};
  border: none;
  transition: all 0.3s ease;
`;

export const SmallCard = styled.div`
  background-color: #f5f5f5;
  padding: 50px 25px;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-between;
  height: 407px;
`;

export const BigCard = styled.div`
  background-color: ${colors.black};
  color: white;
  height: 100%;
  padding: 80px 40px;
  display: flex;
  flex-direction: column;
  text-align: center;

  justify-content: space-between;
  height: 470px;
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
