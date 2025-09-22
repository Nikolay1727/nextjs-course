"use client";
import { Container } from "./styles";

export const PageTitle = ({ children }: { children: string }) => (
  <Container>{children.toUpperCase()}</Container>
);
