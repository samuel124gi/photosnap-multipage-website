import {
  InnerContainer,
  MainContainer,
  Container,
  TextContainer,
  Heading,
  SubTitle,
} from "./styles";
import Image1 from "../../assets/responsive.svg";
import Image2 from "../../assets/no-limit.svg";
import Image3 from "../../assets/attention.svg";

const Card = () => {
  return (
    <MainContainer>
      <InnerContainer>
        <Container>
          <Image1 />
          <TextContainer>
            <Heading>100% Responsive</Heading>
            <SubTitle>
              No matter which the device you’re on, our site is fully responsive
              and stories look beautiful on any screen.
            </SubTitle>
          </TextContainer>
        </Container>
        <Container>
          <Image2 />
          <TextContainer>
            <Heading>No Photo Upload Limit</Heading>
            <SubTitle>
              Our tool has no limits on uploads or bandwidth. Freely upload in
              bulk and share all of your stories in one go.
            </SubTitle>
          </TextContainer>
        </Container>
        <Container>
          <Image3 />
          <TextContainer>
            <Heading>Available to Embed</Heading>
            <SubTitle>
              Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube
              videos, Google Maps, and more.{" "}
            </SubTitle>
          </TextContainer>
        </Container>
      </InnerContainer>
    </MainContainer>
  );
};

export default Card;
