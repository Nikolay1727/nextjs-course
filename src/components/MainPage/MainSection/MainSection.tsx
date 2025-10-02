"use client";
import { ReactNode } from "react";
import { Container } from "./styles";

interface Props {
  children: ReactNode;
}

export const MainSection = ({ children }: Props) => (
  <Container>{children}</Container>
);
