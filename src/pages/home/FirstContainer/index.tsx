import {
  MainContainer,
  Heading,
  Text,
  ImageContainer,
  TextContainer,
  ColorContainer,
  Image,
  ButtonContainer,
  InnerContainer,
} from "./styles";

import storyImage from "../../../assets/images/create-and-share.jpg";
import ButtonImage from "../../../assets/icons/button-arrow.svg";
import Button from "../../../components/Button";

const FirstContainer = () => {
  return (
    <div>
      <MainContainer>
        <ColorContainer />
        <TextContainer>
          <InnerContainer>
            <Heading>
              CREATE AND <br /> SHARE YOUR <br /> PHOTO STORIES.
            </Heading>
            <Text>
              Photosnap is a platform for photographers and visual <br />
              storytellers. We make it easy to share photos, tell <br /> stories
              and connect with others.
            </Text>
            <ButtonContainer>
              <Button variant="secondary" label="GET AN INVITE" />
              <ButtonImage />
            </ButtonContainer>
          </InnerContainer>
        </TextContainer>

        <ImageContainer>
          <Image src={storyImage} />
        </ImageContainer>
      </MainContainer>
    </div>
  );
};

export default FirstContainer;
