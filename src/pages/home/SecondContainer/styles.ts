import styled from "@emotion/styled";
import colors from "../../../styles/colors";

export const TextContainer = styled.div`
  color: ${colors.black};
  padding: 100px 63px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  height: fit-content;
`;

export const ImageContainer = styled.div`
  height: 530px;
  width: 760px;
  object-fit: cover;
  overflow: hidden;
`;

export const MainContainer = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  background: ${colors.white};
  overflow: hidden;
  height: 530px;
`;

export const Heading = styled.h1`
  font-size: 40px;
  line-height: 48px;
  letter-spacing: 4.17px;
  font-weight: bold;
`;

export const Text = styled.p`
  font-size: 15px;
  line-height: 25px;
  letter-spacing: 0px;
  opacity: 0.6;
`;
