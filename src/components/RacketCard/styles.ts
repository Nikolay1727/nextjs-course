import { COLORS } from "@/shared";
import Link from "next/link";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  border: 1px solid ${COLORS.gray200};
  border-radius: 16px;
  height: 300px;
  width: 200px;
  padding: 4px;
`;

export const ImageBox = styled.img`
  height: 250px;
  width: 180px;
`;

export const NameBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  font-size: 14px;
  color: ${COLORS.gray500};
`;
