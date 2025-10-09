import {
  ImagesContainer,
  FirstImage,
  ImageContainer,
  Line,
  Author,
  Title,
  StoryDescription,
  ButtonDiv,
  Text,
} from "./styles";

import Image1 from "../../../images/mountains.jpg";
import Image2 from "../../../images/cityscapes.jpg";
import Image3 from "../../../images/18-days-voyage.jpg";
import Image4 from "../../../images/architecturals.jpg";
import Button from "../../../components/Button";
import Arrow from "../../../assets/button-arrow.svg";

const images = [
  {
    Image: Image1,
    title: "The Mountains",
    author: "by John Appleseed",
  },
  {
    Image: Image2,
    title: "Sunset Cityscapes",
    author: "by Benjamin Cruz",
  },
  {
    Image: Image3,
    title: "18 Days Voyage",
    author: "by Alexei Borodin",
  },
  {
    Image: Image4,
    title: "Architecturals",
    author: "by Samantha Brooke",
  },
];
const ImageGrid = () => {
  return (
    <ImagesContainer>
      {images.map((image) => (
        <>
          <ImageContainer>
            <FirstImage src={image.Image} />
            <StoryDescription>
              <Text>
                <Title>{image.title}</Title>
                <Author>{image.author}</Author>
              </Text>
              <Line />
              <ButtonDiv>
                <Button variant="secondary" label="READ STORY" />
                <Arrow />
              </ButtonDiv>
            </StoryDescription>
          </ImageContainer>
        </>
      ))}
    </ImagesContainer>
  );
};

export default ImageGrid;
