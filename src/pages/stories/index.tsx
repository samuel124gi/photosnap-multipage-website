import { MainContainer } from "./styles";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Card from "./Card";
import FirstContainer from "./FirstContainer";
const Stories = () => {
  return (
    <MainContainer>
      <Header />
      <FirstContainer />
      <Card />
      <Footer />
    </MainContainer>
  );
};

export default Stories;
