import {
  MainContainer,
  Heading,
  Text,
  ImageContainer,
  TextContainer,
  ColorContainer,
  Image,
} from "./styles";

import storyImage from "../../../assets/images/hero.jpg";

const Hero = () => {
  return (
    <div>
      <MainContainer>
        <ColorContainer />
        <TextContainer>
          <Heading>FEATURES</Heading>
          <Text>
            We make sure all of our features are designed to be <br /> loved by
            every aspiring and even professional <br /> photograpers who wanted
            to share their stories.
          </Text>
        </TextContainer>

        <ImageContainer>
          <Image src={storyImage} />
        </ImageContainer>
      </MainContainer>
    </div>
  );
};

export default Hero;
