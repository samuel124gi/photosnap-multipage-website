import Logo from "../../assets/icons/logo.svg";
import { MainContainer, ListItem, HeaderList, HeaderNav } from "./styles";
import Button from "../Button";

const Header = () => {
  return (
    <MainContainer>
      <Logo />
      <HeaderNav>
        <HeaderList>
          <ListItem to={"/stories"}>STORIES</ListItem>
          <ListItem to={"/feature"}>FEATURES</ListItem>
          <ListItem to={"/pricing"}>PRICING</ListItem>
        </HeaderList>
      </HeaderNav>
      <Button variant="primary" label="GET AN INVITE" />
    </MainContainer>
  );
};

export default Header;
