import styled from "@emotion/styled";
import colors from "../../styles/colors";
import { Link } from "react-router-dom";

export const MainContainer = styled.div`
  width: 1100px;
  padding: 20px 0px;
  margin: 0px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderNav = styled.nav``;

export const HeaderList = styled.ul`
  display: flex;
  gap: 30px;
`;

export const ListItem = styled(Link)`
  color: ${colors.black};
  font-weight: bold;
  line-height: auto;
  letter-spacing: 2px;
  text-decoration: none;
  list-style: none;
  &:hover {
    cursor: pointer;
    opacity: 0.3;
  }
`;
