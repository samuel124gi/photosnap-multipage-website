import Header from "../../components/Header";
import FirstContainer from "./FirstContainer";
import SecondContainer from "./SecondContainer";
import ThirdContainer from "./ThirdContainer";
import { MainContainer } from "./styles";
import Card from "../../components/Card";
import FeatureCard from "../../shared/FeatureCard";

const Home = () => {
  return (
    <MainContainer>
      <Header />
      <FirstContainer />
      <SecondContainer />
      <ThirdContainer />
      <Card />
      <FeatureCard />
    </MainContainer>
  );
};

export default Home;
