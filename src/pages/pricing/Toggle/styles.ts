import styled from "@emotion/styled";
import colors from "../../../styles/colors";

interface BgColor {
  bgColor: string;
  alignItem?: string;
}

export const BudgetContainer = styled.div`
  margin: 0px auto;
  // height: 100px;
  width: 225px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const SwitchContainer = styled.div<BgColor>`
  margin: 0px auto;
  height: 32px;
  width: 64px;
  border-radius: 16px;
  display: flex;
  gap: 32px;
  padding-left: 5px;
  align-items: center;
  background-color: ${(props) => props.bgColor};
`;
export const SwitchButton = styled.button<BgColor>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${(props) => props.bgColor};
  border: none;
  margin-left: ${(props) => props.alignItem};
  transition: all 0.3s ease;
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
