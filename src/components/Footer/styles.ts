import { COLORS } from "@/shared";
import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 200px;
  max-height: 200px;
  border-top: 1px solid ${COLORS.gray200};
  padding: 16px 24px;
`;

export const TitleBox = styled.div`
  flex: 1;
  align-content: center;
`;

export const InfoText = styled.div`
  font-size: 12px;
  color: ${COLORS.gray500};
`;
