import { COLORS } from "@/shared";
import Link from "next/link";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  text-decoration: none;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
`;

export const RacketImageBox = styled.div`
  display: flex;
  border: 1px solid ${COLORS.gray200};
  border-radius: 16px;
  padding: 4px;
  justify-content: center;
`;

export const RacketImage = styled.img`
  height: 400px;
`;

export const RacketName = styled.span`
  font-weight: 500;
  color: ${COLORS.gray500};
`;
