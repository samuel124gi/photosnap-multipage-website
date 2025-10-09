import Header from "../../components/Header";
import FirstContainer from "./FirstContainer";
import SecondContainer from "./SecondContainer";
import ThirdContainer from "./ThirdContainer";
import { MainContainer } from "./styles";
import ImageGrid from "./ImageGrid";
import Card from "../../shared/Card";

const Home = () => {
  return (
    <MainContainer>
      <Header />
      <FirstContainer />
      <SecondContainer />
      <ThirdContainer />
      <ImageGrid />
      <Card />
    </MainContainer>
  );
};

export default Home;
