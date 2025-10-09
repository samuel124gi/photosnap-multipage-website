import styled from "@emotion/styled";
import colors from "../../styles/colors";

export const MainContainer = styled.div`
  width: 1000px;
  padding: 10px 20px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderNav = styled.nav``;

export const HeaderList = styled.ul`
  display: flex;
  gap: 30px;
`;

export const ListItem = styled.li`
  color: ${colors.black};
  font-weight: bold;
  line-height: auto;
  letter-spacing: 2px;
  text-decoration: none;
  list-style: none;
`;
