import styled from "@emotion/styled";

export const ImageContainer = styled.div`
  height: 600px;
  position: relative;
  display: flex;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TextContainer = styled.div`
  position: absolute;
  left: 100px;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const Heading = styled.p`
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 2px;
`;

export const Title = styled.h1`
  font-size: 40px;
  line-height: 48px;
  letter-spacing: 4.17px;
  font-weight: bold;
`;

export const Container = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
`;
export const FlexContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const Author = styled.p`
  font-size: 13px;
  line-height: auto;
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
