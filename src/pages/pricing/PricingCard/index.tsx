import {
  SmallCard,
  BudgetType,
  BudgetDescription,
  Group,
  BudgetPrice,
} from "./styles";
import Button from "../../../components/Button";

interface PricingCardProps {
  type: string;
  description: string;
  price: string;
  period: string;
  isPro?: boolean;
}

const proButtonStyles = {
  backgroundColor: "white",
  color: "black",
  border: "none",
};

const PricingCard = ({
  type,
  description,
  price,
  period,
  isPro,
}: PricingCardProps) => {
  return (
    <SmallCard isPro={isPro}>
      <Group>
        <BudgetType>{type}</BudgetType>
        <BudgetDescription>{description}</BudgetDescription>
      </Group>
      <Group>
        <BudgetPrice>{price}</BudgetPrice>
        <BudgetDescription>{period}</BudgetDescription>
      </Group>
      <Button
        variant="primary"
        label="PICK PLAN"
        style={isPro ? proButtonStyles : {}}
      />
    </SmallCard>
  );
};

export default PricingCard;
