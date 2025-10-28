import styled from "@emotion/styled";
import colors from "../../../styles/colors";

export const TextContainer = styled.div`
  padding: 0px 65px;
  color: ${colors.black};
  display: flex;
  justify-content: center;
  height: 100%;
`;

export const InnerContainer = styled.div`
  width: 387px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
`;
export const ImageContainer = styled.div`
  height: 100%;
  width: 100%;
`;

export const Image = styled.img`
  width: 100%
  height: 100%
  object-fit: cover;
`;

export const MainContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background: ${colors.white};
  // height: 100%;
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
export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;
