import Header from "../../components/Header";
import FirstContainer from "./FirstContainer";
import SecondContainer from "./SecondContainer";
import ThirdContainer from "./ThirdContainer";
import { MainContainer } from "./styles";
import Card from "../../components/Card";
import FeatureCard from "../../shared/FeatureCard";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <MainContainer>
      <Header />
      <FirstContainer />
      <SecondContainer />
      <ThirdContainer />
      <Card />
      <FeatureCard />
      <Footer />
    </MainContainer>
  );
};

export default Home;
