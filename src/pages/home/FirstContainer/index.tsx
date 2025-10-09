import {
  MainContainer,
  Heading,
  Text,
  ImageContainer,
  TextContainer,
  ColorContainer,
  // InnerContainer,
} from "./styles";

import FirstImage from "../../../assets/first-image.svg";
import ButtonImage from "../../../assets/button-arrow.svg";
import Button from "../../../components/Button";

const FirstContainer = () => {
  return (
    <div>
      <MainContainer>
        {/* <InnerContainer> */}
        <ColorContainer />
        <TextContainer>
          <Heading>
            CREATE AND <br /> SHARE YOUR <br /> PHOTO STORIES.
          </Heading>
          <Text>
            Photosnap is a platform for photographers and visual <br />
            storytellers. We make it easy to share photos, tell <br /> stories
            and connect with others.
          </Text>
          <Button variant="secondary" label="GET AN INVITE">
            <ButtonImage />
          </Button>
        </TextContainer>
        <ImageContainer>
          <FirstImage />
        </ImageContainer>
        {/* </InnerContainer> */}
      </MainContainer>
    </div>
  );
};

export default FirstContainer;
