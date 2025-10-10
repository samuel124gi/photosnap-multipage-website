import {
  InnerContainer,
  MainContainer,
  Container,
  FeatureTextContainer,
  FeatureHeading,
  FeatureSubTitle,
} from "./styles";
import Image1 from "../../../assets/icons/custom-domain.svg";
import Image2 from "../../../assets/icons/boost-exposure.svg";
import Image3 from "../../../assets/icons/drag-drop.svg";

const FEATURES = [
  {
    image: Image1,
    heading: "Custom Domain",
    subtitle:
      "With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!",
  },
  {
    image: Image2,
    heading: "Boost Your Exposure",
    subtitle:
      "Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.",
  },
  {
    image: Image3,
    heading: "Drag & Drop Image",
    subtitle:
      " Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.",
  },
];

const Card = () => {
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

export default Card;
