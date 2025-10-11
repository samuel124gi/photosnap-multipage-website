import {
  MainContainer,
  Heading,
  Text,
  ImageContainer,
  TextContainer,
  Image,
  ButtonContainer,
} from "./styles";

import storyImage from "../../../assets/images/designed-for-everyone.jpg";
import ButtonImage from "../../../assets/icons/black-arrow.svg";
import Button from "../../../components/Button";

const ThirdContainer = () => {
  return (
    <MainContainer>
      <TextContainer>
        <Heading>
          DESIGNED FOR <br /> EVERYONE
        </Heading>
        <Text>
          Photosnap can help you create stories that resonate <br /> with your
          audience. Our tool is designed for <br /> photographers of all levels,
          brands, businesses you <br /> name it.
        </Text>
        <ButtonContainer>
          <Button variant="primary" label="VIEW THE STORIES" />
          <ButtonImage />
        </ButtonContainer>
      </TextContainer>
      <ImageContainer>
        <Image src={storyImage} />
      </ImageContainer>
    </MainContainer>
  );
};

export default ThirdContainer;
