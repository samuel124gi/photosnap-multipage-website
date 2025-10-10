import styled from "@emotion/styled";
import colors from "../../styles/colors";
import { Link } from "react-router-dom";

export const MainContainer = styled.div`
  width: 100%;
  background-color: ${colors.black};
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InnerContainer = styled.div`
  width: 1100px;
  max-width: 1100px;
  margin: 0px auto;
  display: flex;
  justify-content: space-between;
  height: 122px;
`;

export const LeftContainer = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  gap: 80px;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const ImagesContainer = styled.nav`
  display: flex;
  gap: 15px;
`;

export const FooterNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const FooterLink = styled(Link)`
  color: ${colors.white};
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 2px;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    opacity: 0.3;
  }
`;

export const Buttoncontainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const CopyRight = styled.small`
  color: ${colors.white};
  opacity: 50.25%;
  font-size: i5px;
  letter-spacing: 0px;
`;
