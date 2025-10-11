import styled from "@emotion/styled";
import colors from "../../styles/colors";

export const MainContainer = styled.div`
  width: 100%;
  padding: 0px 50px;
`;
export const InnerContainer = styled.div`
  width: 1100px;
  max-width: 1100px;
  display: flex;
  margin: 0px auto;
  gap: 30px;
  justify-content: space-between;
  height: 50vh;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const FeatureTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  line-height: 25px;
  text-align: center;
  color: ${colors.black};
`;

export const FeatureHeading = styled.h1`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;

export const FeatureSubTitle = styled.p`
  font-size: 15px;
  letter-spacing: 0px;
  opacity: 0.6;
`;
