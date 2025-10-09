import styled from "@emotion/styled";
import colors from "../../styles/colors";

export const BlogContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  max-width: 100%;
  justify-content: space-between;
`;
export const BlogImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const BlogImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 500px;
`;
export const BlogDescription = styled.div`
  position: absolute;
  color: ${colors.white};
  width: 250px;
  margin: auto;
  bottom: 20px;
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

export const BlogText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Line = styled.hr`
  border: solid 1px #979797;
  width: 100%;
  opacity: 0.25;
`;

export const BlogLink = styled.a`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
