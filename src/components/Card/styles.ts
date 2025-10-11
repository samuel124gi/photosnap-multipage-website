import styled from "@emotion/styled";
import colors from "../../styles/colors";

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  max-width: 100%;
  justify-content: space-between;
`;
export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const CardImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 500px;
  &:hover {
    transform: translateY(-20px);
    cursor: pointer;
  }
`;
export const CardDescription = styled.div`
  position: absolute;
  color: ${colors.white};
  width: 250px;
  bottom: 30px;
  display: flex;

  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
`;
export const Title = styled.h1`
  font-size: 18px;
  line-height: 25px;
  font-weight: bold;
`;

export const Author = styled.p`
  font-size: 13px;
  letter-spacing: auto;
`;

export const CardText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Line = styled.hr`
  border: solid 1px #979797;
  width: 100%;
  opacity: 0.25;
`;

export const CardLink = styled.a`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
