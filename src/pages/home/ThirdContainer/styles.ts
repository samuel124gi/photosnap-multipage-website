import styled from "@emotion/styled";
import colors from "../../../styles/colors";

export const TextContainer = styled.div`
  color: ${colors.black};
  padding: 0px 63px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  height: 100%;

  justify-content: center;
`;

export const ImageContainer = styled.div`
  height: 530px;
  width: 760px;
`;

export const Image = styled.img`
  width: 100%
  height: 100%
  object-fit: cover;
`;
export const MainContainer = styled.div`
  width: 100%;
  align-items: center;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background: ${colors.white};
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
