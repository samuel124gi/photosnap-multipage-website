import {
  MainContainer,
  Heading,
  Text,
  ImageContainer,
  TextContainer,
  ColorContainer,
  Image,
} from "./styles";

import storyImage from "../../../assets/images/pricing-hero.jpg";

const Hero = () => {
  return (
    <div>
      <MainContainer>
        <ColorContainer />
        <TextContainer>
          <Heading>PRICING</Heading>
          <Text>
            Create a your stories, Photosnap is a platform for <br />{" "}
            photographers and visual storytellers. It’s the simple <br /> way to
            create and share your photos.
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
