import Logo from "../../assets/icons/logo.svg";
import { MainContainer, ListItem, HeaderList, HeaderNav } from "./styles";
import Button from "../Button";

const Header = () => {
  return (
    <MainContainer>
      <Logo />
      <HeaderNav>
        <HeaderList>
          <ListItem>STORIES</ListItem>
          <ListItem>FEATURES</ListItem>
          <ListItem>PRICING</ListItem>
        </HeaderList>
      </HeaderNav>
      <Button variant="primary" label="GET AN INVITE" />
    </MainContainer>
  );
};

export default Header;
