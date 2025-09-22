import { COLORS } from "@/shared";
import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 64px;
  max-height: 64px;
  border-bottom: 1px solid ${COLORS.gray200};
  padding: 0px 24px;
`;

export const TitleBox = styled.div`
  flex: 1;
  text-align: center;
`;

export const MenuBox = styled.div`
  display: flex;
`;
