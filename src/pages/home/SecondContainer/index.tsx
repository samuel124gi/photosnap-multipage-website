import {
  MainContainer,
  Heading,
  Text,
  ImageContainer,
  TextContainer,
} from "./styles";

import SecondImage from "../../../assets/desktop.svg";
import ButtonImage from "../../../assets/black-arrow.svg";
import Button from "../../../components/Button";

const SecondContainer = () => {
  return (
    <>
      <MainContainer>
        <ImageContainer>
          <SecondImage />
        </ImageContainer>
        <TextContainer>
          <Heading>
            {" "}
            BEAUTIFUL <br /> STORIES <br /> EVERY TIME
          </Heading>

          <Text>
            We provide design templates to ensure your stories <br /> look
            terrific. Easily add photos, text, embed maps and <br /> media from
            other networks. Then share your story with
            <br /> everyone.
          </Text>

          <Button variant="tertiary" label="VIEW THE STORIES">
            <ButtonImage />
          </Button>
        </TextContainer>
      </MainContainer>
    </>
  );
};

export default SecondContainer;
