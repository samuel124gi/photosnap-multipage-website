import { useState } from "react";
import {
  BudgetContainer,
  OtherBudget,
  SwitchButton,
  CurrentBudget,
  SwitchContainer,
} from "./styles";

const Toggle = () => {
  const [currentColor, setCurrentColor] = useState<string>("#DFDFDF");
  const [backGroundColor, setBackgroundColor] = useState<string>("black");
  const [alignItem, SetAlignItem] = useState<string>("0px");
  const changeColor = () => {
    const newColor = currentColor === "#DFDFDF" ? "black" : "#DFDFDF";
    const Color = backGroundColor === "black" ? "white" : "black";
    const item = alignItem === "0px" ? "30px" : "0px";
    SetAlignItem(item);
    setBackgroundColor(Color);
    setCurrentColor(newColor);
  };

  return (
    <BudgetContainer>
      <CurrentBudget>Monthly</CurrentBudget>
      <SwitchContainer bgColor={currentColor}>
        <SwitchButton
          onClick={changeColor}
          bgColor={backGroundColor}
          alignItem={alignItem}
        />
      </SwitchContainer>
      <OtherBudget>Yearly</OtherBudget>
    </BudgetContainer>
  );
};

export default Toggle;
