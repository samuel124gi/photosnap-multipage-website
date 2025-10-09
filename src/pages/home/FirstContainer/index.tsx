import {
  MainContainer,
  Heading,
  Text,
  ImageContainer,
  TextContainer,
  ColorContainer,
  Image,
} from "./styles";

import storyImage from "../../../images/create-and-share.jpg";
import ButtonImage from "../../../assets/button-arrow.svg";
import Button from "../../../components/Button";

const FirstContainer = () => {
  return (
    <div>
      <MainContainer>
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
          <Image src={storyImage} />
        </ImageContainer>
      </MainContainer>
    </div>
  );
};

export default FirstContainer;
