import { COLORS } from "@/shared";
import Link from "next/link";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 12px;
`;

export const StyledLink = styled(Link)`
  color: ${COLORS.gray500};
  text-decoration: none;

  &[data-is-active="true"] {
    color: ${COLORS.orange500};
  }
`;
