import {
  MainContainer,
  Heading,
  Text,
  ImageContainer,
  TextContainer,
  Image,
  ButtonContainer,
  InnerContainer,
} from "./styles";

import SecondImage from "../../../assets/images/beautiful-stories.jpg";
import ButtonImage from "../../../assets/icons/black-arrow.svg";
import Button from "../../../components/Button";

const SecondContainer = () => {
  return (
    <>
      <MainContainer>
        <ImageContainer>
          <Image src={SecondImage} />
        </ImageContainer>
        <TextContainer>
          <InnerContainer>
            <Heading>
              BEAUTIFUL <br /> STORIES <br /> EVERY TIME
            </Heading>

            <Text>
              We provide design templates to ensure your stories <br /> look
              terrific. Easily add photos, text, embed maps and <br /> media
              from other networks. Then share your story with
              <br /> everyone.
            </Text>
            <ButtonContainer>
              <Button variant="primary" label="VIEW THE STORIES" />
              <ButtonImage />
            </ButtonContainer>
          </InnerContainer>
        </TextContainer>
      </MainContainer>
    </>
  );
};

export default SecondContainer;
