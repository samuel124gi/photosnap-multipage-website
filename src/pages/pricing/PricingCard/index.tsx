import {
  MainContainer,
  BudgetContainer,
  OtherBudget,
  SwitchButton,
  CurrentBudget,
  SwitchContainer,
  InnerContainer,
  SmallCard,
  BudgetType,
  BudgetDescription,
  Group,
  BudgetPrice,
} from "./styles";
import Button from "../../../components/Button";

const BUDGET = [
  {
    type: "BASIC",
    description:
      " Includes basic usage of our platform. Recommended for new and aspiring photographers.",
    price: "$19.00",
    period: "Per Month",
  },
  {
    type: "Pro",
    description:
      "More advanced features available. Recommended for photography  veterans and professionals.",
    price: "$39.00",
    period: "Per Month",
  },
  {
    type: "Business",
    description:
      " Additional features available such as more detailed metrics. Recommended for business owners.",
    price: "$99.00",
    period: "Per Month",
  },
];

const PricingCard = () => {
  return (
    <MainContainer>
      {
        <BudgetContainer>
          <CurrentBudget>MONTHLY</CurrentBudget>
          <SwitchContainer>
            <SwitchButton />
          </SwitchContainer>
          <OtherBudget>YEARLY</OtherBudget>
        </BudgetContainer>
      }
      <InnerContainer>
        {BUDGET.map((budget) => (
          <SmallCard>
            <Group>
              <BudgetType>{budget.type}</BudgetType>
              <BudgetDescription>{budget.description}</BudgetDescription>
            </Group>
            <Group>
              <BudgetPrice>{budget.price}</BudgetPrice>
              <BudgetDescription>{budget.price}</BudgetDescription>
            </Group>
            <Button variant="primary" label="PICK PLAN" />
          </SmallCard>
        ))}
      </InnerContainer>
    </MainContainer>
  );
};
export default PricingCard;
