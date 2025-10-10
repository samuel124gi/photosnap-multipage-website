import styled from "@emotion/styled";
import colors from "../../styles/colors";

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background: red;
`;
export const ImageContainer = styled.div`
  height: 280px;
`;
export const ColorContainer = styled.div`
  background: linear-gradient(
    ${colors.accent03},
    ${colors.accent02},
    ${colors.accent01}
  );
  width: 4px;
  height: 280px;
  left: 0px;
  position: absolute;
`;
export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextContainer = styled.div`
  position: absolute;
  color: white;
  display: flex;
  align-items: center;
  width: 1100px;
  max-width: 1100px;
  margin: 0px auto;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-size: 40px;
  line-height: 48px;
  letter-spacing: 4.17px;
  font-weight: bold;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;
