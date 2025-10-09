import {
  InnerContainer,
  MainContainer,
  Container,
  FeatureTextContainer,
  FeatureHeading,
  FeatureSubTitle,
} from "./styles";
import Image1 from "../../assets/responsive.svg";
import Image2 from "../../assets/no-limit.svg";
import Image3 from "../../assets/attention.svg";

const FEATURES = [
  {
    image: Image1,
    heading: "100% Responsive",
    subtitle:
      "No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.",
  },
  {
    image: Image2,
    heading: "No Photo Upload Limit",
    subtitle:
      "Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.",
  },
  {
    image: Image3,
    heading: "Available to Embed",
    subtitle:
      " Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.",
  },
];

const FeatureCard = () => {
  return (
    <MainContainer>
      <InnerContainer>
        {FEATURES.map((feature) => (
          <Container>
            <feature.image />
            <FeatureTextContainer>
              <FeatureHeading>{feature.heading}</FeatureHeading>
              <FeatureSubTitle>{feature.subtitle}</FeatureSubTitle>
            </FeatureTextContainer>
          </Container>
        ))}
      </InnerContainer>
    </MainContainer>
  );
};

export default FeatureCard;
