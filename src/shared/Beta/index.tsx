import {
  TextContainer,
  ImageContainer,
  MainContainer,
  Title,
  Image,
  ButtonContainer,
  ColorContainer,
} from "./styles";
import image from "../../assets/images/bg-beta.jpg";
import Button from "../../components/Button";
import Arrow from "../../assets/icons/button-arrow.svg";

const Beta = () => {
  return (
    <MainContainer>
      <ColorContainer />
      <ImageContainer>
        <Image src={image} />
      </ImageContainer>
      <TextContainer>
        <Title>
          WE’RE IN BETA. <br /> GET YOUR INVITE <br /> TODAY!
        </Title>
        <ButtonContainer>
          <Button variant="secondary" label="READ THE STORY" />
          <Arrow />
        </ButtonContainer>
      </TextContainer>
    </MainContainer>
  );
};

export default Beta;
