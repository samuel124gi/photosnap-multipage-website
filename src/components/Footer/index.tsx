import {
  MainContainer,
  InnerContainer,
  LeftContainer,
  RightContainer,
  Container,
  ImagesContainer,
  FooterNav,
  FooterLink,
  Buttoncontainer,
  CopyRight,
} from "./styles";

import Logo from "../../assets/icons/footer-logo.svg";
import Instagram from "../../assets/icons/instagram.svg";
import Facebook from "../../assets/icons/facebook.svg";
import Twitter from "../../assets/icons/twitter.svg";
import Youtube from "../../assets/icons/youtube.svg";
import Social from "../../assets/icons/social.svg";
import Arrow from "../../assets/icons/button-arrow.svg";
import Button from "../Button";

const Footer = () => {
  return (
    <MainContainer>
      <InnerContainer>
        <LeftContainer>
          <Container>
            <Logo />
            <ImagesContainer>
              <Instagram />
              <Facebook />
              <Twitter />
              <Youtube />
              <Social />
            </ImagesContainer>
          </Container>
          <Container>
            <FooterNav>
              <FooterLink to={"/"}>HOME</FooterLink>
              <FooterLink to={"/stories"}>STORIES</FooterLink>
              <FooterLink to={"/feature"}>FEATURES</FooterLink>
              <FooterLink to={"/pricing"}>PRICING</FooterLink>
            </FooterNav>
          </Container>
        </LeftContainer>
        <RightContainer>
          <Buttoncontainer>
            <Button variant="secondary" label="GET AN INVITE" />
            <Arrow />
          </Buttoncontainer>
          <CopyRight>Copyright 2019. All Rights Reserved</CopyRight>
        </RightContainer>
      </InnerContainer>
    </MainContainer>
  );
};

export default Footer;
