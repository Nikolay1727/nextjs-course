import { COLORS } from "@/shared";
import Link from "next/link";
import styled from "styled-components";

export const StyledButtonLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${COLORS.blue500};
  text-decoration: none;
`;
