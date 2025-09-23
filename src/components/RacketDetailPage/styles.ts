import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 100px;
  gap: 16px;
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
`;

export const RightContent = styled.div`
  display: flex;
  align-items: center;
`;

export const ImageBox = styled.img`
  height: 500px;
  width: 350px;
`;

export const BoldText = styled.span`
  font-size: 24px;
  font-weight: 600;
`;

export const Description = styled.div`
  font-size: 18px;
`;
