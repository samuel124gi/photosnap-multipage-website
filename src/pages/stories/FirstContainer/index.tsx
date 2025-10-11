import {
  TextContainer,
  ImageContainer,
  MainContainer,
  Heading,
  Title,
  Container,
  FlexContainer,
  Author,
  Text,
  ButtonContainer,
  Image,
} from "./styles";
import image from "../../../assets/images/moon-of-appalacia.jpg";
import Button from "../../../components/Button";
import Arrow from "../../../assets/icons/button-arrow.svg";

const FirstContainer = () => {
  return (
    <MainContainer>
      <ImageContainer>
        <Image src={image} />
      </ImageContainer>
      <TextContainer>
        <Container>
          <Heading>LAST MONTH’S FEATURED STORY</Heading>
          <Title>
            HAZY FULL MOON <br /> OF APPALACHIA
          </Title>
        </Container>
        <Container>
          <FlexContainer>
            <Text>March 2nd 2020</Text>
            <Author>by John Appleseed</Author>
          </FlexContainer>
          <Text>
            The dissected plateau area, while not actually made up <br /> of
            geological mountains, is popularly called "mountains," <br />{" "}
            especially in eastern Kentucky and West Virginia, and <br /> while
            the ridges are not high, the terrain is extremely <br /> rugged.
          </Text>
        </Container>
        <ButtonContainer>
          <Button variant="secondary" label="READ THE STORY" />
          <Arrow />
        </ButtonContainer>
      </TextContainer>
    </MainContainer>
  );
};

export default FirstContainer;
