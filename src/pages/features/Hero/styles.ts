import styled from "@emotion/styled";
import colors from "../../../styles/colors";

export const TextContainer = styled.div`
  padding: 0px 80px;
  color: ${colors.white};
  display: flex;
  flex-direction: column;
  gap: 30px;
  height: 100%;
`;

export const ColorContainer = styled.div`
  background: linear-gradient(
    ${colors.accent03},
    ${colors.accent02},
    ${colors.accent01}
  );
  width: 4px;
  height: 140px;
  position: absolute;
`;

export const ImageContainer = styled.div`
  height: 490px;
  width: 700px;
  overflow: hidden;
`;
export const Image = styled.img`
  width: 100%
  height: 100%
  object-fit: cover;
`;

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.black};
  overflow: hidden;
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
