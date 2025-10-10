import {
  MainContainer,
  BudgetContainer,
  OtherBudget,
  SwitchButton,
  CurrentBudget,
  SwitchContainer,
  InnerContainer,
  SmallCard,
  BigCard,
  BudgetType,
  BudgetDescription,
  Group,
  BudgetPrice,
} from "./styles";
import Button from "../../../components/Button";

const PricingCard = () => {
  return (
    <MainContainer>
      <BudgetContainer>
        <CurrentBudget>MONTHLY</CurrentBudget>
        <SwitchContainer>
          <SwitchButton />
        </SwitchContainer>
        <OtherBudget>YEARLY</OtherBudget>
      </BudgetContainer>

      <InnerContainer>
        <SmallCard>
          <Group>
            <BudgetType>Basic</BudgetType>
            <BudgetDescription>
              Includes basic usage of our platform. <br /> Recommended for new
              and aspiring <br /> photographers.
            </BudgetDescription>
          </Group>
          <Group>
            <BudgetPrice>$19.00</BudgetPrice>
            <BudgetDescription>Per Month</BudgetDescription>
          </Group>
          <Button variant="primary" label="PICK PLAN" />
        </SmallCard>
        <BigCard>
          <Group>
            <BudgetType>Pro</BudgetType>
            <BudgetDescription>
              More advanced features available. <br /> Recommended for
              photography <br /> veterans and professionals.
            </BudgetDescription>
          </Group>
          <Group>
            <BudgetPrice>$39.00</BudgetPrice>
            <BudgetDescription>Per Month</BudgetDescription>
          </Group>
          <Button variant="primary" label="PICK PLAN" />
        </BigCard>
        <SmallCard>
          <Group>
            <BudgetType>Business</BudgetType>
            <BudgetDescription>
              Additional features available such as <br /> more detailed
              metrics. Recommended <br /> for business owners.
            </BudgetDescription>
          </Group>
          <Group>
            <BudgetPrice>$99.00</BudgetPrice>
            <BudgetDescription>Per Month</BudgetDescription>
          </Group>
          <Button variant="primary" label="PICK PLAN" />
        </SmallCard>
      </InnerContainer>
    </MainContainer>
  );
};

export default PricingCard;
