import Header from "../../components/Header";
import Hero from "./Hero";
import PricingCard from "./PricingCard";
import Beta from "../../shared/Beta";
import Footer from "../../components/Footer";
import { InnerContainer, MainContainer } from "./styles";
import Toggle from "./Toggle";

const BUDGETS = [
  {
    type: "Basic",
    description:
      " Includes basic usage of our platform. Recommended for new and aspiring photographers.",
    price: "$19.00",
    period: "Per Month",
    isPro: false,
  },
  {
    type: "Pro",
    description:
      "More advanced features available. Recommended for photography  veterans and professionals.",
    price: "$39.00",
    period: "Per Month",
    isPro: true,
  },
  {
    type: "Business",
    description:
      " Additional features available such as more detailed metrics. Recommended for business owners.",
    price: "$99.00",
    period: "Per Month",
    isPro: false,
  },
];

const Pricing = () => {
  return (
    <>
      <Header />
      <Hero />

      <MainContainer>
        <Toggle />
        <InnerContainer>
          {BUDGETS.map((budget) => (
            <PricingCard
              type={budget.type}
              description={budget.description}
              price={budget.price}
              period={budget.period}
              isPro={budget.isPro}
              key={budget.type}
            ></PricingCard>
          ))}
        </InnerContainer>
      </MainContainer>

      <Beta />
      <Footer />
    </>
  );
};

export default Pricing;
